import styled from "styled-components";
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width - 60;
const height = Dimensions.get('window').height - 400;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: white;
`;

export const Header = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 2;
  background-color: transparent;
  justify-content: flex-start;
  align-items: center;
`;

export const Face = styled.View`
  height: ${height};
  border: 1px solid;
  border-radius: 50px;
`;

export const Back = styled.View`
  height: ${height};
  border: 1px solid;
  border-radius: 50px;
`;

export const FlipText = styled.Text`
  text-align: center;
  font-size: 20px;
`;

export const BoxButton = styled.View`
  flex: 1;
  justify-content: space-around;

  flex-direction: row;
  align-items: flex-end;
  margin: 40px;
`;

export const ViewFlipText = styled.View`
  top: 20px;
`;

export const HeaderText = styled.Text`
  font-size: 17px;
`;

export const card = {
  width,
  borderColor: "transparent",
};

export const ButtonBack = styled.Button`
  flex: 1;
`;