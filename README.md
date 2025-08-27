# Volstora Base App - React Native

Базовое переиспользуемое React Native приложение для Web/Android/iOS с полной настройкой инфраструктуры, системой тем и готовыми компонентами.

## 🎯 Особенности

- ✅ **Мультиплатформенность**: Web, Android, iOS
- ✅ **TypeScript**: Полная типизация
- ✅ **Две темы**: Volstora (темная) и Tesla (светлая) с переключением
- ✅ **Готовые компоненты**: Header, Footer, Main, Button, Input
- ✅ **Навигация**: React Navigation с авторизацией
- ✅ **Страницы**: Auth, Register, HomePage, TestSpace
- ✅ **Архитектура**: Модульная структура с Context API
- ✅ **API**: Готовая структура для интеграций
- ✅ **Валидация**: Формы с проверкой данных
- ✅ **Тесты**: Jest и Testing Library

## 📁 Структура проекта

```
volstora-base-app/
├── src/
│   ├── app/                    # Основные файлы приложения
│   ├── components/             # Переиспользуемые компоненты
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Main/
│   │   ├── Button/
│   │   └── Input/
│   ├── context/               # React Context (темы)
│   ├── hooks/                 # Кастомные хуки
│   ├── navigation/            # Роутинг и навигация
│   ├── screens/               # Экраны приложения
│   │   ├── AuthScreen/
│   │   ├── RegisterScreen/
│   │   ├── HomePageScreen/
│   │   └── TestSpaceScreen/
│   ├── services/              # API и сервисы
│   ├── styles/                # Темы, цвета, типографика
│   ├── types/                 # TypeScript типы
│   └── utils/                 # Утилиты и хелперы
├── assets/
│   ├── images/               # Изображения проекта
│   └── fonts/                # Шрифты проекта
└── config files              # Конфигурация (babel, metro, etc.)
```

## 🚀 Полный гайд по установке (для новичков)

> **Внимание!** Если вы никогда не занимались разработкой, следуйте этим инструкциям пошагово. Каждый шаг важен!

### Шаг 1: Установка базовых инструментов

#### 🖥️ Windows

**1.1. Установка Node.js**
1. Перейдите на https://nodejs.org/
2. Скачайте **LTS версию** (рекомендуется)
3. Запустите скаченный `.msi` файл
4. Следуйте инструкциям установщика (оставьте все по умолчанию)
5. **Перезагрузите компьютер**

**1.2. Установка Git**
1. Перейдите на https://git-scm.com/download/win
2. Скачайте Git для Windows
3. Запустите установщик
4. При установке выберите:
   - ✅ "Git from the command line and also from 3rd-party software"
   - ✅ "Use the OpenSSL library"
   - ✅ "Checkout Windows-style, commit Unix-style line endings"

**1.3. Установка Yarn**
1. Откройте **Командную строку** (`Win + R` → введите `cmd` → Enter)
2. Введите: `npm install -g yarn`
3. Дождитесь окончания установки

**1.4. Проверка установки**
Введите в командной строке:
```bash
node --version    # Должен показать версию (например, v18.17.0)
npm --version     # Должен показать версию (например, 9.6.7)
yarn --version    # Должен показать версию (например, 1.22.19)
git --version     # Должен показать версию (например, 2.41.0)
```

#### 🍎 macOS

**1.1. Установка Homebrew (менеджер пакетов)**
1. Откройте **Terminal** (`Cmd + Space` → введите "Terminal")
2. Вставьте и выполните:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**1.2. Установка Node.js и других инструментов**
```bash
brew install node
brew install git
brew install yarn
```

**1.3. Проверка установки**
```bash
node --version
npm --version  
yarn --version
git --version
```

#### 🐧 Ubuntu/Linux

**1.1. Обновление системы**
```bash
sudo apt update && sudo apt upgrade -y
```

**1.2. Установка Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**1.3. Установка остальных инструментов**
```bash
sudo apt install git
sudo npm install -g yarn
```

### Шаг 2: Установка React Native

#### Для всех операционных систем:

**2.1. Установка React Native CLI**
```bash
npm install -g @react-native-community/cli
```

**2.2. Проверка установки**
```bash
npx react-native --version
```

#### 🤖 Дополнительно для Android (все ОС)

