import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { black, lightGray, lightPurp, red, white } from "../utils/colors";
import Button from "./Button";
import DeckTitle from "./DeckTitle";
import ArrowBack from "./ArrowBack";
import { removeSelectedDeck } from "../actions/DeckActions";

class DeckView extends Component {
	state = { gotToQuiz: false };

	static navigationOptions = ({ navigation }) => ({
		title: `Deck ${navigation.state.params.title}`,
		headerLeft: (
			<ArrowBack onPress={() => navigation.navigate("DeckListView")} />
		)
	});

	componentDidMount() {
		const length = this.props.currentDeck.questions.length;
		this.setState({
			goToQuiz: length > 0 ? true : false
		});
	}

	onCardButtonPress = () => {
		const { navigation } = this.props;
		navigation.navigate("NewQuestionView", { title: "Add a Card" });
	};

	onQuizButtonPress = () => {
		const { navigation, currentDeck } = this.props;
		navigation.navigate("QuizView", {
			title: "Start Quiz",
			deck: currentDeck.title
		});
	};

	onRemoveDeckButtonPress = () => {
		const { navigation, currentDeck } = this.props;

		this.props.removeSelectedDeck(currentDeck.title, () => {
			navigation.navigate("DeckListView");
		});
	};

	renderQuizButton() {
		const { infoStyles } = styles;

		if (this.state.goToQuiz) {
			return (
				<Button
					onPress={() => this.onQuizButtonPress()}
					title={"Start Quiz"}
				/>
			);
		}

		return (
			<Text style={infoStyles}>
				To start a quiz add a card to the deck.
			</Text>
		);
	}

	render() {
		const { params } = this.props.navigation.state;
		const { questions } = this.props.currentDeck;
		const {
			containerStyles,
			deckContentStyles,
			deckTitleStyles,
			infoStyles,
			sectionStyles
		} = styles;

		return (
			<View style={containerStyles}>
				<View style={sectionStyles}>
					<DeckTitle
						style={deckTitleStyles}
						deckTitle={params.title}
						questionsLength={questions.length}
					/>
				</View>

				<View style={sectionStyles}>
					{this.renderQuizButton()}

					<Button
						onPress={() => this.onCardButtonPress()}
						title={"Add Card"}
					/>
					<Button
						onPress={() => this.onRemoveDeckButtonPress()}
						title={"Delete Deck"}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyles: {
		flex: 1,
		justifyContent: 'space-around',
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
	},
	sectionStyles: {
		padding: 5,
		backgroundColor: white,
		justifyContent: "center",
		backgroundColor: lightPurp,
	},
	deckTitleStyles: {
		fontSize: 28,
		color: white
	},
	deckContentStyles: {
		fontSize: 16,
		color: lightGray
	},
	infoStyles: {
		fontSize: 16,
		textAlign: "center",
		color: red,
		margin: 10
	}
});

const mapDispatchToProps = dispatch => {
	return {
		removeSelectedDeck: (title, callback) =>
			dispatch(removeSelectedDeck(title, callback))
	};
};

const mapStateToProps = state => {
	return {
		currentDeck: state.decks.selected
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
