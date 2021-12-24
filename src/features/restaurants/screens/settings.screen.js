import React from 'react';
import { View, SafeAreaView, StatusBar, FlatList} from "react-native";
import SearchBar from '../../../components/SearchBar';
import { RestaurantInfo } from '../components/restaurant-info-card.component';
import styled from "styled-components/native"

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`
export const settingsScreen = () => (
  <SafeArea>
    <SearchContainer >
      <SearchBar />
    </SearchContainer>
    <FlatList
        data={[{name: 1}, {name:2}, {name: 3}]}
        renderItem={() =><RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
       
  </SafeArea>
);
