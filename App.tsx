import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { HandlerNavigation } from './src/navigations'

export default function App () {
  return (
    <NavigationContainer>
      <HandlerNavigation />
    </NavigationContainer>
  )
}
