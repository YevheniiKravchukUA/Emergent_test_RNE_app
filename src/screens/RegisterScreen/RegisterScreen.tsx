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

interface RegisterScreenProps {
  onRegister: (userData: RegisterForm) => void;
  onNavigateToLogin: () => void;
}

const Container = styled(KeyboardAvoidingView)<{ backgroundColor: string }>`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
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

const LoginText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
`;

const LoginLink = styled(TouchableOpacity)`
  margin-left: 4px;
`;

const LoginLinkText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 600;
  font-family: ${(props) => props.theme.typography.fontFamily.bold};
`;

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  onRegister,
  onNavigateToLogin,
}) => {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterForm> = {};

    if (!name.trim()) {
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
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Имитация задержки запроса
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onRegister({
        name: name.trim(),
        email: email.trim(),
        password,
        confirmPassword,
      });
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      backgroundColor={theme.colors.background}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ContentContainer
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
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
              <LoginLinkText color={theme.colors.primary}>Войти</LoginLinkText>
            </LoginLink>
          </LoginContainer>
        </InnerContainer>
      </ContentContainer>
    </Container>
  );
};
