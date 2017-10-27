export const SHOW_ANSWER = 'SHOW_ANSWER'
export const INCREASE_SCORE = 'INCREASE_SCORE'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const RESET_QUIZ = 'RESET_QUIZ'

export const showAnswer = (show) => {
	return {
		type: SHOW_ANSWER,
		payload: show
	}
}

export const increaseScore = (correct) => {
	return {
		type: INCREASE_SCORE,
		payload: correct
	}
}

export const questionAnswered = (answer) => {
	return {
		type: QUESTION_ANSWERED,
		payload: answer
	}
}

export const nextQuestion = (shuffle) => {
	return {
		type: NEXT_QUESTION,
		payload: shuffle
	}
}

export const resetQuiz = () => {
	return {
		type: RESET_QUIZ
	}
}