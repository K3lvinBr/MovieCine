import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

//styles
import { ScreenHeight } from '../../assets/styles/shared'

//components
import RegularText from '../Texts/RegularText'

//redux
import { useSelector } from 'react-redux'
import { useItem } from '../../redux/sliceGetDetailMovie'

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

const HeaderDetails = () => {

  const dataMovie = useSelector(useItem)

  return (
    <ImageContainer>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${dataMovie.belongs_to_collection === null ? dataMovie.poster_path : dataMovie.backdrop_path}` }}>
        <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']} style={{ flex: 1, justifyContent: 'flex-end' }}>
          <InfoImage>
            <RegularText textStyles={{ fontSize: 30 }}>
              {dataMovie.title}
            </RegularText>
          </InfoImage>
        </LinearGradient>
      </Image>
    </ImageContainer>
  )
}

export default HeaderDetails