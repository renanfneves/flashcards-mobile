import React from 'react';
import { Button} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Container, Box, BoxButton } from "./new-deck.styles";

class NewDeck extends React.Component {
  state = {
    name: '',
    showNameError: false
  }

  submit = () => {
    const name = this.state.name;
    if (name.length === 0) {
      this.setState({ showNameError: true });
    }
  };

  render() {
    return (
      <Container>
        <Box>
          <FormLabel>Name</FormLabel>
          <FormInput onChangeText={(value) => this.setState({ name: value })}/>
          { this.state.showNameError && <FormValidationMessage>Name Required</FormValidationMessage> }
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

export default NewDeck;
