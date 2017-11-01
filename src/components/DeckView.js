import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import {
	lightGray,
	lightPurp,
	red,
	white
} from '../utils/colors'
import Button from './Button'

class DeckView extends Component {

	state = { gotToQuiz: false }

	componentDidMount() {
		const length = this.props.currentDeck.questions.length;
		this.setState({
			goToQuiz: length > 0 ? true : false
		})
	}

	onCardButtonPress = () => {
        const { navigation } = this.props
	    navigation.navigate('NewQuestionView', { title: "Add a Card" })
    }

	onQuizButtonPress = () => {
		const { navigation } = this.props
	    navigation.navigate('QuizView', { title: "Start Quiz" })
	}

	render() {
		const { params } = this.props.navigation.state;
		const { questions } = this.props.currentDeck
		const { goToQuiz } = this.state
		const { containerStyles, deckStyles, deckContentStyles, deckTitleStyles, infoStyles } = styles

		return (
			<View style={containerStyles}>

				<View style={deckStyles}>
					<Text style={deckTitleStyles}>{params.title}</Text>
					<Text style={deckContentStyles}>{`${questions.length} card${questions.length > 1 ? 's' : ''}`}</Text>
				</View>

				{ !goToQuiz && (
					<Text style={infoStyles}>
						To start a quiz add a card to the deck.
					</Text>
				)}

				{ goToQuiz && (
					<Button
						onPress={() => this.onQuizButtonPress()}
						title={'Start Quiz'}
					/>
				)}

				<Button
					onPress={() => this.onCardButtonPress()}
					title={'Add Card'}
				/>

			</View>
		)
	}
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightPurp,
    margin: 5
  },
  deckStyles: {
  	flex: 1,
  	alignItems: 'center'
  },
  deckTitleStyles: {
    paddingTop: 150,
    fontSize: 28,
    color: white
  },
  deckContentStyles: {
  	fontSize: 16,
  	color: lightGray
  },
  infoStyles: {
  	paddingTop: 50,
  	fontSize: 16,
  	color: red
  }
})

const mapStateToProps = (state) => {
    return {
        currentDeck: state.decks.selected
        
    }
}

export default connect(mapStateToProps)(DeckView)