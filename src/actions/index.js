export const SELECT_DECK = 'SELECT_DECK'

export const selectDeck = (deckId) => {
	return {
		type: SELECT_DECK,
		payload: deckId
	}
}