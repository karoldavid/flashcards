import React, { Component } from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { selectDeck, setDeck } from "../actions";
import styles from "../utils/styles";

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

function matchDispatchToProps(dispatch) {
    return {
        setDeck: (title, callback) => dispatch(setDeck(title, callback))
    };
}

export default connect(null, matchDispatchToProps)(DeckListItem);
