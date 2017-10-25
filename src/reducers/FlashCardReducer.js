import {
    ADD_DECK,
    ADD_CARD,
    SELECT_DECK
} from '../actions'
import initialFlashCards from './FlashCardList.json'

const cards = {
    flashCardsList: initialFlashCards,
    selected: null
}

export default function flashCards( state = cards, action ) {
        switch(action.type) {
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

