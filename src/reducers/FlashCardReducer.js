import { ADD_DECK, ADD_CARD } from '../actions'

const initialFlashCards = [{
        title: 'React',
        id: '0',
        questions: [{
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    }, {
        title: 'JavaScript',
        id: 1,
        questions: [{
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }]
    }/*, {
        title: 'JavaScript',
        id: 2,
        questions: [{
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }]
    },{
        title: 'React',
        id: '3',
        questions: [{
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },{
        title: 'React',
        id: '4',
        questions: [{
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },{
        title: 'React',
        id: '5',
        questions: [{
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    }*/]

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

