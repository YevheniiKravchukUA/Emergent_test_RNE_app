const { spawn } = require('child_process');
const http = require('http');

console.log('🧪 Тестирование веб-версии приложения...\n');

// Функция для проверки доступности сервера
function checkServer(port, timeout = 30000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    function tryConnect() {
      if (Date.now() - startTime > timeout) {
        reject(new Error(`Timeout: сервер не отвечает через ${timeout/1000} секунд`));
        return;
      }
      
      const req = http.get(`http://localhost:${port}`, (res) => {
        resolve({
          status: res.statusCode,
          headers: res.headers
        });
      });
      
      req.on('error', () => {
        // Попробуем еще раз через 1 секунду
        setTimeout(tryConnect, 1000);
      });
      
      req.setTimeout(2000, () => {
        req.destroy();
        setTimeout(tryConnect, 1000);
      });
    }
    
    tryConnect();
  });
}

// Запуск веб-сервера
async function testWebServer() {
  console.log('📡 Запуск веб-сервера...');
  
  const webProcess = spawn('yarn', ['web'], {
    stdio: 'pipe',
    shell: true
  });
  
  let serverOutput = '';
  webProcess.stdout.on('data', (data) => {
    serverOutput += data.toString();
  });
  
  webProcess.stderr.on('data', (data) => {
    serverOutput += data.toString();
  });
  
  try {
    // Ждем запуска сервера
    console.log('⏳ Ожидание запуска сервера (до 30 секунд)...');
    const response = await checkServer(3000, 30000);
    
    console.log('✅ Сервер успешно запущен!');
    console.log(`📊 Статус: ${response.status}`);
    console.log(`🌐 URL: http://localhost:3000`);
    
    // Проверяем содержимое
    const contentCheck = await new Promise((resolve) => {
      const req = http.get('http://localhost:3000', (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => resolve(body));
      });
      req.on('error', () => resolve(''));
    });
    
    if (contentCheck.includes('Volstora Base App')) {
      console.log('✅ HTML содержимое загружается корректно');
    } else {
      console.log('⚠️ HTML загружается, но содержимое может быть неполным');
    }
    
    console.log('\n🎉 Тест завершен успешно!');
    console.log('📱 Откройте http://localhost:3000 в браузере для проверки приложения');
    
  } catch (error) {
    console.log('❌ Ошибка запуска сервера:');
    console.log(error.message);
    console.log('\n📋 Вывод сервера:');
    console.log(serverOutput.slice(-500)); // Последние 500 символов
    
    console.log('\n🔧 Попробуйте:');
    console.log('1. yarn install');
    console.log('2. rm -rf node_modules && yarn install');
    console.log('3. yarn add react-dom');
  } finally {
    // Останавливаем сервер
    webProcess.kill('SIGTERM');
    setTimeout(() => webProcess.kill('SIGKILL'), 2000);
  }
}

// Запуск теста
testWebServer().catch(console.error);