import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import DeckListView from './src/components/DeckListView'

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={createStore(reducers)}>
      		<DeckListView />
      	</Provider>
    )
  }
}