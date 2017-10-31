import { AsyncStorage } from 'react-native'
import initialFlashCards from '../data/FlashCardsList.json'

const FLASHCARDS_QUIZ_STORAGE_KEY = 'FLASHCARDS:decks'

export function getDecks() {
    
   AsyncStorage.removeItem(FLASHCARDS_QUIZ_STORAGE_KEY)

	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
      .then((results) => {

      	if (results === null) {

	      	initialFlashCards.map((card) => {
	      		AsyncStorage.mergeItem(FLASHCARDS_QUIZ_STORAGE_KEY, JSON.stringify({
	      		[card.title]: card }))
	      	})

	      	return initialFlashCards
	    }

	    const data = JSON.parse(results)

	    let deckArray = []
	    const keys = Object.keys(data)

	    keys.map((key) => {
	    	deckArray.push(data[key])
	    })

      	return deckArray
       
     }).catch(() => {
      	console.log('no data')
     })
}

export function getDeck(title) {
	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
	.then((results) => {
		const data = JSON.parse(results)
		return data[title]
	}).catch(() => {
		console.log('no data')
	})
}

export function saveDeckTitle(title) {
	return AsyncStorage.mergeItem(FLASHCARDS_QUIZ_STORAGE_KEY, JSON.stringify({
		[title]: {
			title: title,
			questions: []
		}
	})).catch(() => {
		console.log('error')
	})
}

export function addCardToDeck(title, card) {
	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
	.then((results) => {
		const data = JSON.parse(results)
		let deck = data[title]
		deck.questions.push(card)
		return AsyncStorage.mergeItem(FLASHCARDS_QUIZ_STORAGE_KEY, JSON.stringify({
			[title]: deck
		 }))
	}).catch(() => {
		console.log('error')
	})
}