**2.3. Установка Android Studio**
1. Скачайте с https://developer.android.com/studio
2. Установите Android Studio
3. Откройте Android Studio
4. Перейдите в **Tools** → **SDK Manager**
5. Установите:
   - ✅ Android SDK Platform 34
   - ✅ Android SDK Build-Tools 34
   - ✅ Android Emulator

**2.4. Настройка переменных окружения**

**Windows:**
1. Откройте "Переменные среды" (`Win + R` → `sysdm.cpl` → Дополнительно → Переменные среды)
2. Добавьте новые переменные:
   - `ANDROID_HOME` = `C:\Users\[ВашеИмя]\AppData\Local\Android\Sdk`
   - Добавьте в `Path`: `%ANDROID_HOME%\platform-tools`

**macOS/Linux:**
Добавьте в `~/.bashrc` или `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

#### 🍎 Дополнительно для iOS (только macOS)

**2.5. Установка Xcode**
1. Установите Xcode из App Store (это займет много времени!)
2. Откройте Xcode и примите лицензионное соглашение
3. Установите Command Line Tools:
```bash
xcode-select --install
```

**2.6. Установка CocoaPods**
```bash
sudo gem install cocoapods
```

### Шаг 3: Клонирование и запуск проекта

**3.1. Клонирование репозитория**
```bash
# Перейдите в папку где хотите разместить проект
cd Desktop  # Например, на рабочий стол

# Клонируйте репозиторий (замените YOUR-REPO-URL на фактический URL)
git clone YOUR-REPO-URL
cd volstora-base-app
```

**3.2. Установка зависимостей**
```bash
# Установка всех необходимых пакетов (это займет несколько минут)
yarn install

# Только для macOS - установка iOS зависимостей
cd ios && pod install && cd ..
```

**3.3. Запуск приложения**

**Веб-версия (самый простой способ):**
```bash
yarn web
# Откроется браузер с приложением на http://localhost:3000
```

**Android (нужен Android Studio):**
```bash
# Сначала запустите Android эмулятор через Android Studio
# Затем в терминале:
yarn android
```

**iOS (только macOS):**
```bash
yarn ios
```

### 🆘 Решение проблем

#### Проблема: "Command not found"
**Решение:** Перезагрузите терминал/командную строку или компьютер

#### Проблема: "Permission denied" (macOS/Linux)
**Решение:** Добавьте `sudo` перед командой:
```bash
sudo npm install -g @react-native-community/cli
```

#### Проблема: Android эмулятор не запускается
**Решение:** 
1. Откройте Android Studio
2. Tools → AVD Manager
3. Create Virtual Device
4. Выберите любое устройство → Next → Download системный образ → Finish

#### Проблема: "Metro bundler error"
**Решение:**
```bash
# Очистите кэш
yarn start --reset-cache
```

#### Проблема: iOS симулятор не открывается (macOS)
**Решение:**
```bash
# Откройте симулятор вручную
open -a Simulator
# Затем запустите приложение
yarn ios
```

### 📱 Что вы увидите после запуска

1. **Страница авторизации** с полями для email и пароля
2. **Переключение тем** - кнопка для смены между темной (Volstora) и светлой (Tesla) темами
3. **Навигация** - возможность переходить между страницами
4. **Адаптивный дизайн** - приложение подстраивается под размер экрана

### 🎯 Готово к работе!

После успешного запуска у вас есть полностью рабочее приложение. Теперь вы можете:
- Кастомизировать дизайн под свой бренд
- Добавлять новые страницы и функции  
- Интегрироваться с реальными API
- Использовать AI для дальнейшей разработки

## 🚀 Быстрый старт (для опытных разработчиков)

Если вы уже имеете опыт в разработке:

```bash
# Клонирование и установка
git clone <repository-url>
cd volstora-base-app
yarn install

# iOS зависимости (только macOS)
cd ios && pod install && cd ..

# Запуск
yarn web      # Веб-версия
yarn android  # Android
yarn ios      # iOS (только macOS)
yarn start    # Metro bundler
```

## ⚙️ Настройка для вашего проекта

### 1. Базовая настройка

Отредактируйте следующие файлы:

```javascript
// package.json
{
  "name": "your-app-name",
  "displayName": "Your App Name"
}

// src/components/Header/Header.tsx
title="Your App Name"

