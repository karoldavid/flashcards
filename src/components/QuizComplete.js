import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, red, white, lightPurp } from "../utils/colors";
import Button from "./Button";

const QuizComplete = ({ finalScore, restartQuiz, backToDeck }) => {
	const { finalScoreStyles } = styles;
	return (
		<View>
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
	finalScoreStyles: {
		paddingTop: 50,
		paddingBottom: 20,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		color: white
	}
});

export default QuizComplete;
