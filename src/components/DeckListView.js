import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import DeckView from './DeckView'
import DeckListItem from './DeckListItem'
import { selectDeck } from '../actions'

class DeckListView extends Component {

	componentDidMount() {
		//this.props.deselectDeck(null)
	}

	renderItem = ({ item }) => {
		const { title, questions} = item
		const { navigation } = this.props

		return (
			<DeckListItem
				navigation={navigation}
				title={title}
				questions={questions}
				key={title}
			/>
		)
	}

	render() {
		return(
			<List>
				<FlatList
					data={this.props.flashCardsList}
					renderItem={this.renderItem}
				/>
			</List>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		flashCardsList: state.flashCards.flashCardsList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deselectDeck: () => dispatch(selectDeck(null))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView)