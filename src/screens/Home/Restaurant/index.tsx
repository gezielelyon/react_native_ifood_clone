import React from 'react';
// import {SliderBox} from 'react-native-image-slider-box';
import {useNavigation} from '@react-navigation/native';

import FilterBox from '../../../components/FilterBox/index';
import HomeCategory from '../../../components/HomeCategory/index';
import Promotion from '../../../components/Promotion/index';

import {imagesHomeCategories, imagesPromotions, imagesStories} from '../../../shared/index';

import BannerIMG from '../../../assets/banner.png';

import {
  Container,
  FilterScrollHorizontal,
  ViewHomeCategories,
  Promotions,
  Banner,
  Title
} from './styles';
import Store from '../../../components/Store';

type IFilter = {
  text: string;
  hasItemRight?: string;
  hasItemLeft?: string;
  otherIcon?: boolean;
}

type IStore = {
  name: string;
  distance: string;
  price: string;
  image: string;
}

const filters: IFilter[] = [
  {
    text: 'Ordenar',
    hasItemRight: 'chevron-down',
  },
  {
    text: 'Para retirar',
    hasItemLeft: 'directions-walk',
    otherIcon: true
  },
  {
    text: 'Entrega grátis'
  },
  {
    text: 'Vale-refeição',
    hasItemRight: 'chevron-down',
  },
  {
    text: 'Distância |',
    hasItemRight: 'chevron-down',
  },
  {
    text: 'Entrega parceira'
  },
  {
    text: 'Super Restaurante'
  },
  {
    text: 'Filtros'
  },
]

const stories: IStore[] = [
  {
    name: 'Pizzaria Atlântico Recife',
    distance: '4,7 ⭐ | Pizzas na hora | 9Km',
    price: '40-50 min | R$20,25',
    image: imagesStories[0]
  },
  {
    name: 'Supermercado Big Bom Preço',
    distance: '4,5 ⭐ | compras do dia | 8Km',
    price: '30-45 min | R$13,25',
    image: imagesStories[1]
  },
  {
    name: 'Habibis Boa Viagem',
    distance: '4,6 ⭐ | Fast Food | 5Km',
    price: '20-25 min | R$6,80',
    image: imagesStories[2]
  },
  {
    name: 'Hamburgers Madero',
    distance: '4,8 ⭐ | Burger do madero | 6Km',
    price: '25-30 min | R$15,50',
    image: imagesStories[3]
  },
  {
    name: 'Bobs Lanches Pina',
    distance: '4,9 ⭐ | Lanches Bobs | 7Km',
    price: '40-50 min | R$17,25',
    image: imagesStories[4]
  }
]

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <FilterScrollHorizontal
        horizontal
        keyboardShouldPersistTaps="never"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 20}}
      >
        {filters.map(filter => (
          <FilterBox
            key={filter.text}
            text={filter.text}
            hasItemLeft={filter.hasItemLeft ? filter.hasItemLeft : undefined}
            hasItemRight={filter.hasItemRight ? filter.hasItemRight : undefined}
            otherICon={filter.otherIcon ? filter.otherIcon : undefined}
          />
        ))}
      </FilterScrollHorizontal>

      <ViewHomeCategories
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {imagesHomeCategories.map(source => (
          <HomeCategory key={source.text} source={source.image} text={source.text}/>
        ))}
      </ViewHomeCategories>

      <Promotions
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {imagesPromotions.map(promotion => (
          <Promotion key={promotion} source={promotion}/>
        ))}
      </Promotions>

      <Banner source={BannerIMG} />

      <Title>Lojas</Title>

      {stories.map((item: IStore) => (
        <Store
          name={item.name}
          distance={item.distance}
          price={item.price}
          image={item.image}
        />
      ))}

    </Container>
  );
}
