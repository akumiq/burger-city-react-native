import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import burgerLogo from '../../assets/icon/burger-logo.png'
import logo from '../../assets/icon/logo.png'
import sliderImage from '../../assets/image/slider-image.png'
import ticketBg from '../../assets/image/ticket-background.png'
import offer1 from '../../assets/image/image.png'
import offer2 from '../../assets/image/image-2.png'
import offer3 from '../../assets/image/image-3.png'

export default class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSlide: 0,
      bestOffer: [
        { image: offer1 },
        { image: offer2 },
        { image: offer3 }
      ]
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderHeader()}

        <ScrollView>
          {this.renderSlider()}
          {this.renderOrder()}
          {this.renderBestOffer()}
        </ScrollView>
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle='dark-content'
        backgroundColor='transparent'
      />
    )
  }

  renderHeader = () => {
    return (
      <View style={styles['header']}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles['btn']}
        >
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
        </TouchableOpacity>

        <View style={styles['logo']}>
          <Image
            source={logo}
            resizeMode='contain'
          />
        </View>

        <TouchableOpacity
          onPress={() => {}}
          style={styles['btn']}
        >
          <FontAwesome
            name='shopping-cart'
            color='#ff9f1c'
            size={20}
          />
        </TouchableOpacity>
      </View>
    )
  }

  renderSlider = () => {
    return (
      <View>
        {this.renderCarousel()}
        {this.renderCarouselPagination()}
      </View>
    )
  }

  renderCarousel = () => {
    const { width } = Dimensions.get('window')

    return (
      <Carousel
        data={[0, 0, 0]}
        renderItem={this.renderCarouselItem}
        decelerationRate='fast'
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={
          index => this.setState({ activeSlide: index })
        }
      />
    )
  }

  renderCarouselItem = () => {
    return (
      <View>
        <Image
          source={sliderImage}
          resizeMode='cover'
        />

        <Text
          style={styles['home__slider__text']}
        >
          Worl`s Greatest Burgers.
        </Text>
      </View>
    )
  }

  renderCarouselPagination = () => {
    const { activeSlide } = this.state

    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={activeSlide}
        dotStyle={
          styles['home__pagination__dot']
        }
        dotContainerStyle={
          styles['home__pagination__dot__container']
        }
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        containerStyle={
          styles['home__pagination__container']
        }
      />
    )
  }

  renderOrder = () => {
    return (
      <View style={styles['home__order']}>
        {this.renderOrderTicket('Track Here')}
        {this.renderOrderTicket('Order Here')}
      </View>
    )
  }

  renderOrderTicket = (title) => {
    return (
      <ImageBackground
        source={ticketBg}
        style={styles['home__order_ticket']}
      >
        <View style={styles['home__order__ticket_content']}>
          <Image
            source={burgerLogo}
            style={{ width: 38, height: 46 }}
          />

          <View style={styles['home__order__ticket_desc']}>
            <Text style={styles['home__order__title']}>
              {title}
            </Text>

            <Text style={styles['home__order__subtitle']}>
              Login to continue Burger City
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }

  renderBestOffer = () => {
    const { bestOffer } = this.state

    return (
      <View style={styles['home__best-offer']}>
        <Text style={styles['home__best-offer__title']}>
          Best Offers
        </Text>

        <FlatList
          data={bestOffer}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderBestOfferItem}
          contentContainerStyle={styles['home__best-offer__list']}
        />
      </View>
    )
  }

  renderBestOfferItem = ({ item }) => {
    return (
      <Image
        source={item.image}
        resizeMode='contain'
        style={styles['home__best-offer__image']}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  lang_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#ff9f1c',
    includeFontPadding: false
  },
  logo: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  home__slider__text: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 250,
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    color: '#ffffff'
  },
  home__pagination__dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  home__pagination__dot__container: {
    marginHorizontal: 2
  },
  home__pagination__container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  home__order: {
    marginTop: 8
  },
  home__order_ticket: {
    marginHorizontal: 20,
    marginTop: 18
  },
  home__order__ticket_content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 40
  },
  home__order__ticket_desc: {
    marginLeft: 20
  },
  home__order__title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: '#ffffff',
    includeFontPadding: false
  },
  home__order__subtitle: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    color: '#ffffff',
    includeFontPadding: false
  },
  'home__best-offer': {
    marginTop: 25,
    marginBottom: 25
  },
  'home__best-offer__title': {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#1d2126',
    includeFontPadding: false,
    paddingHorizontal: 20
  },
  'home__best-offer__list': {
    paddingHorizontal: 13,
    marginTop: 15
  },
  'home__best-offer__image': {
    marginHorizontal: 7
  }
})
