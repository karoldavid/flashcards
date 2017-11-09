import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { lightGray, lightPurp, red, white } from "../utils/colors";
import Button from "./Button";
import DeckTitle from "./DeckTitle";
import ArrowBack from "./ArrowBack";
import { removeSelectedDeck } from '../actions/DeckActions';

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
			navigation.navigate("DeckListView")
		})
	}

	render() {
		const { params } = this.props.navigation.state;
		const { questions } = this.props.currentDeck;
		const { goToQuiz } = this.state;
		const {
			containerStyles,
			deckContentStyles,
			deckTitleStyles,
			infoStyles
		} = styles;

		return (
			<View style={containerStyles}>
				<DeckTitle
					deckTitle={params.title}
					questionsLength={questions.length}
				/>

				<View>
					{!goToQuiz && (
						<Text style={infoStyles}>
							To start a quiz add a card to the deck.
						</Text>
					)}
				</View>

				<View>
					{goToQuiz && (
						<Button
							onPress={() => this.onQuizButtonPress()}
							title={"Start Quiz"}
						/>
					)}

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
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: lightPurp,
		margin: 5
	},
	deckTitleStyles: {
		fontSize: 28,
		color: white
	},
	deckContentStyles: {
		fontSize: 16,
		textAlign: "center",
		color: lightGray
	},
	infoStyles: {
		fontSize: 16,
		color: red
	}
});

const mapDispatchToProps = dispatch => {
	return {
		removeSelectedDeck: (title, callback) => dispatch(removeSelectedDeck(title, callback))
	}
}

const mapStateToProps = state => {
	return {
		currentDeck: state.decks.selected
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
