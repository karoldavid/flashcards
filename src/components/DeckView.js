import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text } from 'react-native'

class DeckView extends Component {
	render() {
		const { params } = this.props.navigation.state;
		
		return (
			<View>
				<Text style={styles.textStyles}>{params.title}</Text>
			</View>
		)
	}
}

const styles = {
	textStyles: {
		fontSize: 18
	}
}

export default DeckView