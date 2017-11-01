import {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck
} from '../utils/api'

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const SELECT_DECK = 'SELECT_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'


export function getData() {
  return {
    type: FETCH_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
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
    getDecks()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export const selectDeck = (deck) => {
  //console.log(deck)
	return {
		type: SELECT_DECK,
		payload: deck
	}
}

export const setDeck = (title, callback) => {
  return (dispatch) => {
    getDeck(title)
      .then((deck) => dispatch(selectDeck(deck)))
      .then(() => callback())
      .catch((err) => console.log('err:', err))
  }
}

export const addDeck = (title) => {
	return {
		type: ADD_DECK,
		payload: title
	}
}

export const saveDeck = (title) => dispatch => {
  saveDeckTitle(title)
  .then(() => dispatch(addDeck(title)))
}

export const addCard = (title, question) => {
	return {
		type: ADD_CARD,
		question,
		title
	}
}

export const saveCard = (title, card, callback) => dispatch => {
  addCardToDeck(title, card)
  .then(() => dispatch(addCard(title, card)))
  .then(() => callback())
  .catch((err) => console.log('err:', err))
}