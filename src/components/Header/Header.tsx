<<<<<<< HEAD
import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@hooks/useTheme";
=======
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

<<<<<<< HEAD
const HeaderContainer = styled(View)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
=======
const HeaderContainer = styled(View)<{backgroundColor: string}>`
  background-color: ${props => props.backgroundColor};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  border-bottom-width: 1px;
<<<<<<< HEAD
  border-bottom-color: ${(props) => props.theme.colors.border};
`;

const HeaderTitle = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily.bold};
=======
  border-bottom-color: ${props => props.theme.colors.border};
`;

const HeaderTitle = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: bold;
  font-family: ${props => props.theme.typography.fontFamily.bold};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
`;

const BackButton = styled(TouchableOpacity)`
  padding: 8px;
`;

<<<<<<< HEAD
const BackButtonText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: ${(props) => props.theme.typography.fontFamily.medium};
=======
const BackButtonText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 16px;
  font-family: ${props => props.theme.typography.fontFamily.medium};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
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
<<<<<<< HEAD
  title = "Volstora App",
=======
  title = 'Volstora App',
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  showBackButton = false,
  onBackPress,
  rightComponent,
}) => {
<<<<<<< HEAD
  const { theme } = useTheme();
=======
  const {theme} = useTheme();
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.surface}
<<<<<<< HEAD
        barStyle={
          theme.name === "defaultTheme" ? "light-content" : "dark-content"
        }
=======
        barStyle={theme.name === 'defaultTheme' ? 'light-content' : 'dark-content'}
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
      />
      <HeaderContainer backgroundColor={theme.colors.surface}>
        <LeftContainer>
          {showBackButton && (
            <BackButton onPress={onBackPress}>
<<<<<<< HEAD
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
=======
              <BackButtonText color={theme.colors.text.primary}>← Назад</BackButtonText>
            </BackButton>
          )}
        </LeftContainer>
        
        <TitleContainer>
          <HeaderTitle color={theme.colors.text.primary}>{title}</HeaderTitle>
        </TitleContainer>
        
        <RightContainer>
          {rightComponent}
        </RightContainer>
      </HeaderContainer>
    </>
  );
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
