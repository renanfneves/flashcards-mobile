import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { View, FlatList, AsyncStorage } from 'react-native';
import { getDecks, INITIAL_DECKS, AVAILABLE_DECKS } from '../../actions/decks';
import { list, container, Separator } from "./decks.styles";

class Decks extends Component {
  static fetchData(dispatch) {
    return dispatch(getDecks());
  }

  componentDidMount() {
		const { dispatch } = this.props;
		// Decks.fetchData(this.props.dispatch);
		
		AsyncStorage.getItem(AVAILABLE_DECKS, decks => {
      if(decks && decks.length) { return dispatch(getDecks(decks)); }
  
			AsyncStorage.setItem(AVAILABLE_DECKS, JSON.stringify(INITIAL_DECKS), 
			() => dispatch(getDecks(INITIAL_DECKS)));
    });
  }

	goToDeckDetail = (item) => {
		this.props.navigation.navigate('DeckDetails', { item: item });
	}

	renderItem = ({ item }) => (
		<View>
			<ListItem
				title={item.key}
				subtitle={`${item.total} cards`}
				onPress={() => this.goToDeckDetail(item)}
			/>
		</View>
	);

	render() {
		const { availableDecks } = this.props;
		const data = availableDecks ? Object.keys(availableDecks).map((key) => {
			const details = availableDecks[key]
			return { key: key, total: details.questions ? details.questions.length : 0 }
    }) : []

		return (
			<FlatList
				style={container}
				contentContainerStyle={list}
				data={data}
				renderItem={this.renderItem}
				keyExtractor={item => item.key}
				ItemSeparatorComponent={Separator}
			/>
		);
	}
}

const mapStateToProps = state => ({
  availableDecks: state.availableDecks
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks()),
  dispatch
});

Decks.propTypes = {
  availableDecks: PropTypes.array,
};

Decks.defaultProps = {
  availableDecks: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
