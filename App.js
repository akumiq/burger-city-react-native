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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { YellowBox } from 'react-native'
import OnboardingScreen from './src/screen/onBoardingScreen'
import LoginScreen from './src/screen/loginScreen'
import ForgotPasswordScreen from './src/screen/forgotPasswordScreen'
import SignUpScreen from './src/screen/signUpScreen'
import HomeScreen from './src/screen/homeScreen'
import OurBurgerScreen from './src/screen/ourBurgerScreen'
import FavoriteScreen from './src/screen/favoriteScreen'
import TrackOrderScreen from './src/screen/trackOrderScreen'
import WalletScreen from './src/screen/walletScreen'

import HomeIcon from './src/assets/icon/home-icon.svg'
import OurBurgerIcon from './src/assets/icon/our-burger-icon.svg'
import FavoriteIcon from './src/assets/icon/star-icon.svg'
import TrackOrderIcon from './src/assets/icon/track-icon.svg'
import WalletIcon from './src/assets/icon/wallet-icon.svg'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTab'
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
          name='HomeTab'
          component={HomeTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff9f1c',
        style: {
          height: 70
        },
        labelStyle: {
          fontFamily: 'Nunito-SemiBold',
          fontSize: 12,
          marginBottom: 10
        },
        tabStyle: {
          marginTop: 10
        },
        keyboardHidesTabBar: true
      }}
    >
      {allTab.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: () => (
              <item.icon
                width={index === 3 ? 30 : 25}
                height={index === 3 ? 30 : 25}
                fill={'#ff9f1c'}
              />
            )
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

const allTab = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    label: 'Home',
    icon: HomeIcon
  },
  {
    name: 'OurBurgerScreen',
    component: OurBurgerScreen,
    label: 'Our Burgers',
    icon: OurBurgerIcon
  },
  {
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    label: 'Favorites',
    icon: FavoriteIcon
  },
  {
    name: 'TrackOrderScreen',
    component: TrackOrderScreen,
    label: 'Track Orders',
    icon: TrackOrderIcon
  },
  {
    name: 'WalletScreen',
    component: WalletScreen,
    label: 'Wallet',
    icon: WalletIcon
  }
]

export default App
