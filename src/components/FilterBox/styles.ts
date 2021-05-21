import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  padding: 5px 10px;
  border-width: 2px;
  border-color: #eee;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin-right: 7px;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  color: #444;
`;

export const IconLeft = styled(Feather)`
  margin-right: 5px;
`;

export const IconRight = styled(Feather)`
  margin-left: 5px;
`;

export const OtherIcon = styled(MaterialIcons)`
  margin-right: 5px;
`;
