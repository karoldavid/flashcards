import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_DECK,
    ADD_CARD,
    SELECT_DECK
} from '../actions/FlashCardActions'

const initialFlashCards = {
  flashCardsList: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  selected: null
}

export default function flashCards( state = initialFlashCards, action ) {
        switch(action.type) {
            case FETCH_DATA:
              return {
                ...state,
                flashCardsList: [],
                isFetching: true
              }
            case FETCH_DATA_SUCCESS:
              return {
                ...state,
                isFetching: false,
                flashCardsList: action.data
              }
            case FETCH_DATA_FAILURE:
              return {
                ...state,
                isFetching: false,
                error: true
              }
            case SELECT_DECK:
                return { ...state, selected: state.flashCardsList.filter((card) => card.title === action.payload)[0] }
            case ADD_DECK:
                const deck = {
                    title: action.payload,
                    questions: []
                }
                return { ...state, flashCardsList: state.flashCardsList.concat(deck) }
            case ADD_CARD:
                const card = state.flashCardsList.filter((card) => card.title === action.title)[0]
                card.questions.push(action.question)
                return { ...state, flasCardsList: state.flashCardsList.map((c) => c.title === action.title ? card : c) }
            default:
                return state
        }
}