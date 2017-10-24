import { SHOW_ANSWER, INCREASE_SCORE, QUESTION_ANSWERED } from '../actions'

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
		default:
			return state
	}
} 