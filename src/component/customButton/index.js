import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class CustomButton extends Component {
  render () {
    const { titleButton } = this.props

    return (
      <TouchableHighlight
        underlayColor='#ED941A'
        style={this.buidButtonStyle()}
        {...this.props}
      >
        <Text style={this.buidTitleStyle()}>
          {titleButton}
        </Text>
      </TouchableHighlight>
    )
  }

  buidButtonStyle = () => {
    const { disabled, buttonStyle } = this.props

    return disabled
      ? [
        styles['button'],
        styles['button--inactive'],
        buttonStyle
      ]
      : [
        styles['button'],
        styles['button--active'],
        buttonStyle
      ]
  }

  buidTitleStyle = () => {
    const { disabled } = this.props

    return disabled
      ? [
        styles['text'],
        styles['text--inactive']
      ]
      : [
        styles['text'],
        styles['text--active']
      ]
  }
}

CustomButton.propTypes = {
  titleButton: PropTypes.string,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.object
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 50
  },
  'button--active': {
    backgroundColor: '#FF9F1C'
  },
  'button--inactive': {
    borderWidth: 1,
    borderColor: '#FF9F1C',
    backgroundColor: 'transparent'
  },
  text: {
    fontFamily: 'Nunito-Black',
    fontSize: 16,
    includeFontPadding: false
  },
  'text--active': {
    color: '#ffffff'
  },
  'text--inactive': {
    color: '#FF9F1C'
  }
})
