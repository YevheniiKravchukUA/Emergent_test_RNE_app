<<<<<<< HEAD
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";
=======
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

interface FooterProps {
  showThemeToggle?: boolean;
}

<<<<<<< HEAD
const FooterContainer = styled(View)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
=======
const FooterContainer = styled(View)<{backgroundColor: string}>`
  background-color: ${props => props.backgroundColor};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  border-top-width: 1px;
<<<<<<< HEAD
  border-top-color: ${(props) => props.theme.colors.border};
`;

const FooterText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 12px;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
=======
  border-top-color: ${props => props.theme.colors.border};
`;

const FooterText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 12px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  text-align: center;
  flex: 1;
`;

<<<<<<< HEAD
const ThemeToggleButton = styled(TouchableOpacity)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.primary};
`;

const ThemeToggleText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 12px;
  font-family: ${(props) => props.theme.typography.fontFamily.medium};
`;

export const Footer: React.FC<FooterProps> = ({ showThemeToggle = true }) => {
  const { theme, themeType, toggleTheme } = useTheme();
=======
const ThemeToggleButton = styled(TouchableOpacity)<{backgroundColor: string}>`
  background-color: ${props => props.backgroundColor};
  padding: 8px 16px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.primary};
`;

const ThemeToggleText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 12px;
  font-family: ${props => props.theme.typography.fontFamily.medium};
`;

export const Footer: React.FC<FooterProps> = ({
  showThemeToggle = true,
}) => {
  const {theme, themeType, toggleTheme} = useTheme();
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

  return (
    <FooterContainer backgroundColor={theme.colors.surface}>
      <FooterText color={theme.colors.text.secondary}>
        © 2025 Volstora Base App. Все права защищены.
      </FooterText>
<<<<<<< HEAD

      {showThemeToggle && (
        <ThemeToggleButton
          backgroundColor={theme.colors.background}
          onPress={toggleTheme}
        >
          <ThemeToggleText color={theme.colors.primary}>
            {themeType === "defaultTheme" ? "☀️ Светлая" : "🌙 Темная"}
=======
      
      {showThemeToggle && (
        <ThemeToggleButton
          backgroundColor={theme.colors.background}
          onPress={toggleTheme}>
          <ThemeToggleText color={theme.colors.primary}>
            {themeType === 'defaultTheme' ? '☀️ Светлая' : '🌙 Темная'}
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
          </ThemeToggleText>
        </ThemeToggleButton>
      )}
    </FooterContainer>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
