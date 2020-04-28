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

import OnboardingScreen from './src/screen/onBoardingScreen'
import LoginScreen from './src/screen/loginScreen'
import ForgotPasswordScreen from './src/screen/forgotPasswordScreen'
import SignUpScreen from './src/screen/signUpScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='OnboardingScreen'
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
