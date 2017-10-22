import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { lightPurp, white } from '../utils/colors'

class QuizView extends Component {

	onButtonPress = () => {
      console.log('Button Pressed')
    }

	render() {
		

		return (
			<View style={styles.container}>
				<Text style={styles.questionStyles}>Question Text?</Text>
				<Text style={styles.answerStyles}>Answer Text</Text>
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
    fontSize: 20,
    color: white
  },
  answerStyles: {
  	fontSize: 16,
  	color: white
  }
})

export default connect()(QuizView)