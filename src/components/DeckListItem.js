import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { selectDeck } from '../actions'

class DeckListItem extends Component {

    touchableOpacityOnPress = () => {
        const { title, questions, id, navigation } = this.props
        navigation.navigate('DeckView', { title: title })
        this.props.selectDeck(id)
    }

    render() {

        const { title, questions} = this.props

        return (
			<TouchableOpacity
                onPress={this.touchableOpacityOnPress}>
   				<ListItem
					key={title}
					title={title}
					subtitle={`${questions.length} card${questions.length > 1 ? 's' : ''}`}
				/>
            </TouchableOpacity>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        selectDeck: (deckId) => dispatch(selectDeck(deckId))
    }
} 

export default connect(null, matchDispatchToProps)(DeckListItem)
