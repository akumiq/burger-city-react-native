import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import logo from '../../../assets/icons/logo.png'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <View style={styles['header']}>
      <LeftButton
        withBack={props.withBack}
        onPressLeftButton={props.onPressLeftButton}
      />

      <View style={styles['logo']}>
        <Image
          source={logo}
          resizeMode='contain'
        />
      </View>

      <RightButton
        onPressRightButton={props.onPressRightButton}
      />
    </View>
  )
}

const LeftButton = ({ withBack, onPressLeftButton }) => {
  let button = (
    <View style={styles['lang_btn']}>
      <Text style={styles['text']}>
                  EN
      </Text>
      <Feather
        name='chevron-down'
        color='#ff9f1c'
        size={20}
        style={{ marginLeft: 2 }}
      />
    </View>
  )

  if (withBack) {
    button = (
      <Feather
        name='chevron-left'
        color='#ff9f1c'
        size={28}
        style={{ marginLeft: -5, marginVertical: -10 }}
      />
    )
  }
  return (
    <TouchableOpacity
      onPress={(onPressLeftButton)}
      style={styles['btn']}
    >
      {button}
    </TouchableOpacity>
  )
}

const RightButton = ({ onPressRightButton }) => {
  return (
    <TouchableOpacity
      onPress={onPressRightButton}
      style={styles['btn']}
    >
      <FontAwesome
        name='shopping-cart'
        color='#ff9f1c'
        size={20}
      />
    </TouchableOpacity>
  )
}

Header.propTypes = {
  withBack: PropTypes.bool,
  onPressLeftButton: PropTypes.func,
  onPressRightButton: PropTypes.func
}

LeftButton.propTypes = {
  withBack: PropTypes.bool,
  onPressLeftButton: PropTypes.func
}

RightButton.propTypes = {
  onPressRightButton: PropTypes.func
}

export default Header

const styles = EStyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '16rem',
    backgroundColor: '#FFFFFF'
  },
  btn: {
    paddingVertical: '12rem',
    paddingHorizontal: '16rem'
  },
  lang_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
