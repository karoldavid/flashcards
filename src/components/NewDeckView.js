import React, { Component } from "react";
import { connect } from "react-redux";
import { saveDeck, setDeck } from "../actions/DeckActions";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { black, lightGray, lightPurp } from "../utils/colors";
import Button from "./Button";
import DeckFormInput from "./DeckFormInput";
import ArrowBack from "./ArrowBack";

class NewDeckView extends Component {
	state = {
		title: "",
		error: {
			title: false
		}
	};

	static navigationOptions = ({ navigation }) => ({
		headerLeft: <ArrowBack onPress={() => navigation.goBack()} />
	});

	handleTextChange = title => {
		this.setState(() => ({
			title
		}));
	};

	onSubmitButtonPress = () => {
		const { title } = this.state;
		const { navigation, saveDeck, setDeck } = this.props;

		if (title.length > 4) {
			saveDeck(title, function() {
				setDeck(title, () => {
					navigation.navigate("DeckView", { title: title });
				});
			});

			this.setState({
				title: ""
			});
		} else {
			this.setState({
				error: {
					title: true
				}
			});
		}
	};

	render() {
		const { error, title } = this.state;
		const { containerStyles } = styles;

		return (
			<KeyboardAvoidingView behavior="padding" style={containerStyles}>
				<DeckFormInput
					label={"What is the title of your new deck?"}
					placeholder={"type deck title here"}
					value={title}
					handleInputTextChange={this.handleTextChange}
					error={error.title}
				/>

				<Button onPress={this.onSubmitButtonPress} title={"Submit"} />
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	containerStyles: {
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
	}
});

function mapDispatchToProps(dispatch) {
	return {
		saveDeck: (title, callback) => dispatch(saveDeck(title, callback)),
		setDeck: (title, callback) => dispatch(setDeck(title, callback))
	};
}

export default connect(null, mapDispatchToProps)(NewDeckView);
