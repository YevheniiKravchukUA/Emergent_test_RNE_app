import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}

const Container = styled(View)`
  margin-bottom: 16px;
`;

const Label = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-family: ${(props) => props.theme.typography.fontFamily.medium};
  margin-bottom: 8px;
`;

const InputContainer = styled(View)<{
  borderColor: string;
  backgroundColor: string;
}>`
  border-width: 1px;
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const StyledTextInput = styled(TextInput)<{
  color: string;
  height: number;
}>`
  flex: 1;
  padding: 12px 16px;
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
  min-height: ${(props) => props.height}px;
`;

const EyeButton = styled(TouchableOpacity)`
  padding: 12px 16px;
`;

const EyeButtonText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 14px;
`;

const ErrorText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 12px;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
  margin-top: 4px;
`;

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  disabled = false,
  multiline = false,
  numberOfLines = 1,
}) => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  const getBorderColor = () => {
    if (error) return theme.colors.error;
    return theme.colors.border;
  };

  const getInputHeight = () => {
    if (multiline) return Math.max(44, numberOfLines * 20 + 24);
    return 44;
  };

  return (
    <Container>
      {label && <Label color={theme.colors.text.primary}>{label}</Label>}

      <InputContainer
        borderColor={getBorderColor()}
        backgroundColor={theme.colors.surface}
      >
        <StyledTextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.secondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          editable={!disabled}
          multiline={multiline}
          numberOfLines={numberOfLines}
          color={theme.colors.text.primary}
          height={getInputHeight()}
        />

        {secureTextEntry && (
          <EyeButton onPress={() => setShowPassword(!showPassword)}>
            <EyeButtonText color={theme.colors.text.secondary}>
              {showPassword ? "🙈" : "👁️"}
            </EyeButtonText>
          </EyeButton>
        )}
      </InputContainer>

      {error && <ErrorText color={theme.colors.error}>{error}</ErrorText>}
    </Container>
  );
};
