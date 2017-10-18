import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text } from 'react-native'

class DeckView extends Component {
	render() {
		const { params } = this.props.navigation.state;
		const { questions } = this.props.currentDeck

		return (
			<View>
				<Text style={styles.textStyles}>{params.title}</Text>
				<Text>{`${questions.length} card${questions.length > 1 ? 's' : ''}`}</Text>
			</View>
		)
	}
}

const styles = {
	textStyles: {
		fontSize: 18
	}
}

const mapStateToProps = (state) => {
    return {
        currentDeck: state.flashCards[state.selectDeck]
    }
}

export default connect(mapStateToProps)(DeckView)