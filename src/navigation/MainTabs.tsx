import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {HomePageScreen, TestSpaceScreen} from '@screens';
import {useTheme} from '@hooks/useTheme';
import {MainTabParamList} from '@types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs: React.FC = () => {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: theme.typography.fontFamily.medium,
        },
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="TestSpace"
        component={TestSpaceScreen}
        options={{
          tabBarLabel: 'Тесты',
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>🧪</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};