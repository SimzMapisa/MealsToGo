import React, {useContext} from 'react';
import { View, FlatList} from "react-native";
import SearchBar from '../../../components/SearchBar';
import { RestaurantInfo } from '../components/restaurant-info-card.component';
import styled from "styled-components/native"

import{ SafeArea }from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled(View)`
  padding: 0 ${props => props.theme.space[3]} ${props => props.theme.space[3]} ${props => props.theme.space[3]};
`
export const RestaurantsScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);

  return(
    <SafeArea>
    <SearchContainer >
      <SearchBar />
    </SearchContainer>
    <FlatList
        data={restaurants}
        renderItem={() =><RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
       
  </SafeArea>
  )
  };
 