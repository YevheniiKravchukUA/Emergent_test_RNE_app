import React, {useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
import {Button, Input} from '@components';
import {LoginForm} from '@types/auth';

interface AuthScreenProps {
  onLogin: (credentials: LoginForm) => void;
  onNavigateToRegister: () => void;
}

const Container = styled(KeyboardAvoidingView)<{backgroundColor: string}>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

const ContentContainer = styled(ScrollView)`
  flex: 1;
`;

const InnerContainer = styled(View)`
  flex: 1;
  justify-content: center;
  padding: 24px;
  min-height: 600px;
`;

const LogoContainer = styled(View)`
  align-items: center;
  margin-bottom: 48px;
`;

const LogoText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 32px;
  font-weight: bold;
  font-family: ${props => props.theme.typography.fontFamily.bold};
`;

const SubtitleText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 16px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
  text-align: center;
  margin-top: 8px;
`;

const FormContainer = styled(View)`
  margin-bottom: 32px;
`;

const ForgotPasswordContainer = styled(View)`
  align-items: center;
  margin-top: 16px;
`;

const ForgotPasswordText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 14px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
`;

const RegisterContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const RegisterText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 14px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
`;

const RegisterLink = styled(TouchableOpacity)`
  margin-left: 4px;
`;

const RegisterLinkText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 600;
  font-family: ${props => props.theme.typography.fontFamily.bold};
`;

export const AuthScreen: React.FC<AuthScreenProps> = ({
  onLogin,
  onNavigateToRegister,
}) => {
  const {theme} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Имитация задержки запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      onLogin({email: email.trim(), password});
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      backgroundColor={theme.colors.background}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ContentContainer
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <InnerContainer>
          <LogoContainer>
            <LogoText color={theme.colors.primary}>Volstora</LogoText>
            <SubtitleText color={theme.colors.text.secondary}>
              Добро пожаловать в базовое приложение
            </SubtitleText>
          </LogoContainer>

          <FormContainer>
            <Input
              label="Email"
              placeholder="Введите ваш email"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />

            <Input
              label="Пароль"
              placeholder="Введите ваш пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
            />

            <ForgotPasswordContainer>
              <TouchableOpacity>
                <ForgotPasswordText color={theme.colors.primary}>
                  Забыли пароль?
                </ForgotPasswordText>
              </TouchableOpacity>
            </ForgotPasswordContainer>
          </FormContainer>

          <Button
            title="Войти"
            onPress={handleLogin}
            loading={loading}
            disabled={loading}
          />

          <RegisterContainer>
            <RegisterText color={theme.colors.text.secondary}>
              Нет аккаунта?
            </RegisterText>
            <RegisterLink onPress={onNavigateToRegister}>
              <RegisterLinkText color={theme.colors.primary}>
                Зарегистрироваться
              </RegisterLinkText>
            </RegisterLink>
          </RegisterContainer>
        </InnerContainer>
      </ContentContainer>
    </Container>
  );
};