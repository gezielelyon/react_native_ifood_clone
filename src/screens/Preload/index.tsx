import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';

import { Container, Logo } from './styles';

import LogoWhite from '../../assets/logo-white.png';

export default function Preload(){
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch((state) => {
        const routes = [{name: 'TabRoutes'}, ...state.routes];

        return CommonActions.reset({
          ...state,
          routes,
          index: 0,
        })
      }
      )
    }, 2000);
  }, []);

  return(
    <>
    <StatusBar backgroundColor='#ea1d2c' barStyle="light-content" />
    <Container>
      <Logo source={LogoWhite} />
    </Container>
    </>
  );
}
