import React, { Component } from 'react'
import { Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { lightPurp, lightBrilliantBlueMagenta, white } from '../utils/colors'
import Button from './Button'

class NewDeckView extends Component {

	state = {text: ''}

	handleTextChange = (text) => {

	//	console.log("text:", text)
		this.setState(() => ({
			text
		}))
	}

	onSubmitButtonPress = () => {
		console.log("submit title")
	}


	render() {
		const  text = this.state.text
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
			        value={text}
			       /* onChangeText={(text) => this.setState({text})}*/
			        onChange={(text) => this.handleTextChange(text)}
			    />
			    <Button
					onPress={() => this.onSubmitButtonPress()}
					title={'Submit'}
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