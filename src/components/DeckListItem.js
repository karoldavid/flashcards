import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { selectDeck, setDeck } from "../actions";
import { gray, lightGray, lightPurp, white } from "../utils/colors";

class DeckListItem extends Component {
    onListItemPress = () => {
        const { title, navigation } = this.props;
        this.props.setDeck(title, function() {
            navigation.navigate("DeckView", { title });
        });
    };

    render() {
        const { title, questions } = this.props;
        const { titleStyles, subtitleStyles, subtitleContainerStyles } = styles;

        return (
            <ListItem
                onPress={this.onListItemPress}
                titleStyle={titleStyles}
                subtitleStyle={subtitleStyles}
                subtitleContainerStyle={subtitleContainerStyles}
                key={title}
                title={title}
                subtitle={`${questions.length} card${
                    questions.length !== 1 ? "s" : ""
                }`}
            />
        );
    }
}

const styles = StyleSheet.create({
    titleStyles: {
        fontSize: 28,
        color: white
    },
    subtitleStyles: {
        fontSize: 16,
        color: lightGray
    },
    subtitleContainerStyles: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    }
});

function matchDispatchToProps(dispatch) {
    return {
        setDeck: (title, callback) => dispatch(setDeck(title, callback))
    };
}

export default connect(null, matchDispatchToProps)(DeckListItem);
