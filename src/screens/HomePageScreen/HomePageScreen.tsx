<<<<<<< HEAD
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";
import { Header, Footer, Main } from "@components";

interface HomePageScreenProps {}

const Container = styled(View)<{ backgroundColor: string }>`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
`;

export const HomePageScreen: React.FC<HomePageScreenProps> = () => {
  const { theme } = useTheme();

  return (
    <Container backgroundColor={theme.colors.background}>
      <Header title="Главная страница" rightComponent={null} />

      <Main title="Добро пожаловать в Volstora App" />

      <Footer />
    </Container>
  );
};
=======
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
import {Header, Footer, Main} from '@components';

interface HomePageScreenProps {}

const Container = styled(View)<{backgroundColor: string}>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

export const HomePageScreen: React.FC<HomePageScreenProps> = () => {
  const {theme} = useTheme();

  return (
    <Container backgroundColor={theme.colors.background}>
      <Header 
        title="Главная страница"
        rightComponent={null}
      />
      
      <Main 
        title="Добро пожаловать в Volstora App"
      />
      
      <Footer />
    </Container>
  );
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
