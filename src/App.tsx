<<<<<<< HEAD
import React from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./context/ThemeContext";
import { AppNavigator } from "./navigation";
import styled from "styled-components/native";
=======
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './context/ThemeContext';
import {AppNavigator} from './navigation';
import styled from 'styled-components/native';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

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

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
