import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './context/ThemeContext';
import {AppNavigator} from './navigation';
import styled from 'styled-components/native';

// Условный импорт GestureHandlerRootView только для мобильных платформ
let GestureHandlerRootView: any = React.Fragment;
if (Platform.OS !== 'web') {
  try {
    const {GestureHandlerRootView: RNGHRootView} = require('react-native-gesture-handler');
    GestureHandlerRootView = RNGHRootView;
  } catch (e) {
    console.warn('GestureHandler not available:', e);
  }
}

const Container = styled(GestureHandlerRootView)`
  flex: 1;
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