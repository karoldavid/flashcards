import React from 'react'
import { Provider } from 'react-redux'
import store from './src/utils/store'
import {
  View,
  StyleSheet
} from 'react-native'
import { 
  Tabs,
  MainNavigator
} from './src/utils/navigation'

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
      		<View style={styles.containerStyles}>
          		<MainNavigator />
        	</View>
      	</Provider>
    )
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1
  }
})