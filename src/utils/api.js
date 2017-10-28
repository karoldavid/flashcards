import { AsyncStorage } from 'react-native'
import initialFlashCards from '../data/FlashCardsList.json'

const FLASHCARDS_QUIZ_STORAGE_KEY = 'FLASHCARDS:decks'

// getDecks: return all of the decks along with their titles, questions, and answers. 
export function getDecks() {

	AsyncStorage.removeItem(FLASHCARDS_QUIZ_STORAGE_KEY)

	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
      .then((results) => {

      	if (results === null) {
   	 		AsyncStorage.setItem(FLASHCARDS_QUIZ_STORAGE_KEY, JSON.stringify(initialFlashCards))
   	 		return initialFlashCards
      	}

      	return JSON.parse(results)
       
     }).catch(() => {
      	console.log('no data')
     })
}

const TEST_KEY = 'TEST:test'

export function getAll() {
    
    //AsyncStorage.removeItem(TEST_KEY)

	return AsyncStorage.getItem(TEST_KEY)
      .then((results) => {
      	if (results === null) {

      		//AsyncStorage.setItem(TEST_KEY)

	      	initialFlashCards.map((card) => {
	      		//console.log(card)

	      		AsyncStorage.mergeItem(TEST_KEY, JSON.stringify({
	      		[card.title]: card }))
	      	})
	    }

		console.log(JSON.parse(results))

      	return JSON.parse(results)
       
     }).catch(() => {
      	console.log('no data')
     })

}

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck(id) {
	return AsyncStorage.getItem(TEST_KEY)
	.then((results) => {
		const data = JSON.parse(results)
		return data[id]
	}).catch(() => {
		console.log('no data')
	})
}

// saveDeckTitle: take in a single title argument and add it to the decks. 
export function saveDeckTitle(title) {

}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
export function addCardToDeck(title, card) {

}

// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }