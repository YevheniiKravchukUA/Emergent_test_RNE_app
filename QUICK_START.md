# ⚡ Быстрый старт за 5 минут

> Для тех кто хочет **максимально быстро** запустить приложение

## 🎯 Для новичков (никогда не программировал)

### 1️⃣ Установите основные инструменты

**Windows:**
```bash
# Скачайте и установите Node.js с https://nodejs.org/ (LTS версия)
# Перезагрузите компьютер после установки
# Откройте командную строку (Win+R → cmd)
npm install -g yarn
npm install -g @react-native-community/cli
```

**Mac:**
```bash
# Откройте Terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node yarn
npm install -g @react-native-community/cli
```

### 2️⃣ Клонируйте и запустите

```bash
git clone YOUR-REPO-URL
cd volstora-base-app
yarn install
yarn web
```

**Готово!** Через минуту откроется браузер с приложением 🎉

---

## 🚀 Для опытных разработчиков

```bash
git clone YOUR-REPO-URL
cd volstora-base-app && yarn install
yarn web    # Веб-версия
yarn android # Android (нужен эмулятор)  
yarn ios    # iOS (только macOS)
```

---

## 🔧 Если что-то не работает

**Проверьте версии:**
```bash
node --version  # Должно быть v16+
yarn --version  # Должно быть 1.22+
```

**Очистите кэш:**
```bash
yarn cache clean
yarn start --reset-cache
```

**Обратитесь за помощью:**
- 📖 Полные инструкции: `README.md`
- ❓ Частые проблемы: `FAQ.md`
- 🐛 Создать issue на GitHub

---

## 📱 Что получите

✅ **Авторизация** - готовая форма входа и регистрации  
✅ **2 темы** - Volstora (темная) и Tesla (светлая)  
✅ **Навигация** - переходы между экранами  
✅ **Компоненты** - Header, Footer, Button, Input  
✅ **TypeScript** - полная типизация  
✅ **Мультиплатформенность** - Web/Android/iOS  

**Время экономии: 2-4 недели разработки!** ⏰