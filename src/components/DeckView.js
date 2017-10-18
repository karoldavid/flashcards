import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { lightPurp, white } from '../utils/colors'

class DeckView extends Component {
	render() {
		const { params } = this.props.navigation.state;
		const { questions } = this.props.currentDeck

		return (
			<View style={styles.container}>
				<Text style={styles.deckTitle}>{params.title}</Text>
				<Text style={styles.deckContent}>{`${questions.length} card${questions.length > 1 ? 's' : ''}`}</Text>
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
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    fontSize: 18,
    color: white
  },
  deckContent: {
  	flex: 1,
    flexDirection: 'row',
  	fontSize: 16,
  	color: white
  },
  deckAction: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',

  }
});

const mapStateToProps = (state) => {
	const { flashCards, selectDeck } = state
    return {
        currentDeck: flashCards[selectDeck]
    }
}

export default connect(mapStateToProps)(DeckView)