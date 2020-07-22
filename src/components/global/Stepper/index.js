import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Entypo from 'react-native-vector-icons/Entypo'

import { BaseStyle } from '../../../constant'

const Stepper = (props) => {
  const [countNumber, setCountNumber] = useState(1)

  const countUp = () => {
    setCountNumber(prevCountNumber => prevCountNumber + 1)
  }

  const countDown = () => {
    if (countNumber > 1) {
      setCountNumber(prevCountNumber => prevCountNumber - 1)
    }
  }

  useEffect(() => {
    const { count } = props
    if (count) {
      setCountNumber(count)
    }
  }, [])

  useEffect(() => {
    const { onCount } = props
    if (onCount) {
      onCount(countNumber)
    }
  }, [countNumber])

  const { containerStyle, buttonStyle } = props
  const wrapperStyle = [
    styles['container'],
    containerStyle
  ]

  return (
    <View style={wrapperStyle}>
      <TouchableOpacity
        onPress={countDown}
        style={{ padding: 10 }}
      >
        <View
          style={[
            styles['button'],
            buttonStyle
          ]}
        >
          <Entypo
            name='minus'
            size={16}
            color={buttonStyle && buttonStyle.color
              ? buttonStyle.color
              : '#727C8E'
            }
          />
        </View>
      </TouchableOpacity>

      <Text
        style={[
          BaseStyle['text'],
          BaseStyle['text--large'],
          BaseStyle['text--black'],
          containerStyle.color && {
            color: containerStyle.color
          },
          containerStyle.fontSize && {
            fontSize: containerStyle.fontSize
          }
        ]}
      >
        {countNumber}
      </Text>

      <TouchableOpacity
        onPress={countUp}
        style={{ padding: 10 }}
      >
        <View
          style={[
            styles['button'],
            buttonStyle
          ]}
        >
          <Entypo
            name='plus'
            size={16}
            color={buttonStyle && buttonStyle.color
              ? buttonStyle.color : '#727C8E'}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

Stepper.propTypes = {
  count: PropTypes.number,
  onCount: PropTypes.func,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

Stepper.defaultProps = {
  count: 1,
  onCount: () => {},
  containerStyle: {},
  buttonStyle: {}
}

export default Stepper

const styles = EStyleSheet.create({
  container: {
    borderRadius: '8rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '88rem',
    backgroundColor: '#FFFFFF'
  },
  button: {
    borderRadius: '16rem',
    backgroundColor: '#E3E5E8'
  }
})
