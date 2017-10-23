import { SHOW_ANSWER, INCREASE_SCORE } from '../actions'

const quizLogic = {
	show: false,
	index: 0,
	score: 0,
}

export default function quiz(state = quizLogic, action) {
	switch(action.type) {
		case SHOW_ANSWER:
			return { ...state, show: action.payload }

		case INCREASE_SCORE: 
			const score = state.score
			//console.log(score)
			console.log({ ...state, score: action.payload ? score++ : score })
			return { ...state, score: action.payload ? score++ : score }
		default:
			return state
	}
} 