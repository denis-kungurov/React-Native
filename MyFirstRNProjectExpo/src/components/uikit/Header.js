import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { width, BLUE } from '../../../constants'

const Header = ({
  title,
  onPressLeft,
  onPressRight, 
  iconLeft,
  iconRight, 
  colorLeft,
  colorRight
}) => {
  const { container, textStyle, iconLeftStyle, iconRightStyle } = styles
  return (
    <View style={container}>
      {iconLeft &&
      <TouchableOpacity onPress={onPressLeft}>
        <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
      </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode='tail' style={textStyle}>{title}</Text>
      {iconRight &&
      <TouchableOpacity onPress={onPressRight}>
        <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, { color: colorRight}]} />
      </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: BLUE,
    height: 90,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 40,
    width: width - 75
  }, 
  iconLeftStyle: {
    paddingTop: 40,
    fontSize: 35
  },
  iconRightStyle: {
    paddingTop: 44,
    fontSize: 30,
    marginRight: 30
  }
})

export { Header }
