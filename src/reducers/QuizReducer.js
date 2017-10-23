import { SHOW_ANSWER } from '../actions'
import { showAnswer } from '../reducers/QuizReducer'

const quizLogic = {
	show: false,
	index: 0
}

export default function quiz(state = quizLogic, action) {
	console.log(state)
	switch(action.type) {
		case SHOW_ANSWER:
			return { ...state, show: action.payload }
		default:
			return state
	}
} 