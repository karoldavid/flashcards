import { AsyncStorage } from "react-native";
import initialDecks from "../data/DeckList.json";

const FLASHCARDS_QUIZ_STORAGE_KEY = "FLASHCARDS:decks";

function convertObjectToArray(results) {
	const data = JSON.parse(results);
	const keys = Object.keys(data);
	let deckArray = [];

	keys.map(key => {
		deckArray.push(data[key]);
	});

	return deckArray;
}

function writeInitialDecksToAsyncStorage(decks) {
	decks.map(deck => {
		AsyncStorage.mergeItem(
			FLASHCARDS_QUIZ_STORAGE_KEY,
			JSON.stringify({
				[deck.title]: deck
			})
		);
	});
}

export function getDecks() {
	// AsyncStorage.removeItem(FLASHCARDS_QUIZ_STORAGE_KEY)

	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
		.then(results => {
			if (results === null) {
				writeInitialDecksToAsyncStorage(initialDecks);
				return initialDecks;
			}

			return convertObjectToArray(results);
		})
		.catch(() => {
			console.log("no data");
		});
}

export function getDeck(title) {
	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
		.then(results => {
			const data = JSON.parse(results);
			return data[title];
		})
		.catch(() => {
			console.log("no data");
		});
}

export function saveDeckTitle(title) {
	return AsyncStorage.mergeItem(
		FLASHCARDS_QUIZ_STORAGE_KEY,
		JSON.stringify({
			[title]: {
				title: title,
				questions: []
			}
		})
	).catch(() => {
		console.log("error");
	});
}

export function addCardToDeck(title, card) {
	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY)
		.then(results => {
			const data = JSON.parse(results);
			let deck = data[title];
			deck.questions.push(card);
			return AsyncStorage.mergeItem(
				FLASHCARDS_QUIZ_STORAGE_KEY,
				JSON.stringify({
					[title]: deck
				})
			);
		})
		.catch(() => {
			console.log("error");
		});
}

export function removeDeck(title) {
	return AsyncStorage.getItem(FLASHCARDS_QUIZ_STORAGE_KEY).then(results => {
		const data = JSON.parse(results);
		data[title] = undefined;
		delete data[title];
		AsyncStorage.setItem(FLASHCARDS_QUIZ_STORAGE_KEY, JSON.stringify(data));
	});
}
