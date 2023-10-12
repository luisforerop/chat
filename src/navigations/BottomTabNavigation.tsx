import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChatsNavigation } from './stacks/ChatsNavigation'

const Tab = createBottomTabNavigator()

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false
      })}
    >
      <Tab.Screen
        name='Chat'
        component={ChatsNavigation}
        options={{ title: 'Chats' }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#171717',
    borderTopWidth: 0
  }
})
