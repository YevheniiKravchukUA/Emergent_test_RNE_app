<<<<<<< HEAD
import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";
import { Header, Footer, Main, Button } from "@components";

interface TestSpaceScreenProps {}

const Container = styled(View)<{ backgroundColor: string }>`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
=======
import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
import {Header, Footer, Main, Button} from '@components';

interface TestSpaceScreenProps {}

const Container = styled(View)<{backgroundColor: string}>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
`;

const TestContent = styled(View)`
  padding: 16px;
`;

<<<<<<< HEAD
const TestTitle = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily.bold};
=======
const TestTitle = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.typography.fontFamily.bold};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  margin-bottom: 16px;
  text-align: center;
`;

<<<<<<< HEAD
const TestDescription = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
=======
const TestDescription = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 16px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  line-height: 22px;
  text-align: center;
  margin-bottom: 24px;
`;

const ButtonContainer = styled(View)`
  gap: 12px;
`;

export const TestSpaceScreen: React.FC<TestSpaceScreenProps> = () => {
<<<<<<< HEAD
  const { theme, toggleTheme, themeType } = useTheme();
=======
  const {theme, toggleTheme, themeType} = useTheme();
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleTestAction = () => {
<<<<<<< HEAD
    console.log("Test action executed!");
=======
    console.log('Test action executed!');
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  };

  return (
    <Container backgroundColor={theme.colors.background}>
<<<<<<< HEAD
      <Header title="Тестовое пространство" rightComponent={null} />

      <Main title="TestSpace - Область для экспериментов" scrollable={false}>
=======
      <Header 
        title="Тестовое пространство"
        rightComponent={null}
      />
      
      <Main 
        title="TestSpace - Область для экспериментов"
        scrollable={false}>
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
        <TestContent>
          <TestTitle color={theme.colors.text.primary}>
            Пример тестовой страницы
          </TestTitle>
<<<<<<< HEAD

          <TestDescription color={theme.colors.text.secondary}>
            Эта страница создана как пример для построения базовой маршрутизации
            в приложении. Здесь вы можете тестировать новые компоненты и
            функции.
          </TestDescription>

          <ButtonContainer>
            <Button
              title={`Переключить тему (${
                themeType === "defaultTheme" ? "Темная" : "Светлая"
              })`}
              onPress={handleThemeToggle}
              variant="primary"
            />

=======
          
          <TestDescription color={theme.colors.text.secondary}>
            Эта страница создана как пример для построения базовой маршрутизации в приложении. 
            Здесь вы можете тестировать новые компоненты и функции.
          </TestDescription>
          
          <ButtonContainer>
            <Button
              title={`Переключить тему (${themeType === 'defaultTheme' ? 'Темная' : 'Светлая'})`}
              onPress={handleThemeToggle}
              variant="primary"
            />
            
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
            <Button
              title="Тестовое действие"
              onPress={handleTestAction}
              variant="secondary"
            />
<<<<<<< HEAD

=======
            
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
            <Button
              title="Outlined кнопка"
              onPress={handleTestAction}
              variant="outline"
            />
          </ButtonContainer>
        </TestContent>
      </Main>
<<<<<<< HEAD

      <Footer />
    </Container>
  );
};
=======
      
      <Footer />
    </Container>
  );
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
