import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import bgImage from '../../assets/image/background-img.png'
import burgerImg from '../../assets/icons/burger-logo.png'

class OnboardingScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: [
        "World's\nGreatest\nBurgers",
        "World's\nGreatest\nBurgers 2",
        "World's\nGreatest\nBurgers 3"
      ],
      activeSlide: 0
    }
  }

  render () {
    return (
      <View>
        {this.renderStatusBar()}
        {this.renderBackground()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    )
  }

  renderBackground = () => {
    return (
      <ImageBackground
        source={bgImage}
        style={styles['onboarding__bg']}
      >
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderHero()}
        {this.renderStartButton()}
      </ImageBackground>
    )
  }

  renderOverlay = () => {
    return (
      <View
        style={styles['onboarding__overlay']}
      />
    )
  }

  renderLogo = () => {
    return (
      <View
        style={styles['onboarding__logo']}
      >
        <Image source={burgerImg} />
      </View>
    )
  }

  renderHero = () => {
    return (
      <View
        style={styles['onboarding__hero__container']}
      >
        {this.renderCarousel()}
        {this.renderCarouselPagination()}
      </View>
    )
  }

  renderCarousel = () => {
    const { width } = Dimensions.get('window')

    return (
      <Carousel
        data={this.state.hero}
        renderItem={this.renderCarouselItem}
        decelerationRate="fast"
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={
          index => this.setState({ activeSlide: index })
        }
      />
    )
  }

  renderCarouselItem = ({ item }) => {
    return (
      <View
        style={styles['onboarding__hero__wrapper']}
      >
        <Text
          style={styles['onboarding__hero']}
        >
          {item}
        </Text>
      </View>
    )
  }

  renderCarouselPagination = () => {
    const { hero, activeSlide } = this.state

    return (
      <Pagination
        dotsLength={hero.length}
        activeDotIndex={activeSlide}
        dotStyle={
          styles['onboarding__pagination__dot']
        }
        dotContainerStyle={
          styles['onboarding__pagination__dot__container']
        }
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        containerStyle={
          styles['onboarding__pagination__container']
        }
      />
    )
  }

  renderStartButton = () => {
    return (
      <TouchableHighlight
        underlayColor="#ED941A"
        style={styles['onboarding__button']}
        onPress={this.onStartHere}
      >
        <Text
          style={styles['onboarding__button__text']}
        >
          Get Start Here
        </Text>
      </TouchableHighlight>
    )
  }

  onStartHere = () => {
    this.props.navigation.navigate('LoginScreen')
  }
}

OnboardingScreen.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  onboarding__bg: {
    height: '100%',
    width: '100%'
  },
  onboarding__overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  onboarding__logo: {
    alignItems: 'center',
    marginTop: 80
  },
  onboarding__hero__container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 130,
    left: 0
  },
  onboarding__hero__wrapper: {
    paddingHorizontal: 30,
    marginTop: 'auto'
  },
  onboarding__hero: {
    fontFamily: 'Nunito-Bold',
    fontSize: 31,
    color: '#ffffff'
  },
  onboarding__pagination__dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  onboarding__pagination__dot__container: {
    marginHorizontal: 2
  },
  onboarding__pagination__container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  onboarding__button: {
    borderRadius: 8,
    backgroundColor: '#FF9F1C',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 50,
    marginHorizontal: 30,
    paddingVertical: 15
  },
  onboarding__button__text: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16
  }
})

export default OnboardingScreen
