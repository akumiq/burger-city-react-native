import React, { Component } from 'react'
import bgImage from '../../assets/image/background-img.png'
import burgerImg from '../../assets/icon/burger-logo.png'
import InputBox from '../inputBox'
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  TouchableHighlight
} from 'react-native'

class LoginScreen extends Component {
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
      <ImageBackground source={bgImage} style={styles['onboarding__bg']}>
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderLead()}
        {this.renderForm()}
        {this.renderButton()}
      </ImageBackground>
    )
  }

  renderOverlay = () => {
    return <View style={styles['onboarding__overlay']} />
  }

  renderLogo = () => {
    return (
      <View style={styles['onboarding__logo']}>
        <Image source={burgerImg} />
      </View>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
          Welcome Back!
        </Text>

        <Text style={styles['onboarding__lead--p']}>
          Login to continue Burger City
        </Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['onboarding__form']}>
        {this.renderInputBox()}
      </View>
    )
  }

  renderInputBox = () => {
    return (
      <InputBox />
    )
  }

  renderButton = () => {
    return (
      <TouchableHighlight
        onPress={() => {}}
        underlayColor="#ED941A"
        style={styles['onboarding__button']}>
        <Text style={styles['onboarding__button__text']}>Log In</Text>
      </TouchableHighlight>
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
    marginTop: 50,
    marginHorizontal: 30
  },
  onboarding__button: {
    borderRadius: 8,
    backgroundColor: '#FF9F1C',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 50,
    marginHorizontal: 30,
    paddingVertical: 15
  },
  onboarding__button__text: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16
  }
})

export default LoginScreen
