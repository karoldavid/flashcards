import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { lightGray, black, white, lightPurp } from "../utils/colors";
import Button from "./Button";

const DeckTitle = ({ deckTitle, questionsLength = null }) => {
	const { deckTitleStyles, deckContentStyles } = styles;
	return (
		<View>
			<Text style={deckTitleStyles}>{deckTitle}</Text>
			{questionsLength !== null && (
				<Text style={deckContentStyles}>
					{`${questionsLength} card${
						questionsLength !== 1 ? "s" : ""
					}`}
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	deckTitleStyles: {
		fontSize: 28,
		textAlign: "center",
		color: white
	},
	deckContentStyles: {
		fontSize: 16,
		textAlign: "center",
		color: lightGray
	}
});

export default DeckTitle;
