<<<<<<< HEAD
import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";
=======
import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

interface ButtonProps {
  title: string;
  onPress: () => void;
<<<<<<< HEAD
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
=======
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  disabled?: boolean;
  loading?: boolean;
}

const StyledButton = styled(TouchableOpacity)<{
  backgroundColor: string;
  borderColor: string;
  height: number;
  opacity: number;
}>`
<<<<<<< HEAD
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  border-width: 1px;
  height: ${(props) => props.height}px;
=======
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
  border-width: 1px;
  height: ${props => props.height}px;
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 16px;
<<<<<<< HEAD
  opacity: ${(props) => props.opacity};
=======
  opacity: ${props => props.opacity};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
`;

const ButtonText = styled(Text)<{
  color: string;
  fontSize: number;
  fontFamily: string;
}>`
<<<<<<< HEAD
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-family: ${(props) => props.fontFamily};
  font-weight: 600;
  margin-left: ${(props) => (props.children ? "8px" : "0px")};
=======
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  font-family: ${props => props.fontFamily};
  font-weight: 600;
  margin-left: ${props => props.children ? '8px' : '0px'};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
`;

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
<<<<<<< HEAD
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
}) => {
  const { theme } = useTheme();

  const getButtonStyle = () => {
    const sizes = {
      sm: { height: 36, fontSize: theme.typography.fontSize.sm },
      md: { height: 44, fontSize: theme.typography.fontSize.md },
      lg: { height: 52, fontSize: theme.typography.fontSize.lg },
=======
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
}) => {
  const {theme} = useTheme();

  const getButtonStyle = () => {
    const sizes = {
      sm: {height: 36, fontSize: theme.typography.fontSize.sm},
      md: {height: 44, fontSize: theme.typography.fontSize.md},
      lg: {height: 52, fontSize: theme.typography.fontSize.lg},
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
    };

    const variants = {
      primary: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
<<<<<<< HEAD
        textColor:
          theme.name === "defaultTheme" ? theme.colors.text.primary : "#FFFFFF",
=======
        textColor: theme.name === 'defaultTheme' ? theme.colors.text.primary : '#FFFFFF',
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
      },
      secondary: {
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        textColor: theme.colors.text.primary,
      },
      outline: {
<<<<<<< HEAD
        backgroundColor: "transparent",
=======
        backgroundColor: 'transparent',
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
        borderColor: theme.colors.primary,
        textColor: theme.colors.primary,
      },
    };

    return {
      ...sizes[size],
      ...variants[variant],
    };
  };

  const buttonStyle = getButtonStyle();
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      backgroundColor={buttonStyle.backgroundColor}
      borderColor={buttonStyle.borderColor}
      height={buttonStyle.height}
      opacity={isDisabled ? 0.6 : 1}
      onPress={isDisabled ? () => {} : onPress}
<<<<<<< HEAD
      activeOpacity={0.7}
    >
      {loading && (
        <ActivityIndicator size="small" color={buttonStyle.textColor} />
=======
      activeOpacity={0.7}>
      {loading && (
        <ActivityIndicator 
          size="small" 
          color={buttonStyle.textColor} 
        />
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
      )}
      <ButtonText
        color={buttonStyle.textColor}
        fontSize={buttonStyle.fontSize}
<<<<<<< HEAD
        fontFamily={theme.typography.fontFamily.bold}
      >
=======
        fontFamily={theme.typography.fontFamily.bold}>
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
        {title}
      </ButtonText>
    </StyledButton>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
