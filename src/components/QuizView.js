import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { lightPurp, red, white } from '../utils/colors'
import {
	showAnswer,
	increaseScore,
	questionAnswered,
	nextQuestion,
	resetQuiz
} from '../actions/QuizActions'
import {
	setLocalNotification,
	clearLocalNotification,
	timing
} from '../utils/notifications'

class QuizView extends Component {

	onAnswerButtonPress = (correct) => {
		const { increaseScore, questionAnswered } = this.props

		increaseScore(correct)
		questionAnswered(correct)
    }

    onAnswerTextPress = () => {
    	const { show } = this.props.quiz
    	this.props.showAnswer(!show)
    }

    onNextQuestionButtonPress = () => {
    	const { nextQuestion, questionAnswered } = this.props
    	
    	nextQuestion()
    	questionAnswered(null)
    }

    onRestartQuizButtonPress = () => {
    	this.props.resetQuiz()
    }

    onBackToDeckButtonPress = () => {
    	const { navigation, resetQuiz } = this.props
    	resetQuiz()
    	navigation.goBack()
	}

    showPercentCorrect = () => {
    	const { score } = this.props.quiz
    	const { questions } = this.props.currentDeck
    	const result = score / questions.length * 100
    	return result
    }

    setNotification = () => {
    	clearLocalNotification()
    		.then(setLocalNotification(timing))
    }

	render() {

		const { questions } = this.props.currentDeck
		const { show, index, correct, score } = this.props.quiz

		if (index === questions.length - 1 && correct) this.setNotification()

		return (
			<View style={styles.container}>
				<Text style={styles.cardsLeftStyles}>{index + 1}/{questions.length}</Text>

				{correct === null && (
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

				{correct !== null && (
					<View style={styles.container}>
						<Text style={styles.answerCorrectStyles}>{correct ? 'YES!' : 'NO!'}</Text>
						{index !== questions.length - 1 && (
							<Button
								onPress={() => this.onNextQuestionButtonPress()}
								title={'Next Question'}
							/>
						)}
						{index === questions.length - 1 && (
							<View style={styles.container}>
								
								<Text style={styles.finalScoreStyles}>{this.showPercentCorrect()}% Correct</Text>
								<Button
									onPress={() => this.onRestartQuizButtonPress()}
									title={'Restart Quiz'}
								/>
								<Button
									onPress={() => this.onBackToDeckButtonPress()}
									title={'Back to Deck'}
								/>
							</View>
						)}
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
  answerCorrectStyles: {
  	paddingTop: 50,
  	paddingBottom: 20,
  	fontSize: 24,
  	fontWeight: 'bold',
  	color: white
  },
  finalScoreStyles: {
  	paddingTop: 50,
  	paddingBottom: 20,
  	fontSize: 24,
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
	const { decks, quiz } = state
    return {
        currentDeck: decks.selected,
        quiz
    }
}

const mapDispatchToProps = (dispatch => {
	return {
		showAnswer: (show) => dispatch(showAnswer(show)),
		increaseScore: (correct) => dispatch(increaseScore(correct)),
		questionAnswered: (answer) => dispatch(questionAnswered(answer)),
		nextQuestion: () => dispatch(nextQuestion(1)),
		resetQuiz: () => dispatch(resetQuiz())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizView)