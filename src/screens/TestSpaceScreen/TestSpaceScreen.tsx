import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
import {Header, Footer, Main, Button} from '@components';

interface TestSpaceScreenProps {}

const Container = styled(View)<{backgroundColor: string}>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

const TestContent = styled(View)`
  padding: 16px;
`;

const TestTitle = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.typography.fontFamily.bold};
  margin-bottom: 16px;
  text-align: center;
`;

const TestDescription = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 16px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
  line-height: 22px;
  text-align: center;
  margin-bottom: 24px;
`;

const ButtonContainer = styled(View)`
  gap: 12px;
`;

export const TestSpaceScreen: React.FC<TestSpaceScreenProps> = () => {
  const {theme, toggleTheme, themeType} = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleTestAction = () => {
    console.log('Test action executed!');
  };

  return (
    <Container backgroundColor={theme.colors.background}>
      <Header 
        title="Тестовое пространство"
        rightComponent={null}
      />
      
      <Main 
        title="TestSpace - Область для экспериментов"
        scrollable={false}>
        <TestContent>
          <TestTitle color={theme.colors.text.primary}>
            Пример тестовой страницы
          </TestTitle>
          
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
            
            <Button
              title="Тестовое действие"
              onPress={handleTestAction}
              variant="secondary"
            />
            
            <Button
              title="Outlined кнопка"
              onPress={handleTestAction}
              variant="outline"
            />
          </ButtonContainer>
        </TestContent>
      </Main>
      
      <Footer />
    </Container>
  );
};