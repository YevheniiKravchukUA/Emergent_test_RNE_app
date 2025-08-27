import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen, RegisterScreen} from '@screens';
import {LoginForm, RegisterForm} from '@types/auth';

interface AuthStackProps {
  onLogin: (credentials: LoginForm) => void;
  onRegister: (userData: RegisterForm) => void;
}

const Stack = createStackNavigator();

export const AuthStack: React.FC<AuthStackProps> = ({onLogin, onRegister}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen name="Auth">
        {props => (
          <AuthScreen
            {...props}
            onLogin={onLogin}
            onNavigateToRegister={() => props.navigation.navigate('Register')}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {props => (
          <RegisterScreen
            {...props}
            onRegister={onRegister}
            onNavigateToLogin={() => props.navigation.navigate('Auth')}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};