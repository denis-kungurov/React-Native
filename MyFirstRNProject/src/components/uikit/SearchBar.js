import React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { width, BLUE } from '../../../constants'

const SearchBar = ({
  onPressRight, 
  iconRight, 
  colorRight,
  onChangeText,
  placeholder,
  value,
  onBlur
}) => {
  const { container, sub, iconRightStyle, inputStyle, searchStyle } = styles
  return (
    <View style={container}>
      <View style={sub}>
        <TextInput 
          style={inputStyle}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur} 
        />
        {iconRight &&
      <TouchableOpacity onPress={onPressRight}>
        <View style={searchStyle}>
          <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, { color: colorRight}]} />
        </View>
      </TouchableOpacity>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: BLUE,
    height: 90,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  sub: {
    justifyContent: 'space-between',
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 35,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20
  },
  inputStyle: {
    fontSize: 18,
    height: 40,
    width: width - 90,
    marginLeft: 15,
    backgroundColor: '#fff'
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconRightStyle: {
    fontSize: 30,
    marginTop: 2
  }
})

export { SearchBar }
