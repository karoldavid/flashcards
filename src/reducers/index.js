import { combineReducers } from 'redux'
import flashCards from './FlashCardReducer'
import quiz from './QuizReducer'

export default combineReducers({
	flashCards,
	quiz
})

