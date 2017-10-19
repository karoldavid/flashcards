import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import DeckView from './DeckView'
import DeckListItem from './DeckListItem'

class DeckListView extends Component {

	renderItem = ({ item }) => {
		const { title, questions, id } = item
		const { navigation } = this.props

		return (
			<DeckListItem
				navigation={navigation}
				title={title}
				questions={questions}
				id={id}
			/>
		)
	}

	render() {
		return(
			<List>
				<FlatList
					data={this.props.flashCards}
					renderItem={this.renderItem}
				/>
			</List>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		flashCards: state.flashCards
	}
}

export default connect(mapStateToProps)(DeckListView)