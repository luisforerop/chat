import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {
  AuthStartScreen,
  LoginScreen,
  RegisterScreen
} from '../../screens/Auth'

const Stack = createNativeStackNavigator()

type ScreenData = {
  options?: NativeStackNavigationOptions
  name: string
  component: () => React.JSX.Element
}

const screens: ScreenData[] = [
  {
    name: 'AuthStartScreen',
    component: AuthStartScreen,
    options: { headerShown: false }
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: { title: 'Iniciar sesión' }
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
    options: { title: 'Registro' }
  }
]

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      {screens.map((screenProps, index) => (
        <Stack.Screen {...screenProps} key={`${index}-${screenProps.name}`} />
      ))}
    </Stack.Navigator>
  )
}
