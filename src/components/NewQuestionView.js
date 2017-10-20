import React, { Component } from 'react'
import { Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { lightPurp, lightBrilliantBlueMagenta, white } from '../utils/colors'
import Button from './Button'

class NewQuestionView extends Component {

	state = {question: ''}

	handleTextChange = (question) => {
		this.setState(() => ({
			question
		}))
	}

	onSubmitButtonPress = () => {
		console.log(this.state.question)
	}


	render() {
		const  question = this.state.question
		const { params } = this.props.navigation.state
		const { containerStyles, titleStyles, inputStyles } = styles

		return(
			<KeyboardAvoidingView behavior='padding' style={containerStyles}>
				<Text style={titleStyles}>
					What is the question you want to ask?
				</Text>
				<TextInput
			        style={inputStyles}
			        placeholder="type questio here"
			        value={question}
			        onChangeText={this.handleTextChange}
			    />
			    <Button
					onPress={this.onSubmitButtonPress}
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

export default NewQuestionView