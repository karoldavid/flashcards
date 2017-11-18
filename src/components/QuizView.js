import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "../utils/styles";
import {
	showAnswer,
	increaseScore,
	questionAnswered,
	nextQuestion,
	resetQuiz
} from "../actions";
import QuizComplete from "./QuizComplete";
import Button from "./Button";
import DeckTitle from "./DeckTitle";
import {
	setLocalNotification,
	clearLocalNotification,
	timing
} from "../utils/notifications";
import ArrowBack from "./ArrowBack";

class QuizView extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: `Quiz ${navigation.state.params.deck}`,
		headerLeft: <ArrowBack onPress={() => navigation.goBack()} />
	});

	onAnswerButtonPress = correct => {
		const { increaseScore, questionAnswered } = this.props;

		increaseScore(correct);
		questionAnswered(correct);
	};

	onAnswerTextPress = () => {
		const { show } = this.props.quiz;
		this.props.showAnswer(!show);
	};

	onNextQuestionButtonPress = () => {
		const { nextQuestion, questionAnswered } = this.props;

		nextQuestion();
		questionAnswered(null);
	};

	onRestartQuizButtonPress = () => {
		this.props.resetQuiz();
	};

	onBackToDeckButtonPress = () => {
		const { navigation, resetQuiz } = this.props;
		resetQuiz();
		navigation.goBack();
	};

	showPercentCorrect = () => {
		const { score } = this.props.quiz;
		const { questions } = this.props.currentDeck;
		const result = score / questions.length * 100;
		return result;
	};

	setNotification = () => {
		clearLocalNotification().then(setLocalNotification(timing));
	};

	render() {
		const { questions, title } = this.props.currentDeck;
		const { show, index, correct, score } = this.props.quiz;
		const {
			containerStyles,
			cardsLeftStyles,
			questionStyles,
			answerStyles,
			answerContainerStyles,
			answerTouchableStyles,
			answerCorrectStyles
		} = styles;

		console.log(index, questions.length, correct)

		if (index === questions.length - 1 && correct) this.setNotification();

		return (
			<View style={containerStyles}>
				<DeckTitle deckTitle={title} />

				<Text style={cardsLeftStyles}>
					{index + 1}/{questions.length}
				</Text>

				{correct === null && (
					<View style={containerStyles}>
						<View style={answerContainerStyles}>
							{!show && (
								<Text style={questionStyles}>
									{questions[index].question}
								</Text>
							)}

							{show && (
								<Text style={answerStyles}>
									{questions[index].answer}
								</Text>
							)}
						</View>

						<View style={answerContainerStyles}>
							<TouchableOpacity onPress={this.onAnswerTextPress}>
								<Text style={answerTouchableStyles}>
									{!show ? "Answer" : "Question"}
								</Text>
							</TouchableOpacity>
						</View>
						<View>
							<Button
								onPress={() => this.onAnswerButtonPress(true)}
								title={"Correct"}
							/>
							<Button
								onPress={() => this.onAnswerButtonPress(false)}
								title={"Incorrect"}
							/>
						</View>
					</View>
				)}

				{correct !== null && (
					<View style={containerStyles}>
						<Text style={answerCorrectStyles}>
							{correct ? "YES!" : "NO!"}
						</Text>
						{index !== questions.length - 1 && (
							<Button
								onPress={() => this.onNextQuestionButtonPress()}
								title={"Next Question"}
							/>
						)}
						{index === questions.length - 1 && (
							<View>
								<QuizComplete
									finalScore={this.showPercentCorrect()}
									restartQuiz={this.onRestartQuizButtonPress}
									backToDeck={this.onBackToDeckButtonPress}
								/>
							</View>
						)}
					</View>
				)}
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { decks, quiz } = state;
	return {
		currentDeck: decks.selected,
		quiz
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showAnswer: show => dispatch(showAnswer(show)),
		increaseScore: correct => dispatch(increaseScore(correct)),
		questionAnswered: answer => dispatch(questionAnswered(answer)),
		nextQuestion: () => dispatch(nextQuestion(1)),
		resetQuiz: () => dispatch(resetQuiz())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizView);
