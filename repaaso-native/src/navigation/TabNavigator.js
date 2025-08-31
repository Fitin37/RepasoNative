import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from 'react-native';

import Home from '../screens/Home';
import ShowUser from '../screens/ShowUser';
import AddUser from '../screens/AddUser';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#AF8260',
        tabBarInactiveTintColor: '#B99873',
        tabBarStyle: { 
          backgroundColor: '#FFF', 
          height: Platform.OS === 'ios' ? 80 : 60,
          borderTopWidth: 0 
        },
        tabBarIcon: ({ focused, color, size }) => {
          let emoji;
          if (route.name === 'Home') {
            emoji = '🏠';
          } else if (route.name === 'ShowUser') {
            emoji = '👥';
          } else if (route.name === 'AddUser') {
            emoji = '➕';
          }
          return <Text style={{ fontSize: 20 }}>{emoji}</Text>;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen
        name="ShowUser"
        component={ShowUser}
        options={{ title: 'Usuarios' }}
      />
      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{ title: 'Agregar' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;