import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const Square = props => {
  const {square, squareText, squarePressed} = styles
  const {value, onClick, hightlighted} = props
  return (
    <TouchableOpacity style={(hightlighted ? [square, squarePressed] : square)} onPress={() => onClick()}>
      <Text style={squareText}>
        {value}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#999',
    borderRadius: 4,
    height: 34,
    width: 34,
    margin: 2,
    elevation: 10
  },
  squareText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 34
  },
  squarePressed: {
    backgroundColor: 'yellow'
  }
})

export {Square}
