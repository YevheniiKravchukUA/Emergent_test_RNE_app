<<<<<<< HEAD
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen, RegisterScreen } from "@screens";
import { LoginForm, RegisterForm } from "@types/auth";
=======
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen, RegisterScreen} from '@screens';
import {LoginForm, RegisterForm} from '@types/auth';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

interface AuthStackProps {
  onLogin: (credentials: LoginForm) => void;
  onRegister: (userData: RegisterForm) => void;
}

const Stack = createStackNavigator();

<<<<<<< HEAD
export const AuthStack: React.FC<AuthStackProps> = ({
  onLogin,
  onRegister,
}) => {
=======
export const AuthStack: React.FC<AuthStackProps> = ({onLogin, onRegister}) => {
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
<<<<<<< HEAD
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="Auth">
        {(props) => (
          <AuthScreen
            {...props}
            onLogin={onLogin}
            onNavigateToRegister={() => props.navigation.navigate("Register")}
=======
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen name="Auth">
        {props => (
          <AuthScreen
            {...props}
            onLogin={onLogin}
            onNavigateToRegister={() => props.navigation.navigate('Register')}
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Register">
<<<<<<< HEAD
        {(props) => (
          <RegisterScreen
            {...props}
            onRegister={onRegister}
            onNavigateToLogin={() => props.navigation.navigate("Auth")}
=======
        {props => (
          <RegisterScreen
            {...props}
            onRegister={onRegister}
            onNavigateToLogin={() => props.navigation.navigate('Auth')}
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
