import React, { Component } from 'react';
import { Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Container, Box, BoxButton } from "./new-card.styles";

class NewCard extends Component {
	state = {
		question: '',
		answer: '',
		showQuestionError: false,
		showAnswerError: false
  };

  submit = () => {
		if(this.state.question.length === 0 || this.state.answer.length === 0){
			if (this.state.question.length === 0) {
				this.setState({ showQuestionError: true })
			}
			if (this.state.answer.length === 0) {
				this.setState({ showAnswerError: true })
			}
    }
  };

	render() {
		return (
			<Container>
        <Box>
          <FormLabel>Question</FormLabel>
          <FormInput onChangeText={(value) => this.setState({ question: value })} />
          { this.state.showQuestionError && <FormValidationMessage>Question Required</FormValidationMessage> }
        </Box>
				<Box>
          <FormLabel>Answer</FormLabel>
          <FormInput onChangeText={(value) => this.setState({ answer: value })} />
          { this.state.showAnswerError && <FormValidationMessage>Answer Required</FormValidationMessage> }
        </Box>
        <BoxButton>
          <Button
            onPress={this.submit}
            title="Confirm"
            color="green"
          />
        </BoxButton>
      </Container>
		);
	}
}

export default NewCard;

