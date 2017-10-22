export const SELECT_DECK = 'SELECT_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

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

export const addCard = (question, index) => {
	return {
		type: ADD_CARD,
		question,
		index
	}
}