import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_DECK,
    ADD_CARD,
    SELECT_DECK,
    DELETE_DECK
} from '../actions/DeckActions'

const initialDecks = {
  deckList: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  selected: null
}

export default function decks( state = initialDecks, action ) {
        switch(action.type) {
            case FETCH_DATA:
              return {
                ...state,
                deckList: [],
                isFetching: true
              }
            case FETCH_DATA_SUCCESS:
              return {
                ...state,
                isFetching: false,
                deckList: action.data
              }
            case FETCH_DATA_FAILURE:
              return {
                ...state,
                isFetching: false,
                error: true
              }
            case SELECT_DECK:
                return { ...state, selected: state.deckList.filter((deck) => deck.title === action.payload.title)[0] }
            case ADD_DECK:
                const deck = {
                    title: action.payload,
                    questions: []
                }
                return { ...state, deckList: state.deckList.concat(deck) }
            case ADD_CARD:
                const currentDeck = state.deckList.filter((deck) => deck.title === action.title)[0]
                currentDeck.questions.push(action.question)
                return { ...state, deckList: state.deckList.map((deck) => deck.title === action.title ? currentDeck : deck) }
            case DELETE_DECK:
                  return state
            default:
                return state
        }
}