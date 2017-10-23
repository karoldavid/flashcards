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
    	const { show } = this.props
    	this.props.showAnswer(!show)
    }

	render() {

		const { questions } = this.props.currentDeck
		const { show } = this.props

		return (
			<View style={styles.container}>
				<Text style={styles.questionStyles}>{questions[0].question}</Text>
				<TouchableOpacity onPress={this.onAnswerTextPress}>
					<Text style={styles.answerTouchableStyles}>
						Answer
					</Text>
				</TouchableOpacity>

				{ show === true && (
					<Text style={styles.answerStyles}>
						{questions[0].answer}
					</Text>
				)}
				
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
    paddingTop: 150,
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
  	fontSize: 16,
  	fontWeight: 'bold',
  	color: white,
  	paddingTop: 20,
  	paddingLeft: 40
  }
})

const mapStateToProps = (state) => {
	const { flashCards, selectDeck, quiz } = state

    return {
        currentDeck: flashCards[selectDeck],
        show: quiz.show
    }
}

const mapDispatchToProps = (dispatch => {
	return {
		showAnswer: (show) => dispatch(showAnswer(show))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizView)