import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

//styles
import { ScreenHeight } from '../../assets/styles/shared'

//components
import RegularText from '../Texts/RegularText'

//types
import { ItemsProps } from '../../@types/dataTypes'

const ImageContainer = styled.View`
  height: ${ScreenHeight / 2.2}px;
`

const Image = styled.ImageBackground`
  flex: 1;
  object-fit: cover;
`

const InfoImage = styled.View`
  margin: 0px 30px 20px 30px;
`

const HeaderDetails: FC<ItemsProps> = ({data}) => {

  return (
    <ImageContainer>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${data.belongs_to_collection === null ? data.poster_path : data.backdrop_path}` }}>
          <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']} style={{ flex: 1, justifyContent: 'flex-end' }}>
            <InfoImage>
              <RegularText textStyles={{ fontSize: 30 }}>
                {data.title}
              </RegularText>
            </InfoImage>
          </LinearGradient>
        </Image>
      </ImageContainer>
  )
}

export default HeaderDetails