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
	lightPurp,
	lightBrilliantBlueMagenta,
	white
} from '../utils/colors'
import Button from './Button'

class NewDeckView extends Component {

	state = {title: ''}

	handleTextChange = (title) => {
		this.setState(() => ({
			title
		}))
	}

	onSubmitButtonPress = () => {
		const { title } = this.state
		
		this.props.saveDeck(title)

		this.setState({
			title: ''
		})
		this.props.navigation.navigate('DeckListView')
	}


	render() {
		const  title = this.state.title
		const { params } = this.props.navigation.state
		const { containerStyles, titleStyles, inputStyles } = styles

		return(
			<KeyboardAvoidingView behavior='padding' style={containerStyles}>
				<Text style={titleStyles}>
					What is the title of your new deck?
				</Text>
				<TextInput
			        style={inputStyles}
			        placeholder="type deck title here"
			        value={title}
			        onChangeText={this.handleTextChange}
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
      color: white
   },
})

function mapDispatchToProps(dispatch) {
	return {
		saveDeck: (title) => dispatch(saveDeck(title))
	}
}

export default connect(null, mapDispatchToProps)(NewDeckView)