import React from "react";
import { StyleSheet } from "react-native";
import { black, lightGray, lightPurp, red, white } from "./colors";

const containerStyles = {
	flex: 1,
	justifyContent: "space-around",
	borderWidth: 1,
	borderRadius: 2,
	borderColor: lightGray,
	backgroundColor: lightPurp,
	borderBottomWidth: 0,
	shadowColor: black,
	shadowOffset: { widht: 0, height: 2 },
	shadowOpacity: 0.1,
	shadowRadius: 2,
	elevation: 1,
	marginLeft: 5,
	marginRight: 5,
	marginTop: 10
};

const infoTextStyles = {
	flex: 1,
	color: white,
	textAlign: "center"
};

const sectionStyles = {
	padding: 5,
	backgroundColor: white,
	justifyContent: "center",
	backgroundColor: lightPurp
};

const deckTitleStyles = {
	fontSize: 28,
	color: white,
	textAlign: "center"
};

const deckContentStyles = {
	fontSize: 16,
	color: lightGray,
	textAlign: "center"
};

const infoStyles = {
	fontSize: 16,
	textAlign: "center",
	color: red,
	margin: 10
};

const titleStyles = {
	fontSize: 20,
	color: white
};

const subtitleStyles = {
	fontSize: 16,
	color: lightGray
};

const subtitleContainerStyles = {
	flex: 1,
	alignItems: "flex-start",
	justifyContent: "center"
};

const arrowStyles = {
	paddingLeft: 20,
	paddingRight: 20
};

const finalScoreStyles = {
	paddingTop: 50,
	paddingBottom: 20,
	fontSize: 24,
	fontWeight: "bold",
	textAlign: "center",
	color: white
};

const questionStyles = {
	paddingTop: 20,
	paddingBottom: 20,
	fontSize: 24,
	fontWeight: "bold",
	color: white,
	textAlign: "center"
};

const answerTouchableStyles = {
	fontSize: 16,
	fontWeight: "bold",
	color: red
};

const answerContainerStyles = {
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: lightPurp,
	margin: 5
};

const answerStyles = {
	paddingTop: 20,
	paddingBottom: 20,
	fontSize: 24,
	fontWeight: "bold",
	color: white,
	textAlign: "center"
};

const answerCorrectStyles = {
	paddingTop: 50,
	paddingBottom: 20,
	fontSize: 24,
	fontWeight: "bold",
	textAlign: "center",
	color: white
};

const cardsLeftStyles = {
	fontSize: 16,
	fontWeight: "bold",
	textAlign: "center",
	color: lightGray
};

const styles = StyleSheet.create({
	containerStyles,
	infoTextStyles,
	sectionStyles,
	deckContentStyles,
	deckTitleStyles,
	infoStyles,
	titleStyles,
	subtitleStyles,
	subtitleContainerStyles,
	arrowStyles,
	finalScoreStyles,
	questionStyles,
	answerStyles,
	answerTouchableStyles,
	answerCorrectStyles,
	answerContainerStyles,
	cardsLeftStyles
});

export default styles;
