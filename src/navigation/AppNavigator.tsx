import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthStack } from "./AuthStack";
import { MainTabs } from "./MainTabs";
import { LoginForm, RegisterForm, User } from "@types/auth";
import { RootStackParamList } from "@types/navigation";

const Stack = createStackNavigator<RootStackParamList>();
const USER_STORAGE_KEY = "@volstora_app_user";

export const AppNavigator: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const savedUser = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error("Ошибка проверки авторизации:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (credentials: LoginForm) => {
    try {
      // Здесь должна быть логика авторизации с сервером
      // Пока что создаем фиктивного пользователя
      const newUser: User = {
        id: "1",
        name: "Пользователь",
        email: credentials.email,
        createdAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
  };

  const handleRegister = async (userData: RegisterForm) => {
    try {
      // Здесь должна быть логика регистрации с сервером
      // Пока что создаем фиктивного пользователя
      const newUser: User = {
        id: "1",
        name: userData.name,
        email: userData.email,
        createdAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      setUser(null);
    } catch (error) {
      console.error("Ошибка выхода:", error);
    }
  };

  if (loading) {
    // Здесь можно добавить экран загрузки
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{
              animationTypeForReplace: "push",
            }}
          />
        ) : (
          <Stack.Screen name="Auth">
            {(props) => (
              <AuthStack
                {...props}
                onLogin={handleLogin}
                onRegister={handleRegister}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
