import React from 'react'
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native'
import {
	blue,
	red,
	white,
	lightPurp
} from '../utils/colors'
import Button from './Button'

const QuizComplete = ({ finalScore, restartQuiz, backToDeck }) => {
	return(
		<View style={styles.container}>
			<Text style={styles.finalScoreStyles}>{finalScore}% Correct</Text>
			<Button
				onPress={() => restartQuiz()}
				title={'Restart Quiz'}
			/>
			<Button
				onPress={() => backToDeck()}
				title={'Back to Deck'}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightPurp,
    margin: 5
  },
  finalScoreStyles: {
  	paddingTop: 50,
  	paddingBottom: 20,
  	fontSize: 24,
  	fontWeight: 'bold',
  	color: white
  }
})

export default QuizComplete