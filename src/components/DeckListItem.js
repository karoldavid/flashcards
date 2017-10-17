import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'

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

export default DeckListItem 
