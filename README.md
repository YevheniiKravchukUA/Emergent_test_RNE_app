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

## 🚀 Быстрый старт

### 1. Клонирование проекта

```bash
# Клонируйте репозиторий
git clone <repository-url>
cd volstora-base-app

# Установите зависимости
yarn install

# Для iOS (только macOS)
cd ios && pod install && cd ..
```

### 2. Запуск приложения

```bash
# Web
yarn web

# Android  
yarn android

# iOS (только macOS)
yarn ios

# Metro bundler (для разработки)
yarn start
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
