import React from 'react'
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native'
import {
	FormLabel,
	FormInput,
	FormValidationMessage
} from 'react-native-elements'
import {
	lightBrilliantBlueMagenta,
	white
} from '../utils/colors'

const DeckFormInput = ({ label, placeholder, value, handleInputTextChange, error }) => {
	const { containerStyles, titleStyles, inputStyles } = styles
	return(
		<View style={containerStyles}>

			<FormLabel labelStyle={titleStyles}>
				{label}
			</FormLabel>

			<FormInput
				style={inputStyles}
				placeholder={placeholder}
				value={value}
				onChangeText={(value) => handleInputTextChange(value)}
				shake={error}
			/>

			<FormValidationMessage>
				{error && value.length < 5 ? 'Enter at least 5 letters' : ''}
			</FormValidationMessage>
		</View>
	)
}

const styles = StyleSheet.create({
	containerStyles: {
    	flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center'
    },
    titleStyles: {
    	fontSize: 18,
    	color: white,
    	textAlign: 'center'
    },
    inputStyles: {
      margin: 15,
      height: 40,
      width: 200,
      borderColor: lightBrilliantBlueMagenta,
      borderWidth: 1,
      color: white,
      textAlign: 'center'
   }
})

export default DeckFormInput