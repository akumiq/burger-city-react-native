import EStyleSheet from 'react-native-extended-stylesheet'

export const BaseStyle = EStyleSheet.create({
  text: {
    includeFontPadding: false,
    fontFamily: 'Nonito-Regular'
  },
  'text--grey': {
    color: '#727C8E'
  },
  'text--orange': {
    color: '#FF9F1C'
  },
  'text--white': {
    color: '#FFFFFF'
  },
  'text--black': {
    color: '#1D2126'
  },
  'text--extrabold': {
    fontFamily: 'Nunito-ExtraBold'
  },
  'text--bold': {
    fontFamily: 'Nunito-Bold'
  },
  'text--semibold': {
    fontFamily: 'Nunito-SemiBold'
  },
  'text--extraSmall': {
    fontSize: '6rem'
  },
  'text--small': {
    fontSize: '8rem'
  },
  'text-medium': {
    fontSize: '10rem'
  },
  'text--large': {
    fontSize: '11rem'
  },
  'text--xl': {
    fontSize: '13rem'
  },
  'text--xxl': {
    fontSize: '14rem'
  },
  'text--3xl': {
    fontSize: '16rem'
  },
  'text--giant': {
    fontSize: '37rem'
  },
  'text--left': {
    textAlign: 'left'
  },
  'text--center': {
    textAlign: 'center'
  },
  'text--right': {
    textAlign: 'right'
  }
})
