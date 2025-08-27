import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './context/ThemeContext';
import {AppNavigator} from './navigation';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  width: 100%;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Container>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar translucent backgroundColor="transparent" />
          <AppNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </Container>
  );
};

export default App;