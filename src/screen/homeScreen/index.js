import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

import Carousel, { Pagination } from 'react-native-snap-carousel'

import StarRating from 'react-native-star-rating/StarRating'

import ticketBg from '../../assets/image/ticket-background.png'
import burgerLogo from '../../assets/icons/burger-logo.png'
import offer1 from '../../assets/image/image.png'
import offer2 from '../../assets/image/image-2.png'
import offer3 from '../../assets/image/image-3.png'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/global/Header'

class HomeScreen extends Component {
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

        <ScrollView showsVerticalScrollIndicator={false}>
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
      <Header onPressRightButton={() => this.props.navigation.navigate('TrolleyScreen')} onPress={() => {}}/>
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
    const { banners } = this.props

    return (
      <Carousel
        data={banners}
        renderItem={this.renderCarouselItem}
        decelerationRate='fast'
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => this.setState({ activeSlide: index })}
      />
    )
  }

  renderCarouselItem = ({ item }) => {
    return (
      <View style={styles['home__slider__wrapper']}>
        <ImageBackground
          source={{ uri: item.imageUrl }}
          resizeMode='cover'
          style={styles['home__slider__image']}
        >
          <View style={styles['home__slider__image__overlay']} />

          <Text style={styles['home__slider__text']}>
            {item.lead}
          </Text>
        </ImageBackground>
      </View>
    )
  }

  renderCarouselPagination = () => {
    const { activeSlide } = this.state

    return (
      <Pagination
        dotsLength={4}
        activeDotIndex={activeSlide}
        dotStyle={styles['home__pagination__dot']}
        dotContainerStyle={styles['home__pagination_dot__container']}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        containerStyle={styles['home__pagination__container']}
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

  renderOrderTicket = (title = 'Custom Title') => {
    return (
      <ImageBackground
        source={ticketBg}
        resizeMode='cover'
        style={styles['home__order__ticket']}
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
    const { navigation } = this.props

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BestOfferFoodScreen')
        }}
      >
        <Image
          source={item.image}
          resizeMode='contain'
          style={styles['home__best-offer__image']}
        />

        <View style={styles['home__best-offer__info']}>
          <Text style={styles['home__best-offer__name']}>
            Beef Burger
          </Text>

          <Text style={styles['home__best-offer__price']}>
            $12
          </Text>
        </View>

        <StarRating
          disabled
          maxStars={5}
          rating={3}
          starSize={10}
          fullStarColor='#ff9f1c'
          emptyStar='star'
          emptyStarColor='#cecece'
          containerStyle={styles['home__best-offer__rate']}
        />
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  const { banners, bestOffer } = state.home
  return { banners, bestOffer }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
)

HomeScreen.propTypes = {
  banners: PropTypes.array,
  navigation: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '24rem'
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
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: '14rem',
    color: '#ff9f1c',
    includeFontPadding: false
  },
  home__slider__wrapper: {
    // paddingHorizontal: '30rem'
  },
  home__slider__image: {
    height: '210rem',
    width: '100%'
  },
  home__slider__image__overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  home__slider__text: {
    position: 'absolute',
    top: '16rem',
    left: '16rem',
    width: '210rem',
    fontFamily: 'Nunito-Bold',
    fontSize: '23rem',
    color: '#ffffff',
    lineHeight: 35
  },
  home__pagination_dot__container: {
    marginHorizontal: '2rem'
  },
  home__pagination__dot: {
    width: '7rem',
    height: '7rem',
    borderRadius: 4,
    backgroundColor: 'white'
  },
  home__pagination__container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: '16rem',
    paddingHorizontal: '16rem'
  },
  home__order: {
    marginTop: '7rem'
  },
  home__order__ticket: {
    marginHorizontal: '16rem',
    marginTop: '14rem'
  },
  home__order__ticket_content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '16rem',
    paddingHorizontal: '36rem'
  },
  home__order__ticket_desc: {
    marginLeft: '16rem'
  },
  home__order__title: {
    fontFamily: 'Nunito-Bold',
    fontSize: '16rem',
    color: '#ffffff',
    includeFontPadding: false
  },
  home__order__subtitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: '10rem',
    color: '#ffffff',
    includeFontPadding: false
  },
  'home__best-offer': {
    marginTop: '21rem',
    marginBottom: '21rem'
  },
  'home__best-offer__title': {
    fontFamily: 'Nunito-Bold',
    fontSize: '14rem',
    color: '#1D2126',
    includeFontPadding: false,
    paddingHorizontal: '16rem'
  },
  'home__best-offer__list': {
    paddingHorizontal: '10rem',
    marginTop: '12rem'
  },
  'home__best-offer__image': {
    marginHorizontal: '6rem'
  },
  'home__best-offer__info': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '12rem',
    marginHorizontal: '8rem'
  },
  'home__best-offer__name': {
    fontFamily: 'Nunito-Reguler',
    fontSize: '12rem',
    color: '#1d2126',
    includeFontPadding: false
  },
  'home__best-offer__price': {
    fontFamily: 'Nunito-Bold',
    fontSize: '10rem',
    color: '#ff9f1c',
    includeFontPadding: false
  },
  'home__best-offer__rate': {
    marginLeft: '8rem',
    marginTop: '4rem',
    paddingRight: '48rem'
  }
})
