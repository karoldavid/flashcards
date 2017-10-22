import { ADD_DECK, ADD_CARD } from '../actions'
import initialFlashCards from './FlashCardList.json'

export default function flashCards( state = initialFlashCards, action ) {

        switch(action.type) {
            case ADD_DECK:
                const deck = {
                    title: action.payload,
                    id: state.length,
                    questions: []
                }

                return state.concat(deck)
            case ADD_CARD:
                const card = state.filter((card) => card.id === action.index)[0]
                card.questions.push(action.question)
                return state.map((c) => c.id === action.index ? card : c)
            default:
                return state
        }
}

