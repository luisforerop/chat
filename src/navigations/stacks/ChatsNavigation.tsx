import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ChatScreen, CreateChatScreen } from '../../screens/ChatsNavegation'

const Stack = createNativeStackNavigator()

type ScreenData = {
  options?: NativeStackNavigationOptions
  name: string
  component: () => React.JSX.Element
}

const screens: ScreenData[] = [
  {
    name: 'ChatScreen',
    component: ChatScreen,
    options: { title: 'Chats' }
  },
  {
    name: 'CreateChatScreen',
    component: CreateChatScreen,
    options: { title: 'Nuevo chat' }
  }
]

export const ChatsNavigation = () => {
  return (
    <Stack.Navigator>
      {screens.map((screenProps, index) => (
        <Stack.Screen {...screenProps} key={`${index}-${screenProps.name}`} />
      ))}
    </Stack.Navigator>
  )
}
