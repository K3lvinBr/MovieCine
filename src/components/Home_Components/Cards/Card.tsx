import React, { FC } from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

//components
import RegularText from '../../Texts/RegularText';

//icons
import Icon from "react-native-vector-icons/AntDesign";

//themes
import { THEME } from '../../../assets/styles/theme'
import { ScreenHeight, ScreenWidth } from '../../../assets/styles/shared'

//types
import { CardsProps } from '../../../@types/dataTypes';
import { NavigationProp } from '../../../@types/routesTypes';

const CardContainer = styled.TouchableOpacity`
  width: ${ScreenWidth / 2.5}px;
  background-color: transparent;
  justify-content: space-between;
  margin: 0px 20px 40px 20px;
`

const CardImageContainer = styled.View`
  height: ${ScreenHeight / 3.3}px;
  border-radius: 10px;
  background-color: ${THEME.colors.container};
`

const CardImage = styled.Image`
  flex: 1;
  object-fit: cover;
  border-radius: 10px;
`

const InfoContainer = styled.View`
  margin: 10px 10px 0px 10px;
`

const IconsContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`




const Card: FC<CardsProps> = ({ data }) => {

  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Details', data.id)
  }

  return (
    <CardContainer onPress={handlePress}>
      <CardImageContainer>
        <CardImage source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }} />
      </CardImageContainer>
      <InfoContainer>
        <RegularText numberOfLines={2} textStyles={{ fontSize: 14 }}>{data.title}</RegularText>
        <IconsContainer>
          <Icon name={'star'} color={THEME.colors.primary} size={12} />
          <RegularText textStyles={{ fontSize: 12, color: THEME.colors.primary, marginLeft: 4 }}>{data.vote_average}</RegularText>
          <Icon name={'user'} color={THEME.colors.primary} size={12} style={{ marginLeft: 10 }} />
          <RegularText textStyles={{ fontSize: 12, color: THEME.colors.primary, marginLeft: 4 }}>{data.vote_count}</RegularText>
        </IconsContainer>
      </InfoContainer>
    </CardContainer>
  )
}

export default Card