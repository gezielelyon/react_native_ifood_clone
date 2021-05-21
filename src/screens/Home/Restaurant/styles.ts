import styled from 'styled-components/native';

import {ScrollView} from 'react-native-gesture-handler';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
`;

export const FilterScrollHorizontal = styled(ScrollView)`
  width: 100%;
  padding: 15px;
  padding-right: 20px;
`;

export const ViewHomeCategories = styled(ScrollView)`
  width: 100%;
  padding: 15px 15px 10px 15px;
  padding-right: 30px;
`;

export const Promotions = styled(ScrollView)`
  width: 100%;
  padding: 20px 40px 20px 15px;
  padding-right: 30px;
`;

export const Banner = styled.Image`
  margin-top: 10px;
  height: 50px;
  width: 92%;
  align-self: center;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 0 15px;
`;
