import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'

const InputBox = (props) => {
  return (
    <View
      style={[
        props.containerStyle,
        styles['container']
      ]}>
      <props.icon.type
        name={props.icon.name}
        color={props.icon.color}
        size={props.icon.size}
        style={props.icon.style}
      />

      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor='#727c8e'
        style={styles['input--box']}
        secureTextEntry={props.password}
        onChangeText={
          (value) => props.onHandleInput(props.name, value)
        }
      />
    </View>
  )
}

InputBox.propTypes = {
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  password: PropTypes.bool,
  onHandleInput: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.object,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  'input--box': {
    flex: 1,
    height: 45,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#727c8e',
    // includeFontPadding: false,
    paddingRight: 30
  }
})

export default InputBox
