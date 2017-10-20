import React, { Component } from 'react'
import { Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { lightPurp, lightBrilliantBlueMagenta, white } from '../utils/colors'

class NewDeckView extends Component {

	state = {text: ''}

	render() {
		const { params } = this.props.navigation.state
		const { containerStyles, titleStyles, inputStyles } = styles 

		return(
			<KeyboardAvoidingView behavior='padding' style={containerStyles}>
				<Text style={titleStyles}>
					What is the title of your new deck?
				</Text>
				<TextInput
			        style={inputStyles}
			        placeholder="type title here"
			        onChangeText={(text) => this.setState({text})}
			    />
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	containerStyles: {
    	flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center',
    	backgroundColor: lightPurp,
    	margin: 5
    },
    titleStyles: {
    	fontSize: 18,
    	color: white
    },
    inputStyles: {
      margin: 15,
      height: 40,
      width: 200,
      borderColor: lightBrilliantBlueMagenta,
      borderWidth: 1,
      color: white
   },
})

export default NewDeckView