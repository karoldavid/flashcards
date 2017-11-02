import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDeck } from '../actions/DeckActions'
import {
	Text,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView
} from 'react-native'
import {
	FormInput,
	FormValidationMessage
} from 'react-native-elements'
import {
	lightPurp,
	lightBrilliantBlueMagenta,
	white
} from '../utils/colors'
import Button from './Button'

class NewDeckView extends Component {

	state = {
		title: '',
		error: false
	}

	handleTextChange = (title) => {
		this.setState(() => ({
			title
		}))
	}

	onSubmitButtonPress = () => {
		const { title } = this.state

		if (title.length > 4) {
		
			this.props.saveDeck(title)

			this.setState({
				title: '',
				error: false
			})
			this.props.navigation.navigate('DeckListView')
		} else {
			this.setState({
				error: true
			})
		}
	}


	render() {
		const  { error, title } = this.state
		const { params } = this.props.navigation.state
		const { containerStyles, titleStyles, inputStyles } = styles

		return(
			<KeyboardAvoidingView behavior='padding' style={containerStyles}>
				<Text style={titleStyles}>
					What is the title of your new deck?
				</Text>
	
				<FormInput
			        style={inputStyles}
			        placeholder="type deck title here"
			        value={title}
			        onChangeText={this.handleTextChange}
			        shake={error}
			    />
	
			    <FormValidationMessage>{error && title.length < 5 ? 'Enter at least 5 letters' : ''  }</FormValidationMessage>

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
    	justifyContent: 'center',
    	backgroundColor: lightPurp,
    	margin: 5
    },
    titleStyles: {
    	fontSize: 18,
    	color: white
    },
    inputStyles: {
      margin: 15,
      height: 40,
      width: 200,
      borderColor: lightBrilliantBlueMagenta,
      borderWidth: 1,
      color: white,
      textAlign: 'center',
   },
})

function mapDispatchToProps(dispatch) {
	return {
		saveDeck: (title) => dispatch(saveDeck(title))
	}
}

export default connect(null, mapDispatchToProps)(NewDeckView)