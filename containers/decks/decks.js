import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { View, FlatList, AsyncStorage } from 'react-native';
import { getDecks } from '../../actions/decks';
import { list, container, Separator } from "./decks.styles";

const AVAILABLE_DECKS = "DECKS";

const infoDeckState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'React is cool?',
        answer: 'Yes'
      },
      {
        question: 'React is a framework?',
        answer: 'Yes'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'JavaScript is cool?',
        answer: 'Yes'
      }
    ]
  },
  Ruby: {
    title: 'Ruby',
    questions: [
      {
        question: 'Ruby is cool?',
        answer: 'Yes.'
      }
    ]
  },
}

class Decks extends Component {
  state = {
    metaInfo: []
  }

  componentDidMount() {
    AsyncStorage.getItem(AVAILABLE_DECKS, storaged => {
      if(storaged && storaged.length) {
        return this.setState({ metaInfo: storaged });
      }

      AsyncStorage.setItem(AVAILABLE_DECKS, JSON.stringify(infoDeckState), () => {
        return this.setState({ metaInfo: infoDeckState });

      });
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
		const { metaInfo } = this.state;
		const data = metaInfo ? Object.keys(metaInfo).map((key) => {
			const details = metaInfo[key]
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
