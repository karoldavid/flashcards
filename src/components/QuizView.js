import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { lightPurp, red, white } from '../utils/colors'

class QuizView extends Component {

	onButtonPress = () => {
      console.log('Button Pressed')
    }

	render() {

		const { questions } = this.props.currentDeck

		console.log(questions)
		return (
			<View style={styles.container}>
				<Text style={styles.questionStyles}>{questions[0].question}</Text>
				<Text style={styles.answerStyles}>Answer</Text>
				<Button
					onPress={() => this.ButtonPress()}
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
  answerStyles: {
  	fontSize: 16,
  	fontWeight: 'bold',
  	color: red
  }
})

const mapStateToProps = (state) => {
	const { flashCards, selectDeck } = state
    return {
        currentDeck: flashCards[selectDeck]
        
    }
}

export default connect(mapStateToProps)(QuizView)