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
}, {
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
}]

export default function flashCards( state = initialFlashCards, action ) {
	return state
}

