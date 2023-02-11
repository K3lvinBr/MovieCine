import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components/native'

//styles
import { THEME } from '../assets/styles/theme'
import { Props } from '../@types/routesTypes'
import { DataItem } from '../@types/dataTypes'

//components
import HeaderDetails from '../components/Details_Components/HeaderDetails'
import CardInfo from '../components/Details_Components/CardsInfo'
import Video from '../components/Details_Components/Video'
import Description from '../components/Details_Components/Description'
import Loading from '../components/Loading/Loading'



const DetailsContainer = styled.ScrollView`
  flex: 1;
  background-color: ${THEME.colors.container};
`

const Details: FC<Props> = ({ route }) => {

  const [data, setData] = useState<DataItem>()

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${route.params}?api_key=21f96aa3244baaf05f0a0807fb1fc18e&language=pt-BR`)
        .then(res => {
          return res.json()
        }).then(data => {
          setData(data)
        })
    }, [])

  return (
    <>
      {
        data === undefined
          ? <Loading />
          : <DetailsContainer>
            <HeaderDetails data={data} />
            <CardInfo data={data} />
            <Video data={data} />
            <Description data={data}/>
          </DetailsContainer >
      }
    </>
  )
}

export default Details