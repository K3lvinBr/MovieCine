import React, { FC } from 'react'
import styled from 'styled-components/native'

//styles
import { ScreenHeight, ScreenWidth } from '../../assets/styles/shared'
import { THEME } from '../../assets/styles/theme'

//components
import RegularText from '../Texts/RegularText'

//types
import { ItemsProps } from '../../@types/dataTypes'

const CardContainer = styled.View`
  margin: -8px 30px 0px 30px;
  flex-direction: row;
`

const Card = styled.Image`
  width: ${ScreenWidth / 5.0}px;
  height: ${ScreenHeight / 7.2}px;
  background-color: ${THEME.colors.container};
  border-radius: 6px;
  object-fit: cover;
`

const CardInfo = styled.View`
  width: 76.5%;
  justify-content: center;
  padding: 0px 18px 0px 18px;
  
`

const CardDate = styled.View`
  padding: 1px 0px 1px 0px;
  width: 54px;
  border-radius: 2px;
  align-items: center;
  margin-bottom: 18px;
  background-color: #FFF;
`

const CardsInfo: FC<ItemsProps> = ({data}) => {

  const convertDate = (dateString): string => {
    let dateComponents = dateString.split('-');
    let year = dateComponents[0].substr(2);
    let month = dateComponents[1];
    let day = dateComponents[2];
    
    return `${day}/${month}/${year}`;
  }

  return (
    <CardContainer>
      <Card source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }} />
      <CardInfo>
        <CardDate>
          <RegularText textStyles={{ color: 'black', fontSize: 12 }}>
            {convertDate(data.release_date)}
          </RegularText>
        </CardDate>
        <RegularText numberOfLines={1} textStyles={{ fontSize: 12, color: THEME.colors.subFonts }}>
          Produtora:  <RegularText textStyles={{ fontSize: 12 }}>{data.production_companies[0] === undefined ? 'indefinida' : data.production_companies[0].name}</RegularText>
        </RegularText>
        <RegularText numberOfLines={1} textStyles={{ fontSize: 12, color: THEME.colors.subFonts }}>
          Popularidade:  <RegularText textStyles={{ fontSize: 12 }}>{data.popularity}</RegularText>
        </RegularText>
      </CardInfo>
    </CardContainer>
  )
}

export default CardsInfo