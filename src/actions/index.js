export const SELECT_DECK = 'SELECT_DECK'
export const ADD_DECK = 'ADD_DECK'

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