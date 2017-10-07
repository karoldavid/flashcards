import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class DeckListView extends Component {
	render() {
		return(
			<View style={styles.container} >
				<Text>DeckListView</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default DeckListView