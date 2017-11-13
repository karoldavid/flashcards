import React, { Component } from "react";
import { connect } from "react-redux";
import { saveCard, setDeck } from "../actions";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { lightPurp } from "../utils/colors";
import Button from "./Button";
import DeckTitle from "./DeckTitle";
import DeckFormInput from "./DeckFormInput";
import ArrowBack from "./ArrowBack";

class NewQuestionView extends Component {
	state = {
		question: "",
		answer: "",
		error: {
			question: false,
			answer: false
		}
	};

	static navigationOptions = ({ navigation }) => ({
		headerLeft: <ArrowBack onPress={() => navigation.goBack()} />
	});

	handleQuestionTextChange = question => {
		this.setState(() => ({
			question
		}));
	};
	handleAnswerTextChange = answer => {
		this.setState(() => ({
			answer
		}));
	};

	onSubmitButtonPress = () => {
		const { question, answer } = this.state;
		const { selectDeck, saveCard, navigation } = this.props;
		const newQuestion = {
			question: question,
			answer: answer
		};

		if (question.length > 4 && answer.length > 4) {
			saveCard(selectDeck.title, newQuestion, () => {
				navigation.navigate("DeckView", { title: selectDeck.title });
			});
		} else {
			this.setState({
				error: {
					question: true,
					answer: true
				}
			});
		}
	};

	render() {
		const { question, answer, error } = this.state;
		const { title } = this.props.selectDeck;
		const { params } = this.props.navigation.state;
		const {
			containerStyles,
			formContainerStyles,
			titleStyles,
			inputStyles
		} = styles;

		return (
			<KeyboardAvoidingView behavior="padding" style={containerStyles}>
				<DeckTitle deckTitle={title} />

				<DeckFormInput
					label={"What is the question you want to ask?"}
					placeholder={"type question here"}
					value={question}
					handleInputTextChange={this.handleQuestionTextChange}
					error={error.question}
				/>

				<DeckFormInput
					label={"What is the answer?"}
					placeholder={"type answer here"}
					value={answer}
					handleInputTextChange={this.handleAnswerTextChange}
					error={error.answer}
				/>

				<Button onPress={this.onSubmitButtonPress} title={"Submit"} />
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	containerStyles: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: lightPurp,
		margin: 5
	}
});

function mapStateToProps(state) {
	return {
		selectDeck: state.decks.selected
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveCard: (title, newQuestion, callback) =>
			dispatch(saveCard(title, newQuestion, callback))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView);
