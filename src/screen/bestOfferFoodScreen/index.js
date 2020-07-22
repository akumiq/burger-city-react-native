import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, FlatList, StatusBar, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'

import { BaseStyle } from '../../constant'
import Stepper from '../../components/global/Stepper'

class BestOfferFoodScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false,
      countNumber: 1
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderMainSection()}
        {this.renderFooterSection()}
      </View>
    )
  }

  renderMainSection = () => {
    return (
      <FlatList
        data={[0]}
        keyExtractor={(item, index) => item + index.toString()}
        ListHeaderComponent={this.renderPoster()}
        renderItem={this.renderContent}
      />
    )
  }

  renderPoster = () => {
    return (
      <View>
        <StatusBar
          translucent
          barStyle='light-content'
          backgroundColor='transparent'
        />
        <ImageBackground
          source={{ uri: 'https://live.staticflickr.com/65535/49768011471_39a4140283_z.jpg' }}
          style={styles['poster']}
        >
          <View style={styles['poster__overlay']} />

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles['back__button']}
          >
            <Feather
              name='chevron-left'
              color='#FF9F1C'
              size={28}
              style={{
                marginLeft: -5,
                marginVertical: -10
              }}
            />
          </TouchableOpacity>

          <View style={styles['rating']}>
            <Text
              style={[
                BaseStyle['text'],
                BaseStyle['text--3xl'],
                BaseStyle['text--bold'],
                BaseStyle['text--orange'],
                { marginRight: 10 }
              ]}
            >
              4
            </Text>
            <StarRating
              disabled
              maxStars={1}
              rating={1}
              starSize={15}
              fullStarColor='#FF9F1C'
              emptyStar='star'
              emptyStarColor='#cecece'
            />
          </View>

          <View style={styles['favourite__wrapper']}>
            <TouchableOpacity
              style={styles['favourite__button']}
            >
              <MaterialIcons
                name='favorite'
                color='#FFFFFF'
                size={20}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderContent = () => {
    return (
      <View style={styles['content']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--bold'],
            BaseStyle['text--black']
          ]}
        >
          Beef Egg Burger
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black'],
            { marginTop: 20 }
          ]}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
    )
  }

  renderFooterSection = () => {
    const { countNumber } = this.state
    const { navigation } = this.props
    return (
      <View style={styles['footer']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--xxl'],
            BaseStyle['text--bold'],
            BaseStyle['text--white']
          ]}
        >
          $18
        </Text>

        <Stepper
          count={countNumber}
          containerStyle={styles['stepper__container']}
          buttonStyle={styles['stepper__button']}
          onCount={(number) => this.onCount(number)}
        />

        <TouchableOpacity
          style={styles['add-to-cart']}
          onPress={() => navigation.navigate('TrolleyScreen')}
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

  onCount = (countNumber) => {
    this.setState({ countNumber })
  }
}

BestOfferFoodScreen.propTypes = {
  navigation: PropTypes.object
}

export default BestOfferFoodScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  back__button: {
    padding: 20,
    marginTop: StatusBar.currentHeight
  },
  poster: {
    height: 250,
    width: '100%'
  },
  poster__overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  rating: {
    position: 'absolute',
    left: 20,
    bottom: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    elevation: 5
  },
  favourite__wrapper: {
    position: 'absolute',
    right: 20,
    bottom: -20
  },
  favourite__button: {
    borderRadius: 50,
    backgroundColor: '#FF545A',
    padding: 10,
    elevation: 5
  },
  content: {
    marginTop: 60,
    paddingHorizontal: 20
  },
  footer: {
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9F1C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 15,
    marginTop: 'auto',
    marginBottom: 20
  },
  stepper__container: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#FF9C1F',
    marginLeft: 'auto'
  },
  stepper__button: {
    color: '#FFFFFF',
    backgroundColor: '#FF9F1C'
  },
  'add-to-cart': {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingTop: 8,
    marginLeft: 20
  },
  remove__modal: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  btn__wrapper: {
    flexDirection: 'row',
    marginTop: 25
  }
})
