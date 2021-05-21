import React from 'react';
import {Text, View} from 'react-native';

import {Container, ImageBackground} from './styles';

interface IImageProps {
  source?: string;
  text: string;
}

export default function HomeCategory({source, text}: IImageProps) {
  return(
    <View>
      <Container>
        <ImageBackground source={source} resizeMode="cover"/>
      </Container>
      <Text style={{alignSelf: 'center', marginTop: 10, color: '#555', marginRight: 15}}>{text}</Text>
    </View>
  );
}
