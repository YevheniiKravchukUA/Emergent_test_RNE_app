<<<<<<< HEAD
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";
import { Button, Input } from "@components";
import { RegisterForm } from "@types/auth";
=======
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
import {Button, Input} from '@components';
import {RegisterForm} from '@types/auth';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

interface RegisterScreenProps {
  onRegister: (userData: RegisterForm) => void;
  onNavigateToLogin: () => void;
}

<<<<<<< HEAD
const Container = styled(KeyboardAvoidingView)<{ backgroundColor: string }>`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
=======
const Container = styled(KeyboardAvoidingView)<{backgroundColor: string}>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
`;

const ContentContainer = styled(ScrollView)`
  flex: 1;
`;

const InnerContainer = styled(View)`
  flex: 1;
  justify-content: center;
  padding: 24px;
  min-height: 700px;
`;

const HeaderContainer = styled(View)`
  align-items: center;
  margin-bottom: 32px;
`;

<<<<<<< HEAD
const TitleText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 28px;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily.bold};
`;

const SubtitleText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
=======
const TitleText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 28px;
  font-weight: bold;
  font-family: ${props => props.theme.typography.fontFamily.bold};
`;

const SubtitleText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 16px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  text-align: center;
  margin-top: 8px;
`;

const FormContainer = styled(View)`
  margin-bottom: 24px;
`;

const LoginContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

<<<<<<< HEAD
const LoginText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
=======
const LoginText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 14px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
`;

const LoginLink = styled(TouchableOpacity)`
  margin-left: 4px;
`;

<<<<<<< HEAD
const LoginLinkText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 600;
  font-family: ${(props) => props.theme.typography.fontFamily.bold};
=======
const LoginLinkText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 600;
  font-family: ${props => props.theme.typography.fontFamily.bold};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
`;

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  onRegister,
  onNavigateToLogin,
}) => {
<<<<<<< HEAD
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
=======
  const {theme} = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterForm> = {};

    if (!name.trim()) {
<<<<<<< HEAD
      newErrors.name = "Имя обязательно";
    } else if (name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }

    if (!email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Некорректный email";
    }

    if (!password) {
      newErrors.password = "Пароль обязателен";
    } else if (password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Подтверждение пароля обязательно";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
=======
      newErrors.name = 'Имя обязательно';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    if (!email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Некорректный email';
    }

    if (!password) {
      newErrors.password = 'Пароль обязателен';
    } else if (password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Подтверждение пароля обязательно';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Имитация задержки запроса
<<<<<<< HEAD
      await new Promise((resolve) => setTimeout(resolve, 1500));
=======
      await new Promise(resolve => setTimeout(resolve, 1500));
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
      onRegister({
        name: name.trim(),
        email: email.trim(),
        password,
        confirmPassword,
      });
    } catch (error) {
<<<<<<< HEAD
      console.error("Ошибка регистрации:", error);
=======
      console.error('Ошибка регистрации:', error);
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      backgroundColor={theme.colors.background}
<<<<<<< HEAD
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ContentContainer
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
=======
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ContentContainer
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
        <InnerContainer>
          <HeaderContainer>
            <TitleText color={theme.colors.primary}>Регистрация</TitleText>
            <SubtitleText color={theme.colors.text.secondary}>
              Создайте новый аккаунт в Volstora App
            </SubtitleText>
          </HeaderContainer>

          <FormContainer>
            <Input
              label="Имя"
              placeholder="Введите ваше имя"
              value={name}
              onChangeText={setName}
              error={errors.name}
            />

            <Input
              label="Email"
              placeholder="Введите ваш email"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />

            <Input
              label="Пароль"
              placeholder="Создайте пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
            />

            <Input
              label="Подтверждение пароля"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              error={errors.confirmPassword}
            />
          </FormContainer>

          <Button
            title="Зарегистрироваться"
            onPress={handleRegister}
            loading={loading}
            disabled={loading}
          />

          <LoginContainer>
            <LoginText color={theme.colors.text.secondary}>
              Уже есть аккаунт?
            </LoginText>
            <LoginLink onPress={onNavigateToLogin}>
<<<<<<< HEAD
              <LoginLinkText color={theme.colors.primary}>Войти</LoginLinkText>
=======
              <LoginLinkText color={theme.colors.primary}>
                Войти
              </LoginLinkText>
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
            </LoginLink>
          </LoginContainer>
        </InnerContainer>
      </ContentContainer>
    </Container>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
