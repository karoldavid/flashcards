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
import { lightPurp } from "../utils/colors";
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
		return (
			<List style={styles.containerStyles}>
				<FlatList
					data={this.props.flashCardsList}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => index}
				/>
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
		alignItems: "stretch",
		backgroundColor: lightPurp
	}
});
