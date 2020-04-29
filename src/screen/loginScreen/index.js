import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CheckBox from 'react-native-check-box'

import InputBox from '../../component/inputBox'
import CustomButton from '../../component/customButton'

import bgImage from '../../assets/image/background-img.png'
import burgerImg from '../../assets/icon/burger-logo.png'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      data: {
        email: '',
        password: ''
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
        {this.renderFooter()}
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
          Login to continue Burger City
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
        {this.renderOption()}
        {this.renderLoginButton()}
        {this.renderSignUp()}
      </View>
    )
  }

  renderInputBox = () => {
    const { data } = this.state

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
            password={index === 1}
            value={data[item.name]}
            onHandleInput={this.onHandleInput}
            {...item}
          />
        )}
      />
    )
  }

  renderOption = () => {
    return (
      <View
        style={styles['onboarding__option']}
      >
        {this.renderOptRememberMe()}
        {this.renderOptForgotPassword()}
      </View>
    )
  }

  renderOptRememberMe = () => {
    const { isChecked } = this.state

    return (
      <CheckBox
        style={{ flex: 1 }}
        isChecked={isChecked}
        rightText='Remember Me'
        rightTextStyle={styles['onboarding__option__text']}
        checkBoxColor='#ffffff'
        unCheckedImage={
          <MaterialIcons
            name='radio-button-unchecked'
            color='#ffffff'
            size={20}
          />
        }
        checkedImage={
          <MaterialIcons
            name='check-circle'
            color='#ffffff'
            size={20}
          />
        }
        onClick={this.onRememberMe}
      />
    )
  }

  onRememberMe = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }))
  }

  renderOptForgotPassword = () => {
    return (
      <TouchableHighlight
        onPress={this.onForgotPassword}
      >
        <Text
          style={styles['onboarding__option__text']}
        >
          Forgot Password?
        </Text>
      </TouchableHighlight>
    )
  }

  onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordScreen')
  }

  renderLoginButton = () => {
    const { data } = this.state

    const disabled = !data.email || !data.password

    return (
      <CustomButton
        titleButton='Log In'
        disabled={disabled}
        buttonStyle={{ marginTop: 15 }}
        onPress={this.onLogin}
      />
    )
  }

  onLogin = () => {
    this.setState({
      data: {
        email: '',
        password: ''
      }
    })

    this.props.navigation.navigate('HomeScreen')
  }

  renderSignUp = () => {
    return (
      <TouchableOpacity
        style={styles['onboarding__sign-up']}
        onPress={this.onSignUp}
      >
        <Text
          style={styles['onboarding__sign-up__text']}
        >
          New User? Sign up
        </Text>
      </TouchableOpacity>
    )
  }

  onSignUp = () => {
    this.props.navigation.navigate('SignUpScreen')
  }

  renderFooter = () => {
    return (
      <View
        style={styles['onboarding__footer']}
      >
        <Text
          style={styles['onboarding__footer__text']}
        >
          By signing up you indicate that you have read and agreed to the Patch&nbsp;

          <Text
            style={styles['onboarding__footer__text--underline']}
          >
            Terms of Service
          </Text>
        </Text>
      </View>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object
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
  },
  onboarding__option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  onboarding__option__text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#ffffff',
    includeFontPadding: false,
    marginLeft: 5
  },
  'onboarding__sign-up': {
    alignItems: 'center',
    marginTop: 20
  },
  'onboarding__sign-up__text': {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 13,
    color: '#ff9f1c',
    includeFontPadding: false
  },
  onboarding__footer: {
    marginTop: 35,
    alignItems: 'center'
  },
  onboarding__footer__text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
    color: '#ffffff',
    width: 250,
    textAlign: 'center',
    includeFontPadding: false
  },
  'onboarding__footer__text--underline': {
    textDecorationLine: 'underline'
  }
})

export default LoginScreen
