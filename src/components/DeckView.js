import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightPurp, white } from '../utils/colors'
import Button from './Button'

class DeckView extends Component {

	onCardButtonPress = () => {
        const { navigation } = this.props
        
        navigation.navigate('AddCardView', { title: "Add Card" })
       // this.props.selectDeck(id)
       console.log("Button Pressed!")

    }

	onButtonPress = () => {
		console.log("Button Pressed!")
	}

	render() {
		const { params } = this.props.navigation.state;
		const { questions } = this.props.currentDeck

		return (
			<View style={styles.container}>
				<Text style={styles.deckTitle}>{params.title}</Text>
				<Text style={styles.deckContent}>{`${questions.length} card${questions.length > 1 ? 's' : ''}`}</Text>
				<Button
					onPress={() => this.onCardButtonPress()}
					title={'Add Card'}
				/>
				<Button
					onPress={() => this.onButtonPress()}
					title={'Start Quiz'}
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
  deckTitle: {
    paddingTop: 150,
    fontSize: 20,
    color: white
  },
  deckContent: {
  	fontSize: 16,
  	color: white
  }
});

const mapStateToProps = (state) => {
	const { flashCards, selectDeck } = state
    return {
        currentDeck: flashCards[selectDeck]
    }
}

export default connect(mapStateToProps)(DeckView)