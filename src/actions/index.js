export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const SELECT_DECK = 'SELECT_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const SHOW_ANSWER = 'SHOW_ANSWER'
export const INCREASE_SCORE = 'INCREASE_SCORE'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const RESET_QUIZ = 'RESET_QUIZ'

import getFlashCards from '../utils/api'

export function getData() {
  return {
    type: FETCH_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCH_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getFlashCards()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export const selectDeck = (deckId) => {
	return {
		type: SELECT_DECK,
		payload: deckId
	}
}

export const addDeck = (title) => {
	return {
		type: ADD_DECK,
		payload: title
	}
}

export const addCard = (question, title) => {
	return {
		type: ADD_CARD,
		question,
		title
	}
}

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