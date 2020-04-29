/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { YellowBox } from 'react-native'

import OnboardingScreen from './src/screen/onBoardingScreen'
import LoginScreen from './src/screen/loginScreen'
import ForgotPasswordScreen from './src/screen/forgotPasswordScreen'
import SignUpScreen from './src/screen/signUpScreen'
import HomeScreen from './src/screen/homeScreen'

const Stack = createStackNavigator()

const App = () => {
  YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen
          name='OnboardingScreen'
          component={OnboardingScreen}
        />

        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
        />

        <Stack.Screen
          name='ForgotPasswordScreen'
          component={ForgotPasswordScreen}
        />

        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
        />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