// src/screens/AuthScreen/AuthScreen.tsx  
<LogoText>Your Company</LogoText>
```

### 2. Цветовая схема

Измените цвета в `src/styles/colors.ts`:

```typescript
export const YourColors = {
  primary: '#YOUR_PRIMARY_COLOR',
  secondary: '#YOUR_SECONDARY_COLOR',
  // ... остальные цвета
};
```

Обновите темы в `src/styles/themes.ts`:

```typescript
export const yourTheme: Theme = {
  colors: {
    primary: YourColors.primary,
    // ... настройте под ваш бренд
  },
  // ...
};
```

### 3. Добавление кастомных шрифтов

1. Поместите файлы шрифтов в `assets/fonts/`
2. Создайте `react-native.config.js`:

```javascript
module.exports = {
  assets: ['./assets/fonts/'],
};
```

3. Запустите: `npx react-native-asset`
4. Обновите `src/styles/typography.ts`

### 4. Настройка API

Отредактируйте `src/services/api.ts`:

```typescript
const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3000/api' 
  : 'https://your-api.com/api';
```

### 5. Добавление новых страниц

1. Создайте папку в `src/screens/YourScreen/`
2. Добавьте типы в `src/types/navigation.ts`
3. Зарегистрируйте в навигации

## 🎨 Система тем

Приложение поддерживает две предустановленные темы:

### Default Theme (Volstora - Темная)
- Основан на цветовой палитре Volstora
- Темный фон с синими акцентами
- Подходит для энергетических/технических приложений

### Primary Theme (Tesla - Светлая)  
- Основан на дизайне Tesla
- Светлый фон с черными/красными акцентами
- Подходит для современных приложений

### Использование тем

```typescript
import {useTheme} from '@hooks/useTheme';

const MyComponent = () => {
  const {theme, toggleTheme, themeType} = useTheme();
  
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{color: theme.colors.text.primary}}>
        Текущая тема: {themeType}
      </Text>
      <Button onPress={toggleTheme} title="Переключить тему" />
    </View>
  );
};
```

## 📱 Готовые компоненты

### Header
```tsx
<Header 
  title="Заголовок"
  showBackButton={true}
  onBackPress={() => navigation.goBack()}
  rightComponent={<Button />}
/>
```

### Footer  
```tsx
<Footer showThemeToggle={true} />
```

### Main
```tsx
<Main 
  title="Заголовок страницы"
  scrollable={true}
>
  {/* Ваш контент */}
</Main>
```

### Button
```tsx
<Button
  title="Кнопка"
  onPress={handlePress}
  variant="primary" // primary, secondary, outline
  size="md" // sm, md, lg
  loading={false}
  disabled={false}
/>
```

### Input
```tsx
<Input
  label="Email"
  placeholder="Введите email"
  value={email}
  onChangeText={setEmail}
  secureTextEntry={false}
  error={errors.email}
/>
```

## 🔧 Сборка приложения

### Web
```bash
yarn build:web
```

### Android
```bash
# Debug
yarn android

# Release
yarn build:android
```

### iOS  
```bash
# Debug (только macOS)
yarn ios

# Release (только macOS)
yarn build:ios
```

## 🧪 Тестирование

```bash
# Запуск тестов
yarn test

# Тесты с покрытием  
yarn test --coverage

# Тесты в watch режиме
yarn test --watch
```

## 📋 Чеклист для развертывания

- [ ] Изменить название приложения в `package.json`
- [ ] Настроить цветовую схему под ваш бренд
- [ ] Добавить ваш логотип в `assets/images/`
- [ ] Настроить API endpoints в `src/services/api.ts`
- [ ] Обновить иконку приложения для Android/iOS
- [ ] Настроить splash screen
- [ ] Добавить необходимые разрешения
- [ ] Настроить push-уведомления (если нужны)
- [ ] Добавить аналитику (если нужна)
- [ ] Протестировать на всех платформах

## 🔄 Обновления

При обновлении базового приложения:

1. Сохраните ваши кастомизации
2. Обновите базовые файлы
3. Примените ваши изменения
4. Протестируйте функциональность

## 📞 Поддержка

Для вопросов и предложений:
- GitHub Issues: [создать issue]
- Email: support@volstora.com
- Документация: [ссылка на docs]

## 📄 Лицензия

MIT License - можете использовать для коммерческих проектов.

---

**Создано командой Volstora** 🚀
