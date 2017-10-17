import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'

class DeckListItem extends Component {

    render() {

    	console.log(this.props)

        return (
			<TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                            'DeckView',
                            { title: this.props.title }
                        )}>
   				<ListItem
					key={this.props.title}
					title={this.props.title}
					subtitle={`${this.props.questions.length} card${this.props.questions.length > 1 ? 's' : ''}`}
				/>
            </TouchableOpacity>
        )
    }
}

export default DeckListItem 
