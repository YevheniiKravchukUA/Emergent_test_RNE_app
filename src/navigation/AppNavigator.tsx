<<<<<<< HEAD
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
=======
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStack} from './AuthStack';
import {MainTabs} from './MainTabs';
import {LoginForm, RegisterForm, User} from '@types/auth';
import {RootStackParamList} from '@types/navigation';

const Stack = createStackNavigator<RootStackParamList>();
const USER_STORAGE_KEY = '@volstora_app_user';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

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
<<<<<<< HEAD
      console.error("Ошибка проверки авторизации:", error);
=======
      console.error('Ошибка проверки авторизации:', error);
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (credentials: LoginForm) => {
    try {
      // Здесь должна быть логика авторизации с сервером
      // Пока что создаем фиктивного пользователя
      const newUser: User = {
<<<<<<< HEAD
        id: "1",
        name: "Пользователь",
=======
        id: '1',
        name: 'Пользователь',
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
        email: credentials.email,
        createdAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
<<<<<<< HEAD
      console.error("Ошибка авторизации:", error);
=======
      console.error('Ошибка авторизации:', error);
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
    }
  };

  const handleRegister = async (userData: RegisterForm) => {
    try {
      // Здесь должна быть логика регистрации с сервером
      // Пока что создаем фиктивного пользователя
      const newUser: User = {
<<<<<<< HEAD
        id: "1",
=======
        id: '1',
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
        name: userData.name,
        email: userData.email,
        createdAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
<<<<<<< HEAD
      console.error("Ошибка регистрации:", error);
=======
      console.error('Ошибка регистрации:', error);
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      setUser(null);
    } catch (error) {
<<<<<<< HEAD
      console.error("Ошибка выхода:", error);
=======
      console.error('Ошибка выхода:', error);
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
    }
  };

  if (loading) {
    // Здесь можно добавить экран загрузки
    return null;
  }

  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator screenOptions={{ headerShown: false }}>
=======
      <Stack.Navigator screenOptions={{headerShown: false}}>
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
        {user ? (
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{
<<<<<<< HEAD
              animationTypeForReplace: "push",
=======
              animationTypeForReplace: 'push',
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
            }}
          />
        ) : (
          <Stack.Screen name="Auth">
<<<<<<< HEAD
            {(props) => (
=======
            {props => (
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
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
<<<<<<< HEAD
};
=======
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
