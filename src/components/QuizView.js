import React, { Component } from 'react'
import { View, Text } from 'react-native'

class QuizView extends Component {

	render() {
		const { params } = this.props.navigation.state;

		return(
			<View>
				<Text style={{ fontSize: 18 }}>
					{params.title}
				</Text>
			</View>
		)
	}
}

export default QuizView