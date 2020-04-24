import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const InputBox = (props) => {
  const { name, placeholder } = props.item

  return (
    <View style={styles['container']}>
      <EvilIcons
        name={name}
        color='#727c8e'
        size={22}
        style={styles['icon']}
      />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#727c8e'
        style={styles['input--box']}
      />
    </View>
  )
}

InputBox.propTypes = {
  item: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 15
  },
  icon: {
    marginRight: 10,
    marginLeft: 20
  },
  'input--box': {
    flex: 1,
    height: 45,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#727c8e',
    includeFontPadding: false,
    paddingRight: 30
  }
})

export default InputBox
