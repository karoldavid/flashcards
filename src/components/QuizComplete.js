import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, red, white, lightPurp } from "../utils/colors";
import Button from "./Button";

const QuizComplete = ({ finalScore, restartQuiz, backToDeck }) => {
	const { containerStyles, finalScoreStyles } = styles;
	return (
		<View style={containerStyles}>
			<View>
				<Text style={finalScoreStyles}>{finalScore}% Correct</Text>
			</View>
			<View>
				<Button onPress={() => restartQuiz()} title={"Restart Quiz"} />
				<Button onPress={() => backToDeck()} title={"Back to Deck"} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyles: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: lightPurp,
		margin: 5
	},
	finalScoreStyles: {
		paddingTop: 50,
		paddingBottom: 20,
		fontSize: 24,
		fontWeight: "bold",
		color: white
	}
});

export default QuizComplete;
