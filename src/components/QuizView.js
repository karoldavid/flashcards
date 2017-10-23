import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { lightPurp, red, white } from '../utils/colors'
import { showAnswer } from '../actions'

class QuizView extends Component {

	onButtonPress = () => {
      console.log('Button Pressed')
    }

    onAnswerTextPress = () => {
    	const { show } = this.props.quiz
    	this.props.showAnswer(!show)
    }

	render() {

		const { questions } = this.props.currentDeck
		const { show, index } = this.props.quiz

		console.log(index)

		return (
			<View style={styles.container}>
				<Text style={styles.cardsLeftStyles}>{index + 1}/{questions.length}</Text>
				
				{ !show && (
					<Text style={styles.questionStyles}>{questions[index].question}</Text>
				)}

				{ show && (
					<Text style={styles.answerStyles}>
						{questions[index].answer}
					</Text>
				)}
				
				<TouchableOpacity onPress={this.onAnswerTextPress}>
					<Text style={styles.answerTouchableStyles}>
						{ !show ? 'Answer' : 'Question' }
					</Text>
				</TouchableOpacity>
				
				<Button
					onPress={() => this.onButtonPress()}
					title={'Correct'}
				/>
				<Button
					onPress={() => this.onButtonPress()}
					title={'Incorrect'}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightPurp,
    margin: 5
  },
  questionStyles: {
    paddingTop: 50,
    paddingBottom: 20,
    fontSize: 24,
    color: white
  },
  answerTouchableStyles: {
  	fontSize: 16,
  	fontWeight: 'bold',
  	color: red
  },
  answerStyles: {
  	paddingTop: 50,
  	paddingBottom: 20,
  	paddingLeft: 40,
  	fontSize: 16,
  	fontWeight: 'bold',
  	color: white
  },
  cardsLeftStyles: {
  	fontSize: 16,
  	fontWeight: 'bold',
  	color: white,
  }
})

const mapStateToProps = (state) => {
	const { flashCards, selectDeck, quiz } = state
	console.log(quiz)
    return {
        currentDeck: flashCards[selectDeck],
        quiz
    }
}

const mapDispatchToProps = (dispatch => {
	return {
		showAnswer: (show) => dispatch(showAnswer(show))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizView)