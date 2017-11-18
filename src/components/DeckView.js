import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import Button from "./Button";
import DeckTitle from "./DeckTitle";
import ArrowBack from "./ArrowBack";
import { removeSelectedDeck } from "../actions";

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
