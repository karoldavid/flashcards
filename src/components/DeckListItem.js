import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import {
    selectDeck,
    setDeck
} from '../actions/DeckActions'
import {
    gray,
    lightGray,
    lightPurp,
    white
} from '../utils/colors'

class DeckListItem extends Component {

    touchableOpacityOnPress = () => {
        const { title, navigation } = this.props
        this.props.setDeck(title, function() {
            navigation.navigate('DeckView', { title: title })
        })
    }

    render() {
        const { title, questions} = this.props
        const { containerStyles, titleStyles, titleContainerStyles, subtitleStyles, subtitleContainerStyles } = styles

        return (
    		<TouchableOpacity
                onPress={this.touchableOpacityOnPress}>
       			<ListItem
                    containerStyle={containerStyles}
                    titleStyle={titleStyles}
                    titleContainerStyle={titleContainerStyles}
                    subtitleStyle={subtitleStyles}
                    subtitleContainerStyle={subtitleContainerStyles}
    				key={title}
    				title={title}
    				subtitle={`${questions.length} card${questions.length > 1 ? 's' : ''}`}
    			/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        backgroundColor: lightPurp,
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
    titleStyles: {
        fontSize: 28,
        color: white
    },
    titleContainerStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitleStyles: {
        fontSize: 16,
        color: lightGray
    },
    subtitleContainerStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

function matchDispatchToProps(dispatch) {
    return {
        setDeck: (title, callback) => dispatch(setDeck(title, callback))
    }
} 

export default connect(null, matchDispatchToProps)(DeckListItem)
