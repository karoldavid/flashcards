import {
	SHOW_ANSWER,
	INCREASE_SCORE,
	QUESTION_ANSWERED,
	NEXT_QUESTION
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
			const score = state.score
			return { ...state, score: action.payload ? score++ : score }
		case QUESTION_ANSWERED:
			return { ...state, correct: action.payload }
		case NEXT_QUESTION:
			const index = state.index + action.payload
			return { ...state, index: index }
		default:
			return state
	}
} 