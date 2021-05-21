import React from 'react';

import {Container, Text, IconLeft, IconRight, OtherIcon} from './styles';

interface IBoxFilterProps {
  text: string;
  hasItemLeft?: string;
  hasItemRight?: string;
  otherICon?: boolean;
}

export default function FilterBox(props: IBoxFilterProps) {
  return(
    <Container>
      {(props.hasItemLeft && !props.otherICon) && <IconLeft name={props.hasItemLeft} color="#444" size={16} />}
      {(props.hasItemLeft && props.otherICon) && <OtherIcon name={props.hasItemLeft} color="#444" size={16} />}
      <Text numberOfLines={1}>
        {props.text}
      </Text>
      {props.hasItemRight && <IconRight name={props.hasItemRight} color="#444" size={16} />}
    </Container>
  );
}
