import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { View, Platform } from 'react-native'
import { purple, white } from './src/utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckListView from './src/components/DeckListView'


const Tabs = TabNavigator({
  Main: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  }
},{
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
})

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={createStore(reducers)}>
      		<View style={{flex: 1}}>
          		<MainNavigator />
        	</View>
      	</Provider>
    )
  }
}