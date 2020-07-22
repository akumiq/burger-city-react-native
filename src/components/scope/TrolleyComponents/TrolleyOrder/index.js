import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyle } from '../../../../constant'
import { StandardButton } from '../../../global/CustomButton'
import Stepper from '../../../global/Stepper'

class TrolleyOrder extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.renderLead()}
        {this.renderOrder()}
        {this.renderOrderDetails()}
        {this.renderCheckout()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['lead']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--extrabold'],
            BaseStyle['text--black']
          ]}
        >
          Your Order
        </Text>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--medium'],
            BaseStyle['text--gray'],
            { marginTop: 3 }
          ]}
        >
          Order number is 1738091238
        </Text>
      </View>
    )
  }

  renderOrder = () => {
    return (
      <View style={styles['order-list__item']}>
        <Image
          source={{ uri: 'https://live.staticflickr.com/65535/49768011471_39a4140283_z.jpg' }}
          style={styles['order-list__item__image']}
        />

        <View style={styles['order-list__item__info']}>
          <View style={styles['order-list__item__info--menu']}>
            <Text
              style={[
                BaseStyle['text'],
                BaseStyle['text--large'],
                BaseStyle['text--bold'],
                BaseStyle['text--black'],
                { flex: 1.5 }
              ]}
            >
              Beef Egg Burger
            </Text>

            <Text
              style={[
                BaseStyle['text'],
                BaseStyle['text--large'],
                BaseStyle['text--bold'],
                BaseStyle['text--orange'],
                BaseStyle['text--right'],
                { flex: 0.5 }
              ]}
            >
              $18
            </Text>
          </View>

          <View style={styles['order-list__item__action']}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name='delete-circle'
                size={28}
                color='#CECECE'
              />
            </TouchableOpacity>

            <Stepper
              containerStyle={styles['order-list__stepper']}
            />
          </View>
        </View>
      </View>
    )
  }

  renderOrderDetails = () => {
    return (
      <View style={styles['order-detail']}>
        <View style={styles['order-detail__lead']}>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--xxl'],
              BaseStyle['text--bold'],
              BaseStyle['text--black']
            ]}
          >
            Delivery by:
          </Text>

          <TouchableOpacity>
            <Text
              style={[
                BaseStyle['text'],
                BaseStyle['text--large'],
                BaseStyle['text--orange']
              ]}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles['order-detail__info']}>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--gray']
            ]}
          >
            No. 02, 6th Lane, Colombo 03
          </Text>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--medium'],
              BaseStyle['text--gray'],
              { marginTop: 5 }
            ]}
          >
            19 / 10 / 2018  10:00 AM
          </Text>
        </View>
      </View>
    )
  }

  renderCheckout = () => {
    return (
      <View style={styles['checkout']}>
        <View style={styles['checkout__amount']}>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--xxl'],
              BaseStyle['text--bold'],
              BaseStyle['text--black']
            ]}
          >
            Order amount:
          </Text>

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--xxl'],
              BaseStyle['text--bold'],
              BaseStyle['text--orange']
            ]}
          >
            $100
          </Text>
        </View>

        <StandardButton
          titleButton='Checkout'
          buttonStyle={{ marginTop: 15 }}
        />
      </View>
    )
  }
}

export default TrolleyOrder

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lead: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  'order-list': {},
  'order-list__item': {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  'order-list__item__image': {
    borderRadius: 7,
    height: 80,
    width: 80
  },
  'order-list__item__info': {
    flex: 1,
    marginLeft: 15,
    paddingVertical: 5
  },
  'order-list__item__info--menu': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  'order-list__item__action': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  'order-list__stepper': {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    width: 100
  },
  'order-detail': {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 15
  },
  'order-detail__lead': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  'order-detail__info': {
    marginTop: 15
  },
  'empty-trolley': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  checkout: {
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 250
  },
  checkout__amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
