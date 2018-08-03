import React, { Component } from 'react';
import { Button } from 'react-native';
import { Container, Header, Box, BoxButton, Text } from "./score.styles";

class Score extends Component {
	goToDeckDetails = () => {
		const { quiz } = this.props.navigation.state.params;
		item = { key: quiz.title, total: quiz.data.length };

		this.props.navigation.navigate('DeckDetails', { item } )
	}

	resetQuiz = () => {
		const { quiz } = this.props.navigation.state.params;

		const data = quiz.data.map((obj) => {
			return {
				question: obj.question,
				answer: obj.answer,
				answered: false,
				fliped:false,
				correct: null
			}
		});

		this.props.navigation.goBack();
	}

	render() {
    const { quiz } = this.props.navigation.state.params;
		const sum = quiz.data.reduce(( prevVal, elem ) => {
			return prevVal + (elem.correct === true ? 1 : 0)
		}, 0);
	
		return (
			<Container>
				<Box>
					<Header>
						<Text> {sum} Point(s) </Text>
					</Header>
					<BoxButton>
						<Button
							onPress={() => this.resetQuiz()} 
							title="Reset Quiz"
							color="#00007f"
						/>
						<Button
							onPress={() => this.goToDeckDetails()}
							title="Back to deck"
							color="red" 
						/>
					</BoxButton>
				</Box>
			</Container>
		);
	}
}

export default Score;
