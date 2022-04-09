import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js'
import ArticleScreen from '../screens/ArticleScreen.js';

const Stack = createNativeStackNavigator()

export default function AppNavigator()  {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Article"
            component={ArticleScreen}
            //options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }