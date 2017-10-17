import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import DeckView from './DeckView'
import DeckListItem from './DeckListItem'

class DeckListView extends Component {

	renderItem = ({ item }) => {
		const { title, questions } = item
		const { navigation } = this.props

		return (
			<DeckListItem
				navigation={navigation}
				title={title}
				questions={questions}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { widht: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
	textStyle: {
		fontSize: 18
	}
})

const mapStateToProps = state => {
	return {
		flashCards: state.flashCards
	}
}

export default connect(mapStateToProps)(DeckListView)