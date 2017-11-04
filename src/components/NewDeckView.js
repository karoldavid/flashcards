import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	saveDeck,
	setDeck
} from '../actions/DeckActions'
import {
	StyleSheet,
	KeyboardAvoidingView
} from 'react-native'
import {
	lightPurp
} from '../utils/colors'
import Button from './Button'
import DeckFormInput from './DeckFormInput'

class NewDeckView extends Component {

	state = {
		title: '',
		error: {
			title: false
		}
	}

	handleTextChange = (title) => {
		this.setState(() => ({
			title,
		}))
	}

	onSubmitButtonPress = () => {
		const { title } = this.state
		const { navigation, saveDeck, setDeck } = this.props

		if (title.length > 4) {
		
			saveDeck(title, function() {
				setDeck(title, function() {
					navigation.navigate('DeckView', { title: title })
				})
			})

			this.setState({
				title: ''
			})

  		} else {
			this.setState({
				error: {
					title: true,
				}
			})
		}
	}

	render() {
		const  { error, title } = this.state
		const { containerStyles } = styles

		return(
			<KeyboardAvoidingView behavior='padding' style={containerStyles}>
				
			    <DeckFormInput
					label={"What is the title of your new deck?"}
					placeholder={"type deck title here"}
					value={title}
					handleInputTextChange={this.handleTextChange}
					error={error.title}
				/>

			    <Button
					onPress={this.onSubmitButtonPress}
					title={'Submit'}
				/>

			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	containerStyles: {
    	flex: 1,
    	alignItems: 'center',
    	justifyContent: 'space-around',
    	backgroundColor: lightPurp,
    	margin: 5
    }
})

function mapDispatchToProps(dispatch) {
	return {
		saveDeck: (title, callback) => dispatch(saveDeck(title, callback)),
		setDeck: (title, callback) => dispatch(setDeck(title, callback))
	}
}

export default connect(null, mapDispatchToProps)(NewDeckView)