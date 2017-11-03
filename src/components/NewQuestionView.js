import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveCard } from '../actions/DeckActions'
import {
	Text,
	View,
	StyleSheet,
	KeyboardAvoidingView
} from 'react-native'
import {
	FormLabel,
	FormInput,
	FormValidationMessage
} from 'react-native-elements'
import {
	lightPurp,
	lightBrilliantBlueMagenta,
	white
} from '../utils/colors'
import Button from './Button'
import DeckTitle from './DeckTitle'

class NewQuestionView extends Component {

	state = {
		question: '',
		answer: '',
		error: {
			question: false,
			answer: false
		}
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
		const { selectDeck, saveCard, navigation } = this.props
		const newQuestion = {
			question: question,
			answer: answer
		}

		if (question.length > 4 && answer.length > 4) {
			saveCard(selectDeck.title, newQuestion, () => {
				navigation.navigate('DeckListView')
			})
		} else {
			this.setState({
				error: {
					question: true,
					answer: true
				}
			})
		}
	}

	render() {
		const  { question, answer, error } = this.state
		const { title } = this.props.selectDeck
		const { params } = this.props.navigation.state
		const { containerStyles, formContainerStyles, titleStyles, inputStyles } = styles

		return(
			<KeyboardAvoidingView behavior='padding' style={containerStyles}>
				
					<DeckTitle
						deckTitle={title}
					/>
				
					<FormLabel labelStyle={titleStyles}>
						What is the question you want to ask?
					</FormLabel>

					<FormInput
						style={inputStyles}
						placeholder="type question here"
						value={question}
						onChangeText={this.handleQuestionTextChange}
						shake={error.question}
					/>

					<FormValidationMessage>
						{error.question && question.length < 5 ? 'Enter at least 5 letters' : ''}
					</FormValidationMessage>

					<FormLabel labelStyle={titleStyles}>
						What is the answer?
					</FormLabel>

					<FormInput
						style={inputStyles}
						placeholder="type answer here"
						value={answer}
						onChangeText={this.handleAnswerTextChange}
						shake={error.answer}
					/>

					<FormValidationMessage>
						{error.answer && answer.length < 5 ? 'Enter at least 5 letters' : ''}
					</FormValidationMessage>
				
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
    	justifyContent: 'space-around',
    	backgroundColor: lightPurp,
    	margin: 5
    },
    formContainerStyles: {
        flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center',  	
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

function mapStateToProps(state) {
	return {
		selectDeck: state.decks.selected
	}
}

function mapDispatchToProps(dispatch) {
	return {
		saveCard: (title, newQuestion, callback) => dispatch(saveCard(title, newQuestion, callback))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView)