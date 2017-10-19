import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { selectDeck } from '../actions'
import { gray, lightGray, lightPurp, white } from '../utils/colors'

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
                    containerStyle={styles.containerStyle}
                    titleStyle={styles.titleStyle}
                    titleContainerStyle={styles.titleContainerStyle}
                    subtitleStyle={styles.subtitleStyle}
                    subtitleContainerStyle={styles.subtitleContainerStyle}
    				key={title}
    				title={title}
    				subtitle={`${questions.length} card${questions.length > 1 ? 's' : ''}`}
    			/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
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
    titleStyle: {
        fontSize: 28,
        color: white
    },
    titleContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitleStyle: {
        fontSize: 16,
        color: lightGray
    },
    subtitleContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

function matchDispatchToProps(dispatch) {
    return {
        selectDeck: (deckId) => dispatch(selectDeck(deckId))
    }
} 

export default connect(null, matchDispatchToProps)(DeckListItem)
