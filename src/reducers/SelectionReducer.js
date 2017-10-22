import { SELECT_DECK } from '../actions'

//function selectDeck(state = null, action) {
function selectDeck(state = 1, action) {
	switch(action.type) {
		case SELECT_DECK:
			return action.payload
		default:
			return state
	}
}

export default selectDeck
