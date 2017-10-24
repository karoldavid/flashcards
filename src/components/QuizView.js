import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { lightPurp, red, white } from '../utils/colors'
import { showAnswer, increaseScore } from '../actions'

class QuizView extends Component {

	state = { answered: false }

	onAnswerButtonPress = (correct) => {
		this.props.increaseScore(correct)
		this.setState({ answered: true })
    }

    onAnswerTextPress = () => {
    	const { show } = this.props.quiz
    	this.props.showAnswer(!show)
    }

    onNextQuestionButtonPress = () => {
    	console.log('next question')
    }

	render() {

		const { questions } = this.props.currentDeck
		const { show, index } = this.props.quiz
		const { answered } = this.state

		return (
			<View style={styles.container}>
				<Text style={styles.cardsLeftStyles}>{index + 1}/{questions.length}</Text>

				{!answered && (
					<View>
						<View>
							{!show && (
								<Text style={styles.questionStyles}>{questions[index].question}</Text>
							)}

							{show && (
								<Text style={styles.answerStyles}>
									{questions[index].answer}
								</Text>
							)}
						</View>

						<View style={styles.container}>
						
							<TouchableOpacity onPress={this.onAnswerTextPress}>
								<Text style={styles.answerTouchableStyles}>
									{ !show ? 'Answer' : 'Question' }
								</Text>
							</TouchableOpacity>
							
							<Button
								onPress={() => this.onAnswerButtonPress(true)}
								title={'Correct'}
							/>
							<Button
								onPress={() => this.onAnswerButtonPress(false)}
								title={'Incorrect'}
							/>
						</View>
					</View>
				)}

				{answered && (
					<View style={styles.container}>
						<Text>Yes!</Text>
						<Button
							onPress={() => this.onNextQuestionButtonPress()}
							title={'Next Question'}
						/>
					</View>
				)}


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
    return {
        currentDeck: flashCards[selectDeck],
        quiz
    }
}

const mapDispatchToProps = (dispatch => {
	return {
		showAnswer: (show) => dispatch(showAnswer(show)),
		increaseScore: (correct) => dispatch(increaseScore(correct))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizView)