import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Entypo from 'react-native-vector-icons/Entypo'

import { BaseStyle } from '../../../constant'

class Stepper extends Component {
  constructor () {
    super()
    this.state = {
      countNumber: 1
    }
  }

  render () {
    const { countNumber } = this.state
    const { containerStyle } = this.props
    const wrapperStyle = [
      styles['container'],
      containerStyle
    ]
    return (
      <View style={wrapperStyle}>
        <TouchableOpacity
          onPress={this.countDown}
          style={{ padding: 10 }}
        >
          <View style={styles['button']}>
            <Entypo
              name='minus'
              size={16}
              color={'#727C8E'}
            />
          </View>
        </TouchableOpacity>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black']
          ]}
        >
          {countNumber}
        </Text>

        <TouchableOpacity
          onPress={this.countUp}
          style= {{ padding: 10 }}
        >
          <View style={styles['button']}>
            <Entypo
              name='plus'
              size={16}
              color={'#727C8E'}
            />

          </View>
        </TouchableOpacity>
      </View>
    )
  }

  countUp = () => {
    const { counter } = this.props
    this.setState(prevState => ({
      countNumber: prevState.countNumber + 1
    }), () => {
      if (counter) {
        counter(this.state.countNumber)
      }
    })

    // cara ke 2
    // const plus = prevState => ({
    //   countNumber: prevState.countNumber + 1
    // })
    // const callback = () => {
    //   const { counter } = this.props
    //   counter(this.state.countNumber)
    // }
    // this.setState(plus, callback)
  }

  countDown = () => {
    const { counter } = this.props
    this.setState(prevState => {
      if (prevState.countNumber > 1) {
        return {
          countNumber: prevState.countNumber - 1
        }
      }
    }, () => {
      if (counter) {
        counter(this.state.countNumber)
      }
    })
  }
}

Stepper.propTypes = {
  counter: PropTypes.func,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
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
