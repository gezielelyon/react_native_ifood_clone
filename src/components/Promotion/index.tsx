import React from 'react';

import {Container, ImageBackground} from './styles';

type IImageProps = {
  source: string;
}

export default function Promotion({source}: IImageProps) {
  return(
    <Container>
      <ImageBackground source={source} resizeMode="cover" />
    </Container>
  );
}
