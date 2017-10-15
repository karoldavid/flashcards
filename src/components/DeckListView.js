import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, FlatList, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Deck from './Deck'

class DeckListView extends Component {

	renderItem({ item }) {

		const { title, questions } = item

		return (
			<ListItem
				key={title}
				title={title}
				subtitle={`${questions.length} card${questions.length > 1 ? 's' : ''}`}
			/>
		)
	}

	render() {
		//console.log(this.props)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = state => {
	return {
		flashCards: state.flashCards
	}
}

export default connect(mapStateToProps)(DeckListView)