import { combineReducers } from 'redux'
import flashCards from './FlashCardReducer'
import selectDeck from './SelectionReducer'

export default combineReducers({
	flashCards,
	selectDeck
})

