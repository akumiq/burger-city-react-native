import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const StandardButton = (props) => {
  const { titleButton, disabled, buttonStyle } = props
  const wrapperStyle = disabled
    ? [
      styles['button'],
      styles['button--inactive'],
      buttonStyle
    ]
    : [
      styles['button'],
      styles['button-active'],
      buttonStyle
    ]

  const textStyle = disabled
    ? [
      styles['text'],
      styles['text--inactive']
    ]
    : [
      styles['text'],
      styles['text-active']
    ]
  return (
    <TouchableOpacity
      underlayColor='#ED941A'
      style={wrapperStyle}
      {...props}
    >
      <Text style={textStyle}>
        {titleButton}
      </Text>
    </TouchableOpacity>
  )
}

StandardButton.propTypes = {
  disabled: PropTypes.bool,
  titleButton: PropTypes.string,
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

StandardButton.defaultProps = {
  disabled: false,
  titleButton: 'Standart Button',
  buttonStyle: {}
}

const styles = EStyleSheet.create({
  button: {
    borderRadius: '8rem',
    alignItems: 'center',
    backgroundColor: '#ff9f1c',
    paddingVertical: '12rem'
  },
  'button--active': {
    backgroundColor: '#ff9f1c'
  },
  'button--inactive': {
    borderWidth: 1,
    borderColor: '#ff9f1c',
    backgroundColor: 'transparent'
  },
  text: {
    fontFamily: 'Nunito-Black',
    fontSize: '13rem',
    color: '#ffffff',
    includeFontPadding: false
  },
  'text--active': {
    color: '#ffffff'
  },
  'text--inactive': {
    color: '#ff9f1c'
  }
})

export default StandardButton
