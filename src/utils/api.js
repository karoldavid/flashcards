import { AsyncStorage } from 'react-native'
import initialFlashCards from '../data/FlashCardsList.json'

const FLASHCARDS_QUIZ_STORAGE_KEY = 'FLASHCARDS:decks'

// getDecks: return all of the decks along with their titles, questions, and answers. 
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

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck(title) {
	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
	.then((results) => {
		const data = JSON.parse(results)
		return data[title]
	}).catch(() => {
		console.log('no data')
	})
}

// saveDeckTitle: take in a single title argument and add it to the decks. 
export function saveDeckTitle(title) {
	return AsyncStorage.mergeItem(FLASHCARDS_QUIZ_STORAGE_KEY, JSON.stringify({
		[title]: {
			title: title,
			questions: []
		}
	}))
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
export function addCardToDeck(title, card) {

}
