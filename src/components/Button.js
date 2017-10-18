import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { blue, white } from '../utils/colors'

const Button = ({ onPress, title }) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>
               {title}
            </Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   button: {
      borderWidth: 1,
      padding: 25,
      paddingRight: 50,
      paddingLeft: 50,
      borderColor: white,
      backgroundColor: blue,
      borderRadius: 10,
      borderWidth: 1,
      color: white
   }
})

export default Button