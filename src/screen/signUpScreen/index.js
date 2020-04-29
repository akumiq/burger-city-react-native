import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  FlatList
} from 'react-native'

import EvilIcons from 'react-native-vector-icons/EvilIcons'

import InputBox from '../../component/inputBox'
import CustomButton from '../../component/customButton'

import bgImage from '../../assets/image/background-img.png'
import burgerImg from '../../assets/icon/burger-logo.png'

class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      data: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  onHandleInput = (key, value) => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [key]: value
      }
    }))
  }

  render () {
    return (
      <View>
        {this.renderStatusBar()}
        {this.renderBackground()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    )
  }

  renderBackground = () => {
    return (
      <ImageBackground
        source={bgImage}
        style={styles['onboarding__bg']}
      >
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderLead()}
        {this.renderForm()}
      </ImageBackground>
    )
  }

  renderOverlay = () => {
    return (
      <View
        style={styles['onboarding__overlay']}
      />
    )
  }

  renderLogo = () => {
    return (
      <View
        style={styles['onboarding__logo']}
      >
        <Image source={burgerImg} />
      </View>
    )
  }

  renderLead = () => {
    return (
      <View
        style={styles['onboarding__lead']}
      >
        <Text
          style={styles['onboarding__lead--h1']}
        >
          Welcome Back!
        </Text>

        <Text
          style={styles['onboarding__lead--p']}
        >
          Sign Up to continue Burger City
        </Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View
        style={styles['onboarding__form']}
      >
        {this.renderInputBox()}
        {this.renderSignUpButton()}
      </View>
    )
  }

  renderInputBox = () => {
    const inputBoxArr = [
      {
        name: 'email',
        icon: {
          type: EvilIcons,
          name: 'envelope',
          color: '#727c8e',
          size: 22,
          style: styles['onboarding__input__icon']
        },
        placeholder: 'Email Address',
        containerStyle: {}
      },
      {
        name: 'password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '#727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 18 }
          ]
        },
        placeholder: 'Password',
        containerStyle: { marginTop: 17 }
      },
      {
        name: 'confirmPassword',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '#727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 18 }
          ]
        },
        placeholder: 'Confirm Password',
        containerStyle: { marginTop: 17 }
      }
    ]

    return (
      <FlatList
        keyExtractor={
          (item, index) => item + index.toString()
        }
        data={inputBoxArr}
        renderItem={({ item, index }) => (
          <InputBox
            password={index > 0}
            onHandleInput={this.onHandleInput}
            {...item}
          />
        )}
      />
    )
  }

  renderSignUpButton = () => {
    const { data } = this.state

    const disabled = !data.email || !data.password || !data.confirmPassword

    return (
      <CustomButton
        titleButton='Sign Up'
        disabled={disabled}
        onPress={() => {}}
      />
    )
  }
}

const styles = StyleSheet.create({
  onboarding__bg: {
    height: '100%',
    width: '100%'
  },
  onboarding__overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  onboarding__logo: {
    alignItems: 'center',
    marginTop: 80
  },
  onboarding__lead: {
    alignItems: 'center',
    marginTop: 40
  },
  'onboarding__lead--h1': {
    fontFamily: 'Nunito-Bold',
    fontSize: 25,
    color: '#ffffff',
    includeFontPadding: false
  },
  'onboarding__lead--p': {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    color: '#ffffff',
    includeFontPadding: false,
    marginTop: 3
  },
  onboarding__form: {
    marginTop: 35,
    marginHorizontal: 30
  },
  onboarding__input__icon: {
    marginRight: 10,
    marginLeft: 20
  }
})

export default SignUpScreen
