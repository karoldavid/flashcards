import {
	SHOW_ANSWER,
	INCREASE_SCORE,
	QUESTION_ANSWERED,
	NEXT_QUESTION,
	RESET_QUIZ
} from "./types";

export const showAnswer = show => {
	return {
		type: SHOW_ANSWER,
		payload: show
	};
};

export const increaseScore = correct => {
	return {
		type: INCREASE_SCORE,
		payload: correct
	};
};

export const questionAnswered = answer => {
	return {
		type: QUESTION_ANSWERED,
		payload: answer
	};
};

export const nextQuestion = shuffle => {
	return {
		type: NEXT_QUESTION,
		payload: shuffle
	};
};

export const resetQuiz = () => {
	return {
		type: RESET_QUIZ
	};
};
