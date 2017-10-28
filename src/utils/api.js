import { AsyncStorage } from 'react-native'
import initialFlashCards from '../data/FlashCardsList.json'

const FLASHCARDS_QUIZ_STORAGE_KEY = 'FLASHCARDS:cards'

// getDecks: return all of the decks along with their titles, questions, and answers. 
export function getDecks() {

	//AsyncStorage.removeItem(FLASHCARDS_QUIZ_STORAGE_KEY)

	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
      .then((results) => {

      	if (results === null) {
   	 		AsyncStorage.setItem(FLASHCARDS_QUIZ_STORAGE_KEY, JSON.stringify(initialFlashCards));
      	}

      	return JSON.parse(results)
       
     }).catch(() => {
      	console.log('no data')
     })
}

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck(id) {

}

// saveDeckTitle: take in a single title argument and add it to the decks. 
export function saveDeckTitle(title) {

}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
export function addCardToDeck(title, card) {

}