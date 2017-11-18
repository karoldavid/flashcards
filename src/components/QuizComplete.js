import React from "react";
import { View, Text } from "react-native";
import styles from "../utils/styles";
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

export default QuizComplete;
