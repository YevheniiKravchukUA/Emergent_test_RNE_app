import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@hooks/useTheme';

interface MainProps {
  title?: string;
  children?: React.ReactNode;
  scrollable?: boolean;
}

const MainContainer = styled(View)<{backgroundColor: string}>`
  background-color: ${props => props.backgroundColor};
  flex: 1;
  padding: 16px;
`;

const ScrollableContainer = styled(ScrollView)<{backgroundColor: string}>`
  background-color: ${props => props.backgroundColor};
  flex: 1;
`;

const ContentContainer = styled(View)`
  padding: 16px;
`;

const MainTitle = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 24px;
  font-weight: bold;
  font-family: ${props => props.theme.typography.fontFamily.bold};
  margin-bottom: 16px;
  text-align: center;
`;

const LoremText = styled(Text)<{color: string}>`
  color: ${props => props.color};
  font-size: 16px;
  font-family: ${props => props.theme.typography.fontFamily.regular};
  line-height: 22px;
  text-align: justify;
`;

export const Main: React.FC<MainProps> = ({
  title = 'Главная страница',
  children,
  scrollable = true,
}) => {
  const {theme} = useTheme();

  const defaultContent = (
    <>
      <MainTitle color={theme.colors.text.primary}>{title}</MainTitle>
      <LoremText color={theme.colors.text.secondary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </LoremText>
      <LoremText color={theme.colors.text.secondary} style={{marginTop: 16}}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </LoremText>
    </>
  );

  if (scrollable) {
    return (
      <ScrollableContainer backgroundColor={theme.colors.background}>
        <ContentContainer>
          {children || defaultContent}
        </ContentContainer>
      </ScrollableContainer>
    );
  }

  return (
    <MainContainer backgroundColor={theme.colors.background}>
      {children || defaultContent}
    </MainContainer>
  );
};