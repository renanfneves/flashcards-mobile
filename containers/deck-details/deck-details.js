import React, { Component } from 'react';
import { Button } from 'react-native';
import { Container, Header, Box, BoxButton, Text, TextCards } from "./deck-details.styles";

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

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { item } = navigation.state.params;

    return {
      title: `${item.key}`
    }
  };

  addCard = () => {
    const { item } = this.props.navigation.state.params;

    this.props.navigation.navigate('NewCard', { item: item });
  };

  startQuiz = () => {
    this.props.navigation.navigate('Quiz', {});
  };

  render() {
    const deck = infoDeckState;
    const { item } = this.props.navigation.state.params;
    const details = deck[item.key];

    return (
      <Container>
        <Box>
          <Header>
            <Text>{details.title}</Text>
            <TextCards>{details.questions.length === 1 ? `${details.questions.length} Card` : `${details.questions.length} Cards` }</TextCards>
          </Header>
          <BoxButton>
            <Button
              onPress={() => this.addCard()}
              title="Add Card"
              color="#00007f"
            />
            {
              details.questions.length &&
              <Button
                onPress={() => this.startQuiz(details)}
                title="Start"
                color="green"
              />
            }
          </BoxButton>
        </Box>
      </Container>
    );
  }
};

export default DeckDetail;
