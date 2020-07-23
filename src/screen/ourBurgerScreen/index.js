import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Dimensions, Text, StatusBar } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import EStyleSheet from 'react-native-extended-stylesheet'

import Header from '../../components/global/Header'
import OrderMethodContent from '../../components/scope/OurBurgerComponents/OrderMethodContent'
import DeliveryAddressContent from '../../components/scope/OurBurgerComponents/DeliveryAddressContent'
// import PickupDateTimeContent from '../../components/scope/OurBurgerComponents/PickupDateTimeContent'
// import MenuContent from '../../components/scope/OurBurgerComponents/MenuContent'
// import DishContent from '../../components/scope/OurBurgerComponents/DishContent'
// import SelectedDishContent from '../../components/scope/OurBurgerComponents/SelectedDishContent'
// import ChoicesDishContent from '../../components/scope/OurBurgerComponents/ChoicesDishContent'
// import CartContent from '../../components/scope/OurBurgerComponents/CartContent'
// import CartSubTotal from '../../components/scope/OurBurgerComponents/CartSubTotal'
// import CondimentsContent from '../../components/scope/OurBurgerComponents/CondimentsContent'
// import CardTotalContent from '../../components/scope/OurBurgerComponents/CartTotalContent'

class OurBurgerScreen extends Component {
  constructor () {
    super()
    this.state = {
      slideActive: 0
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
    )
  }

  renderHeader = () => {
    const { slideActive } = this.state
    const withBack = slideActive > 0
    return (
      <Header
        withBack={withBack}
        onPressLeftButton={() => this.content.snapToPrev()}
        onPressRightButton={() => this.props.navigation.navigate('TrolleyScreen')}
      />
    )
  }

  renderContent = () => {
    const { height, width } = Dimensions.get('window')
    return (
      // <OrderMethodComponent />
      <Carousel
        ref={ ref => { this.content = ref }}
        data={[0, 1]}
        renderItem={this.renderSection}
        sliderHeight={height}
        sliderWidth={width}
        itemHeight={height}
        itemWidth={width}
        inactiveSlideScale={1}
        scrollEnabled={false}
        onSnapToItem={this.onSnap}
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
          <OrderMethodContent
            onProceed = {() => this.content.snapToNext()}
          />
        )
      case 1:
        return (
          <DeliveryAddressContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      // case 2 :
      //   return (
      //     <PickupDateTimeContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 3 :
      //   return (
      //     <MenuContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 4 :
      //   return (
      //     <DishContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 5 :
      //   return (
      //     <SelectedDishContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 6 :
      //   return (
      //     <ChoicesDishContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 7 :
      //   return (
      //     <CartContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 8 :
      //   return (
      //     <CartSubTotal
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 9 :
      //   return (
      //     <CondimentsContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      // case 10 :
      //   return (
      //     <CardTotalContent
      //       onProceed={() => this.content.snapToNext()}
      //     />
      //   )
      default :
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> 404 Not Found </Text>
          </View>
        )
    }
  }
}

OurBurgerScreen.propTypes = {
  navigation: PropTypes.object
}

export default OurBurgerScreen

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7'
  }
})
