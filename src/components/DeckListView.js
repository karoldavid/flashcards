import React, { Component } from "react";
import { connect } from "react-redux";
import {
	StyleSheet,
	Text,
	FlatList,
	View,
	TouchableOpacity
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { lightPurp, white } from "../utils/colors";
import DeckView from "./DeckView";
import DeckListItem from "./DeckListItem";
import { fetchData, selectDeck } from "../actions/DeckActions";
import { getAll, getDeck, saveDeckTitle } from "../utils/api";
import { setLocalNotification, timing } from "../utils/notifications";
import ArrowBack from "./ArrowBack";

class DeckListView extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: <ArrowBack onPress={() => navigation.goBack()} />
	});

	componentDidMount() {
		setLocalNotification(timing);
		this.props.fetchData();
	}

	renderItem = ({ item }) => {
		const { title, questions } = item;
		const { navigation } = this.props;

		return (
			<DeckListItem
				navigation={navigation}
				title={title}
				questions={questions}
				key={title}
			/>
		);
	};

	render() {
		const { flashCardsList } = this.props;
		const { containerStyles, infoTextStyles } = styles;
		return (
			<List style={containerStyles}>
				<FlatList
					data={this.props.flashCardsList}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => index}
				/>

				{flashCardsList.length === 0 && (
					<Text style={infoTextStyles}>No Decks</Text>
				)}
			</List>
		);
	}
}

const mapStateToProps = ({ decks: { deckList } }) => ({
	flashCardsList: deckList
});

function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchData()),
		deselectDeck: () => dispatch(selectDeck(null))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);

const styles = StyleSheet.create({
	containerStyles: {
		flex: 1,
		backgroundColor: lightPurp
	},
	infoTextStyles: {
		flex: 1,
		color: white,
		textAlign: "center"
	}
});
