import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  StoreImage,
  InfoView,
  StoreName,
  StoreDistance,
  StorePrice
} from './styles';

interface IStoreProps {
  name: string;
  distance: string;
  price: string;
  image: string;
}

export default function Store({
  name,
  distance,
  price,
  image,
  ...rest
}: IStoreProps) {
  return(
    <Container {...rest}>

      <StoreImage source={image} resizeMode="cover" />

      <InfoView>
        <StoreName>{name}</StoreName>
        <StoreDistance>{distance}</StoreDistance>
        <StorePrice>{price}</StorePrice>
      </InfoView>

      <FeatherIcon
        name="heart"
        color="#ccc"
        size={25}
        style={{marginLeft: 'auto'}}
      />
    </Container>
  );
}
