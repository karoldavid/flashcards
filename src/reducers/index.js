import { combineReducers } from 'redux'
import decks from './DeckReducer'
import quiz from './QuizReducer'

export default combineReducers({
	decks,
	quiz
})

