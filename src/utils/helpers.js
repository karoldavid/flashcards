export function convertObjectToArray(results) {
	const data = JSON.parse(results)
	const keys = Object.keys(data)
	let deckArray = []

	keys.map((key) => {
		deckArray.push(data[key])
	})

	return deckArray
}