import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const StyledButton = styled(TouchableOpacity)<{
  backgroundColor: string;
  borderColor: string;
  height: number;
  opacity: number;
}>`
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
  border-width: 1px;
  height: ${props => props.height}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 16px;
  opacity: ${props => props.opacity};
`;

const ButtonText = styled(Text)<{
  color: string;
  fontSize: number;
  fontFamily: string;
}>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  font-family: ${props => props.fontFamily};
  font-weight: 600;
  margin-left: ${props => props.children ? '8px' : '0px'};
`;

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
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
    };

    const variants = {
      primary: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
        textColor: theme.name === 'defaultTheme' ? theme.colors.text.primary : '#FFFFFF',
      },
      secondary: {
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        textColor: theme.colors.text.primary,
      },
      outline: {
        backgroundColor: 'transparent',
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
      activeOpacity={0.7}>
      {loading && (
        <ActivityIndicator 
          size="small" 
          color={buttonStyle.textColor} 
        />
      )}
      <ButtonText
        color={buttonStyle.textColor}
        fontSize={buttonStyle.fontSize}
        fontFamily={theme.typography.fontFamily.bold}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};