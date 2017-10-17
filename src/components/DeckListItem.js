import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import selectDeck from '../actions'

class DeckListItem extends Component {

    render() {

        const { title, questions, navigation } = this.props

        return (
			<TouchableOpacity
                onPress={() => navigation.navigate(
                            'DeckView',
                            { title: title }
                        )}>
   				<ListItem
					key={title}
					title={title}
					subtitle={`${questions.length} card${questions.length > 1 ? 's' : ''}`}
				/>
            </TouchableOpacity>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log("state", state)
    console.log("ownProps", ownProps)

    return {
        state
    }
}

function matchDispatchToProps(dispatch) {
    return {
        selectDeck: (deckId) => dispatch(selectDeck(deckId))
    }
} 

export default connect(mapStateToProps, matchDispatchToProps)(DeckListItem)
