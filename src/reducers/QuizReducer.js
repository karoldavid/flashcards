import { SHOW_ANSWER } from '../actions'
import { showAnswer } from '../reducers/QuizReducer'

const quizLogic = {
	show: false,
}

export default function quiz(state = quizLogic, action) {
	console.log(action)

	//console.log("state:", state)
	switch(action.type) {
		case SHOW_ANSWER:
			return { show: action.payload }
		default:
			return state
	}
} 