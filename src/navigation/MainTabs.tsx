<<<<<<< HEAD
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { HomePageScreen, TestSpaceScreen } from "@screens";
import { useTheme } from "@hooks/useTheme";
import { MainTabParamList } from "@types/navigation";
=======
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {HomePageScreen, TestSpaceScreen} from '@screens';
import {useTheme} from '@hooks/useTheme';
import {MainTabParamList} from '@types/navigation';
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs: React.FC = () => {
<<<<<<< HEAD
  const { theme } = useTheme();
=======
  const {theme} = useTheme();
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3

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
<<<<<<< HEAD
      }}
    >
=======
      }}>
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
      <Tab.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{
<<<<<<< HEAD
          tabBarLabel: "Главная",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🏠</Text>
=======
          tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>🏠</Text>
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
          ),
        }}
      />
      <Tab.Screen
        name="TestSpace"
        component={TestSpaceScreen}
        options={{
<<<<<<< HEAD
          tabBarLabel: "Тесты",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🧪</Text>
=======
          tabBarLabel: 'Тесты',
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>🧪</Text>
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
          ),
        }}
      />
    </Tab.Navigator>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
