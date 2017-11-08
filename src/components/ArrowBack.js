import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, white } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const ArrowBack = ({ onPress }) => {
   return (
      <View style={styles.arrowStyles}>
         <TouchableOpacity onPress={onPress}>
            <Ionicons name="ios-arrow-back" size={30} color={white} />
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   arrowStyles: {
      paddingLeft: 20,
      paddingRight: 20
   }
});

export default ArrowBack;
