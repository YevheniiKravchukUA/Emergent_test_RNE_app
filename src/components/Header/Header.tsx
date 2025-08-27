import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

const HeaderContainer = styled(View)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.border};
`;

const HeaderTitle = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily.bold};
`;

const BackButton = styled(TouchableOpacity)`
  padding: 8px;
`;

const BackButtonText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: ${(props) => props.theme.typography.fontFamily.medium};
`;

const RightContainer = styled(View)`
  min-width: 40px;
  align-items: flex-end;
`;

const LeftContainer = styled(View)`
  min-width: 40px;
  align-items: flex-start;
`;

const TitleContainer = styled(View)`
  flex: 1;
  align-items: center;
`;

export const Header: React.FC<HeaderProps> = ({
  title = "Volstora App",
  showBackButton = false,
  onBackPress,
  rightComponent,
}) => {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.surface}
        barStyle={
          theme.name === "defaultTheme" ? "light-content" : "dark-content"
        }
      />
      <HeaderContainer backgroundColor={theme.colors.surface}>
        <LeftContainer>
          {showBackButton && (
            <BackButton onPress={onBackPress}>
              <BackButtonText color={theme.colors.text.primary}>
                ← Назад
              </BackButtonText>
            </BackButton>
          )}
        </LeftContainer>

        <TitleContainer>
          <HeaderTitle color={theme.colors.text.primary}>{title}</HeaderTitle>
        </TitleContainer>

        <RightContainer>{rightComponent}</RightContainer>
      </HeaderContainer>
    </>
  );
};
