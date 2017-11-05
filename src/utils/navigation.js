import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'
import {
  blue,
  lightPurp,
  purple,
  white
} from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import DeckListView from '../components/DeckListView'
import DeckView from '../components/DeckView'
import NewDeckView from '../components/NewDeckView'
import NewQuestionView from '../components/NewQuestionView'
import QuizView from '../components/QuizView'

export const Tabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  }
},{
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: blue,
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

export const MainNavigator = StackNavigator({
  Home: {
   screen: Tabs
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
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
      headerTintColor: white,
      headerStyle: {
          backgroundColor: blue
      }
    }
  }
})