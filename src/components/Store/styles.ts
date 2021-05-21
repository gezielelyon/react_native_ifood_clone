import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 92%;
  align-self: center;
  padding: 5px 0 5px 0;
  padding-right: 10px;
`;

export const StoreImage = styled.Image`
  height: 75px;
  width: 75px;
  border-radius: 50px;
`;

export const InfoView = styled.View`
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 10px;
`;

export const StoreName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #222;
`;

export const StoreDistance = styled.Text`
  font-size: 13px;
  color: #777;
  margin-top: 1px;
  margin-bottom: 1px;
`;

export const StorePrice = styled.Text`
  font-size: 13px;
  color: #777;
`;
