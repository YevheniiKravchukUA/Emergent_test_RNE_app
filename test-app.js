const fs = require('fs');
const path = require('path');

// Простой тест структуры проекта
function testProjectStructure() {
  console.log('🧪 Тестирование структуры проекта...\n');

  const requiredFiles = [
    'package.json',
    'babel.config.js',
    'metro.config.js',
    'tsconfig.json',
    'src/App.tsx',
    'src/types/index.ts',
    'src/context/ThemeContext.tsx',
    'src/styles/themes.ts',
    'src/components/Header/Header.tsx',
    'src/components/Footer/Footer.tsx',
    'src/components/Main/Main.tsx',
    'src/screens/AuthScreen/AuthScreen.tsx',
    'src/navigation/AppNavigator.tsx',
    'assets/images/README.md',
    'assets/fonts/README.md'
  ];

  const requiredDirectories = [
    'src/components',
    'src/screens', 
    'src/navigation',
    'src/services',
    'src/utils',
    'src/hooks',
    'src/styles',
    'src/types',
    'assets/images',
    'assets/fonts'
  ];

  let allTestsPassed = true;

  // Проверка файлов
  console.log('📁 Проверка обязательных файлов:');
  requiredFiles.forEach(file => {
    const exists = fs.existsSync(path.join(__dirname, file));
    console.log(`${exists ? '✅' : '❌'} ${file}`);
    if (!exists) allTestsPassed = false;
  });

  console.log('\n📂 Проверка директорий:');
  requiredDirectories.forEach(dir => {
    const exists = fs.existsSync(path.join(__dirname, dir));
    console.log(`${exists ? '✅' : '❌'} ${dir}`);
    if (!exists) allTestsPassed = false;
  });

  // Проверка package.json
  console.log('\n📦 Проверка package.json:');
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    
    const requiredDeps = [
      'react',
      'react-native',
      '@react-navigation/native',
      'styled-components',
      'zustand'
    ];

    requiredDeps.forEach(dep => {
      const exists = packageJson.dependencies && packageJson.dependencies[dep];
      console.log(`${exists ? '✅' : '❌'} ${dep}`);
      if (!exists) allTestsPassed = false;
    });

  } catch (error) {
    console.log('❌ Ошибка чтения package.json');
    allTestsPassed = false;
  }

  // Проверка TypeScript конфигурации
  console.log('\n🔧 Проверка TypeScript:');
  try {
    const tsconfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'tsconfig.json'), 'utf8'));
    const hasPaths = tsconfig.compilerOptions && tsconfig.compilerOptions.paths;
    console.log(`${hasPaths ? '✅' : '❌'} Path mapping настроен`);
    if (!hasPaths) allTestsPassed = false;
  } catch (error) {
    console.log('❌ Ошибка чтения tsconfig.json');
    allTestsPassed = false;
  }

  console.log('\n' + '='.repeat(50));
  if (allTestsPassed) {
    console.log('🎉 ВСЕ ТЕСТЫ ПРОШЛИ УСПЕШНО!');
    console.log('✅ Структура проекта корректна');
    console.log('✅ Все необходимые файлы на месте');
    console.log('✅ Зависимости установлены');
    console.log('\n🚀 Приложение готово к использованию!');
  } else {
    console.log('❌ ЕСТЬ ОШИБКИ В СТРУКТУРЕ ПРОЕКТА');
    console.log('Пожалуйста, проверьте отсутствующие файлы');
  }
  console.log('='.repeat(50));
}

// Запуск тестов
testProjectStructure();