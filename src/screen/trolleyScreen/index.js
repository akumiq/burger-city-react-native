import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { BaseStyles } from '../../constant'
import Header from '../../components/global/Header'
import TrolleyOrder from '../../components/scope/TrolleyComponents/TrolleyOrder'
// import PickupDateTimeContent from '../../components/scope/OurBurgerComponents/PickupDateTimeContent'
// import DeliveryAddressContent from '../../components/scoped/OurBurgerComponents/DeliveryAddressContent'

class TrolleyScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideActive: 0
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }

  renderHeader = () => {
    return (
      <Header
        withBack
        onPressLeftButton={this.onBack}
      />
    )
  }

  onBack = () => {
    const { slideActive } = this.state
    const { navigation } = this.props
    if (slideActive === 0) {
      navigation.goBack()
    } else {
      this.content.snapToPrev()
    }
  }

  renderContent = () => {
    const { height, width } = Dimensions.get('window')
    return (
      <Carousel
        ref={ref => { this.content = ref }}
        data={[0, 1, 2]}
        sliderHeight={height}
        sliderWidth={width}
        itemHeight={height}
        itemWidth={width}
        inactiveSlideScale={1}
        scrollEnabled={false}
        renderItem={this.renderSection}
        onBeforeSnapToItem={this.onSnap}
      />
    )
  }

  onSnap = (slideActive) => {
    this.setState({ slideActive })
  }

  renderSection = ({ item, index }) => {
    switch (index) {
      case 0:
        return (
          <TrolleyOrder
            onPickupTime={() => this.content.snapToNext()}
          />
        )
      case 1:
        return (
          <TrolleyOrder
            onPickupTime={() => this.content.snapToNext()}
          />
        )
      case 2:
        return (
          <TrolleyOrder
            onProceed={() => this.content.snapToPrev()}
          />
        )
      default:
        return this.renderEmptyTrolley()
    }
  }

  renderEmptyTrolley = () => {
    return (
      <View style={styles['empty-trolley']}>
        <Text
          style={[
            BaseStyles['text'],
            BaseStyles['text--2xl'],
            BaseStyles['text--black'],
            BaseStyles['text--bold']
          ]}
        >
          Lets Order Burger!
        </Text>
      </View>
    )
  }
}

TrolleyScreen.propTypes = {
  navigation: PropTypes.object
}

export default TrolleyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  'empty-trolley': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
