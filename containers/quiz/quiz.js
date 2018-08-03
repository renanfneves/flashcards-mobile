import React, { Component } from 'react';
import { Button } from 'react-native';
import FlipCard from 'react-native-flip-card'
import { Container, Header, Body, Face, Back, ViewFlipText, FlipText, BoxButton, HeaderText, card, ButtonBack } from "./quiz.styles";

const quizData = {
  title: 'React',
  position: 0,
  data: [
    { question: 'React is cool?React is cool?React is cool?', answer: 'Yes', correct: true, fliped: false },
    { question: 'React is a framework?', answer: 'No', correct: false, fliped: false },
  ],
}

class Quiz extends Component {
  state = {
    quiz: quizData
	};
	
	getAnswer = () => {
    const quiz = this.state.quiz;
		const { data, position } = quiz;

    data[position].fliped = true
    this.setState({ quiz: quiz });
  };

	sumPoints = (plus) => {
		const quiz = this.state.quiz;
		const { position, data } = quiz;
	
		data[position].correct = plus === 1 ? true : false;
		data[position].answered = true;

		if (position + 1 < quiz.data.length) {
      quiz.position = position + 1;
      this.setState({ quiz: quiz });
		} else {
			this.props.navigation.navigate('Score', { quiz: this.state.quiz });
		}
  };

	render() {
		const quiz = this.state.quiz;
		const { position, data } = quiz;
		const question = data[position];

		return (
			<Container>
				<Header>
					<HeaderText>{position + 1}/{data.length}</HeaderText>
				</Header>
				<Body>
					<FlipCard 
						style={card}
						friction={6}
						perspective={1000}
						flipHorizontal={true}
						flipVertical={false}
						flip={question.fliped}
						clickable={false}
						alignWidth={true}
						onFlipEnd={(isFlipEnd)=>{}}
					>
						<Face>
							<ViewFlipText>
								<FlipText>{question.question}</FlipText>
							</ViewFlipText>
							<BoxButton>
								<Button 
									onPress={() => this.getAnswer()}
									title="Answer"
									color="#00007f" 
								/>
							</BoxButton>
						</Face>
						<Back>
							<ViewFlipText>
								<FlipText>{question.answer}</FlipText>
							</ViewFlipText>
							<BoxButton>
								<ButtonBack 
									onPress={() => this.sumPoints(1)}
									title="Correct"
									color="green"
								/>
                <ButtonBack
                  onPress={() =>this.sumPoints(0)}
									title="Incorrect"
									color="red" 
                />
							</BoxButton>
						</Back>
					</FlipCard>
				</Body>
			</Container>
		);
	}
}

export default Quiz;
