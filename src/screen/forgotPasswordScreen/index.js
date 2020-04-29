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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import InputBox from '../../component/inputBox'
import CustomButton from '../../component/customButton'

import bgImage from '../../assets/image/background-img.png'
import burgerImg from '../../assets/icon/burger-logo.png'

class ForgotPasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      data: {
        email: '',
        newPassword: '',
        confirmPassword: '',
        otp: ''
      },
      indentifier: 'create-new-password'
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
    const { indentifier } = this.state

    const subLead = indentifier === 'create-new-password'
      ? 'Please enter a new password and confirm the password'
      : indentifier === 'insert-otp'
        ? 'For your security, a one time password has been sent to your email address. Please enter it below to continue'
        : 'Custom subLead'

    return (
      <View
        style={styles['onboarding__lead']}
      >
        <Text
          style={styles['onboarding__lead--h1']}
        >
          Forget Password
        </Text>

        <Text
          style={styles['onboarding__lead--p']}
        >
          {subLead}
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
        {this.renderSubmitButton()}
      </View>
    )
  }

  renderInputBox = () => {
    const { indentifier } = this.state

    const formInputNewPassword = [
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
        name: 'newPassword',
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
        placeholder: 'New Password',
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

    const formInputOTP = [
      {
        name: 'otp',
        icon: {
          type: FontAwesome5,
          name: 'clipboard-check',
          color: '#727c8e',
          size: 18,
          style: [
            styles['onboarding__input__icon'],
            { marginTop: -2 }
          ]
        },
        placeholder: 'OTP',
        containerStyle: {}
      }
    ]

    const inputBox = indentifier === 'create-new-password'
      ? formInputNewPassword
      : indentifier === 'insert-otp'
        ? formInputOTP
        : []

    return (
      <FlatList
        keyExtractor={
          (item, index) => item + index.toString()
        }
        data={inputBox}
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

  renderSubmitButton = () => {
    const { data, indentifier } = this.state

    const disabled = !data.email || !data.newPassword || !data.confirmPassword

    const titleBtn = indentifier === 'create-new-password'
      ? 'Submit'
      : indentifier === 'insert-otp'
        ? 'Proceed'
        : 'Custom Text'

    return (
      <CustomButton
        titleButton={titleBtn}
        disabled={disabled}
        onPress={this.onSubmit}
      />
    )
  }

  onSubmit = () => {
    const { indentifier } = this.state

    if (indentifier === 'create-new-password') {
      this.setState({ indentifier: 'insert-otp' })
    }
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
    fontSize: 15,
    color: '#ffffff',
    includeFontPadding: false,
    textAlign: 'center',
    width: 300,
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

export default ForgotPasswordScreen
