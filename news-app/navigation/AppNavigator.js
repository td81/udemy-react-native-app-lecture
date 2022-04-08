import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js'

const Stack = createNativeStackNavigator()

export default function AppNavigator()  {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }