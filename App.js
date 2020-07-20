/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import PropTypes from 'prop-types'
import { YellowBox, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OnboardingScreen from './src/screen/onBoardingScreen'
import LoginScreen from './src/screen/loginScreen'
import ForgotPasswordScreen from './src/screen/forgotPasswordScreen'
import SignUpScreen from './src/screen/signUpScreen'
import TrolleyScreen from './src/screen/trolleyScreen'
import BestOfferFoodScreen from './src/screen/bestOfferFoodScreen'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './src/redux/reducer'

import HomeScreen from './src/screen/homeScreen'
import OurBurgerScreen from './src/screen/ourBurgerScreen'
import FavoriteScreen from './src/screen/favoriteScreen'
import TrackOrderScreen from './src/screen/trackOrderScreen'
import WalletScreen from './src/screen/walletScreen'

import HomeIconInactive from './src/assets/icons/home-icon.svg'
import HomeIconActive from './src/assets/icons/home-icon-active.svg'
import OurBurgersIconInactive from './src/assets/icons/our-burger-icon.svg'
import OurBurgersIconActive from './src/assets/icons/our-burger-icon-active.svg'
import FavoriteIconInactive from './src/assets/icons/star-icon.svg'
import FavoriteIconActive from './src/assets/icons/star-icon-active.svg'
import TrackOrdersIconInactive from './src/assets/icons/track-icon.svg'
import TrackOrdersIconActive from './src/assets/icons/track-icon-active.svg'
import WalletIconInactive from './src/assets/icons/wallet-icon.svg'
import WalletIconActive from './src/assets/icons/wallet-icon-active.svg'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const store = createStore(reducers)

const App = () => {
  YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  const { width } = Dimensions.get('window')
  EStyleSheet.build({
    $rem: width / 320
  })

  return (
    <Provider store={store}>
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

          <Stack.Screen
            name='FavoriteScreen'
            component={FavoriteScreen}
          />

          <Stack.Screen
            name='TrolleyScreen'
            component={TrolleyScreen}
          />

          <Stack.Screen
            name='BestOfferFoodScreen'
            component={BestOfferFoodScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ Provider>
  )
}

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF9F1C',
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
            tabBarIcon: ({ focused }) => {
              const Icon = focused ? item.icon.active : item.icon.inactive
              const Size = index === 3 ? 28 : 22
              return (
                <Icon
                  width={Size}
                  height={Size}
                />
              )
            }
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

HomeTab.propTypes = {
  focused: PropTypes.object
}

const allTab = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    label: 'Home',
    icon: {
      active: HomeIconActive,
      inactive: HomeIconInactive
    }
  },
  {
    name: 'OurBurgerScreen',
    component: OurBurgerScreen,
    label: 'Our Burgers',
    icon: {
      active: OurBurgersIconActive,
      inactive: OurBurgersIconInactive
    }
  },
  {
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    label: 'Favorite',
    icon: {
      active: FavoriteIconActive,
      inactive: FavoriteIconInactive
    }
  },
  {
    name: 'TrackOrderScreen',
    component: TrackOrderScreen,
    label: 'Track Orders',
    icon: {
      active: TrackOrdersIconActive,
      inactive: TrackOrdersIconInactive
    }
  },
  {
    name: 'WalletScreen',
    component: WalletScreen,
    label: 'Wallet',
    icon: {
      active: WalletIconActive,
      inactive: WalletIconInactive
    }
  }
]

export default App
