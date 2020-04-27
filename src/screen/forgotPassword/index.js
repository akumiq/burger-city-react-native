import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import InputBox from '../inputBox'

import bgImage from '../../assets/image/background-img.png'
import burgerImg from '../../assets/icon/burger-logo.png'

class ForgotPasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputBoxArr: [
        {
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
      ],
      isChecked: false
    }
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
          Forget Password
        </Text>

        <Text
          style={styles['onboarding__lead--p']}
        >
          Please enter a new password and confirm the password
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
    return (
      <FlatList
        keyExtractor={
          (item, index) => item + index.toString()
        }
        data={this.state.inputBoxArr}
        renderItem={({ item, index }) => (
          <InputBox password={index === 1} {...item}/>
        )}
      />
    )
  }

  renderSubmitButton = () => {
    return (
      <TouchableHighlight
        onPress={() => {}}
        underlayColor="#ED941A"
        style={styles['onboarding__button']}
      >
        <Text
          style={styles['onboarding__button__text']}
        >
          Submit
        </Text>
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
    textAlign: 'center',
    width: 250,
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
  onboarding__button: {
    borderRadius: 8,
    backgroundColor: '#FF9F1C',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 50
  },
  onboarding__button__text: {
    color: '#ffffff',
    fontFamily: 'Nunito-Black',
    fontSize: 16,
    includeFontPadding: false
  }
})

export default ForgotPasswordScreen
