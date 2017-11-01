import React from 'react'
import { Provider } from 'react-redux'
import store from './src/utils/store'
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  blue,
  lightPurp,
  purple,
  white
} from './src/utils/colors'
import {
  FontAwesome, Ionicons
} from '@expo/vector-icons'
import DeckListView from './src/components/DeckListView'
import DeckView from './src/components/DeckView'
import NewDeckView from './src/components/NewDeckView'
import NewQuestionView from './src/components/NewQuestionView'
import QuizView from './src/components/QuizView'


const Tabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Deck List View',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'New Deck View',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  }
},{
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : blue,
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
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck View',
      headerTintColor: white,
      headerStyle: {
          backgroundColor: blue
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: 'Add Question',
      headerTintColor: white,
      headerStyle: {
          backgroundColor: blue
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
          backgroundColor: blue
      }
    }
  }
})

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