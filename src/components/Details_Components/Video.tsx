import React, { FC } from 'react'
import styled from 'styled-components/native'

//styles
import { ScreenHeight } from '../../assets/styles/shared'

//icons
import Icon from "react-native-vector-icons/AntDesign";

//components
import SmallButton from '../Buttons/SmallButton';
import { Linking, TouchableHighlight  } from 'react-native';

//types
import { ItemsProps } from '../../@types/dataTypes';

const VideoImage = styled.ImageBackground`
    height: ${ScreenHeight / 5.0}px;
    margin: 30px 30px 0px 30px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    object-fit: cover;
`

const Video: FC<ItemsProps> = ({data}) => {

  const trailerLink = () => {
    Linking.openURL(`https://www.youtube.com/results?search_query=${data.title}`)
  }

  return (
    <TouchableHighlight  onPress={trailerLink}>
      <VideoImage imageStyle={{ borderRadius: 10 }} source={{ uri: `https://image.tmdb.org/t/p/w500${data.belongs_to_collection === null ? data.backdrop_path : data.belongs_to_collection.backdrop_path}` }} >
        <SmallButton onPress={trailerLink} btnStyles={{ borderRadius: 20, paddingVertical: 6, paddingHorizontal: 10}}
          textStyles={{ fontSize: 12, fontWeight: 'bold' }}
          icon={<Icon name={'play'} color={'#FFF'} size={16} style={{ marginRight: 8 }} />}
        >
          Assista o Trailer
        </SmallButton>
      </VideoImage>
    </TouchableHighlight >
  )
}

export default Video