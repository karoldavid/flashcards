import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'
import { lightPurp, lightBrilliantBlueMagenta, white } from '../utils/colors'
import Button from './Button'

class NewQuestionView extends Component {

	state = {
		question: '',
		answer: ''
	}

	handleQuestionTextChange = (question) => {
		this.setState(() => ({
			question
		}))
	}
	handleAnswerTextChange = (answer) => {
		this.setState(() => ({
			answer
		}))
	}

	onSubmitButtonPress = () => {
		const { question, answer } = this.state
		const { selectDeck } = this.props
		const newQuestion = {
			question: question,
			answer: answer
		}

		this.props.addCard(newQuestion, selectDeck)
		//this.props.navigation.goBack();
		this.props.navigation.navigate('DeckList')
	}

	render() {
		const  { question, answer } = this.state
		const { params } = this.props.navigation.state
		const { containerStyles, titleStyles, inputStyles } = styles

		return(
			<KeyboardAvoidingView behavior='padding' style={containerStyles}>
				<Text style={titleStyles}>
					What is the question you want to ask?
				</Text>
			    <FormLabel>Question</FormLabel>
				<FormInput
					style={inputStyles}
					placeholder="type question here"
					value={question}
					onChangeText={this.handleQuestionTextChange}
				/>
				<Text style={titleStyles}>
					What is the answer?
				</Text>
				<FormLabel>Answer</FormLabel>
				<FormInput
					style={inputStyles}
					placeholder="type answer here"
					value={answer}
					onChangeText={this.handleAnswerTextChange}
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

function mapStateToProps(state) {
	return {
		selectDeck: state.selectDeck
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addCard: (newQuestion, index) => dispatch(addCard(newQuestion, index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView)