import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EStyleSheet from 'react-native-extended-stylesheet'

import { BaseStyle } from '../../../../constant'
import { StandardButton, IconButton } from '../../../global/CustomButton'

class OrderMethodComponent extends Component {
  constructor() {
    super()
    this.state = {
      methods: [
        {
          name: 'In-Store',
          isActive: true
        },
        {
          name: 'Delivery',
          isActive: false
        },
        {
          name: 'Drive-Thru',
          isActive: false
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles['content']}>
        {this.renderOrderMethod()}
        {this.renderMethodList()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderOrderMethod = () => {
    return (
      <View style={styles['order-method']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text-black'],
            BaseStyle['text-bold']
          ]}
        >
          Order Method
          </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--l'],
            BaseStyle['text-black'],
            BaseStyle['text-semibold'],
            { marginTop: 5 }
          ]}
        >
          Please select your order method
          </Text>
      </View>
    )
  }

  renderMethodList = () => {
    const { methods } = this.state
    return (
      <FlatList
        data={methods}
        keyExtractor={(item, index) => item + index.toString()}
        style={styles['order-method__list']}
        renderItem={({ item, index }) => {
          const checkColor = item.isActive ? '#FF9F1C' : '#E3E5E8'
          return (
            <IconButton
              titleButton={item.name}
              iconRight={
                <MaterialCommunityIcons
                  name='check-circle'
                  color={checkColor}
                  size={18}
                />
              }
              buttonStyle={{ marginTop: 20 }}
              onPress={() => this.onPressMethod(index)}
            />
          )
        }}
      />
    )
  }

  onPressMethod = (index) => {
    const { methods } = this.state
    const newMethods = []

    methods.map((item, i) => {
      newMethods.push(item)

      if (index === i) {
        newMethods[index].isActive = true
      } else {
        newMethods[i].isActive = false
      }
    })
    this.setState({ methods: newMethods })
  }

  renderProceedButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Proceed to Order'
        buttonStyle={styles['proceed__button']}
        onPress={onProceed}
      />
    )
  }
}

OrderMethodComponent.propTypes = {
  onProceed: PropTypes.func
}

export default OrderMethodComponent

const styles = EStyleSheet.create({
  content: {
    flex: 1
  },
  'order-method': {
    paddingHorizontal: '16rem',
    paddingTop: '20rem'
  },
  'order-method__list': {
    paddingHorizontal: '16rem'
  },
  'order-method__button': {
    borderRadius: '6rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: '12rem',
    paddingHorizontal: '16rem'
  },
  proceed__button: {
    marginTop: 'auto',
    marginHorizontal: '16rem',
    marginBottom: '25rem'
  }
})
