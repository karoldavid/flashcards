import {
	SHOW_ANSWER,
	INCREASE_SCORE,
	QUESTION_ANSWERED,
	NEXT_QUESTION,
	RESET_QUIZ
} from '../actions'

const quizLogic = {
	show: false,
	index: 0,
	score: 0,
	correct: null
}

export default function quiz(state = quizLogic, action) {
	switch(action.type) {
		case SHOW_ANSWER:
			return { ...state, show: action.payload }
		case INCREASE_SCORE: 
			const newScore = state.score
			newScore++
			return { ...state, score: action.payload ? newScore : state.score }
		case QUESTION_ANSWERED:
			return { ...state, correct: action.payload }
		case NEXT_QUESTION:
			const index = state.index + action.payload
			return { ...state, index: index }
		case RESET_QUIZ:
			return { ...state, ...quizLogic }
		default:
			return state
	}
} 