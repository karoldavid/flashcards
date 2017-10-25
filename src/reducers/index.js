import { combineReducers } from 'redux'
import flashCards from './FlashCardReducer'
import selectDeck from './SelectionReducer'
import quiz from './QuizReducer'

export default combineReducers({
	flashCards,
	quiz
})

