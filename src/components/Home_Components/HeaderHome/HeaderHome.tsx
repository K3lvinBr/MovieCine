import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

//components
import RegularButton from '../../Buttons/RegularButton'
import RegularText from '../../Texts/RegularText'
import HeaderProgress from './HeaderProgress'

//styles
import { ScreenHeight } from '../../../assets/styles/shared'

//types
import { HeaderProps } from './types'
import { NavigationProp } from '../../../@types/routesTypes';

const ContainerImage = styled.View`
  height: ${ScreenHeight / 1.4}px;
`

const Image = styled.ImageBackground`
  flex: 1;
  object-fit: cover;
`

const InfoContainer = styled.View`
  margin: 0px 30px 30px 30px;
`

const ButtonContainer = styled.View`
  width: 150px;
`

const HeaderHome: FunctionComponent<HeaderProps> = ({ data }) => {

  const [getEachArray, setgetEachArray] = useState<number>(0)
  const [progressValue, setProgressValue] = useState<number>(0)
  const [progressReset, setprogressReset] = useState<boolean>(false)
  const [handleAnimation, setHandleAnimation] = useState<string | undefined>(undefined)

  setTimeout(() => {
    if (progressValue <= 100 && progressReset === false) {
      setProgressValue(progressValue + 0.15)
    }

    if (progressValue >= 100) {
      setprogressReset(true)
      setProgressValue(0)
      setHandleAnimation("fadeInLeft")
      {
        getEachArray === data.length - 1
          ? setgetEachArray(0)
          : setgetEachArray(getEachArray + 1)
      }
      setTimeout(() => {
        setprogressReset(false)
      }, 1000);
    }
  }, 0);

  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Details', data[getEachArray].id)
  }
  
  return (
    <ContainerImage>
      <Animatable.View animation={handleAnimation} onAnimationEnd={() => setHandleAnimation(undefined)} style={{ flex: 1 }}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${data[getEachArray].poster_path}` }}>
          <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,1)']} style={{ flex: 1, justifyContent: 'flex-end' }}>
            <InfoContainer>
              <RegularText numberOfLines={2} textStyles={{ fontSize: 30, marginBottom: 4 }}>
                {data[getEachArray].title.split(' ').slice(0, 3).join(' ')}
              </RegularText>
              <RegularText numberOfLines={1} textStyles={{ fontSize: 12, marginRight: 120, marginBottom: 20 }}>
                {data[getEachArray].overview}
              </RegularText>
              <ButtonContainer>
                <RegularButton onPress={handlePress} btnStyles={{ padding: 16 }} textStyles={{ fontSize: 12 }}>Ver Mais</RegularButton>
              </ButtonContainer>
            </InfoContainer>
          </LinearGradient>
        </Image>
      </Animatable.View>
      <HeaderProgress progressValue={progressValue} progressReset={progressReset} />
    </ContainerImage>
  )
}

export default HeaderHome