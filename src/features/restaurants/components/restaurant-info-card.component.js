import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from "../../../../assets/open";

// Styled components

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const CardContainer = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const OpenIco = styled.View`
  flex-grow: 1;
  align-items: flex-end;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Zeitguest',
    icon,
    photos = ['https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb'],
    address = '125 Paul Kruger Street, Boksburg',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(rating));
  // console.log(ratingArray);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() =>{
    setIsOpen(isOpenNow);
  }, [])

  return (
    <CardContainer elevation={2}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Wrapper>
          <Rating>
            {ratingArray.map((rating, index) => (
              <SvgXml key={rating} xml={star} height={20} width={20} />
            ))}
          </Rating>
         <OpenIco>
            {isOpen ? <SvgXml xml={open} height={25} width={25} /> : null}
         </OpenIco>
        </Wrapper>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
};
