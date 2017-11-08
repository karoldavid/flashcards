import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, white } from "../utils/colors";

const Button = ({ onPress, title }) => {
   return (
      <View>
         <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonStyles}>{title}</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   buttonStyles: {
      borderWidth: 1,
      margin: 10,
      padding: 25,
      paddingRight: 50,
      paddingLeft: 50,
      borderColor: white,
      backgroundColor: blue,
      borderRadius: 10,
      borderWidth: 1,
      color: white
   }
});

export default Button;