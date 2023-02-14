import React, { FC, useEffect } from 'react'
import styled from 'styled-components/native'

//styles
import { THEME } from '../assets/styles/theme'
import { Props } from '../@types/routesTypes'

//components
import HeaderDetails from '../components/Details_Components/HeaderDetails'
import CardInfo from '../components/Details_Components/CardsInfo'
import Video from '../components/Details_Components/Video'
import Description from '../components/Details_Components/Description'
import Loading from '../components/Loading/Loading'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { item, useItem } from '../redux/sliceGetDetailMovie'



const DetailsContainer = styled.ScrollView`
  flex: 1;
  background-color: ${THEME.colors.container};
`

const Details: FC<Props> = ({ route }) => {

  const dataMovies = useSelector(useItem)

  const dispatch = useDispatch()

    useEffect(() => {
      const fetchData = async () => {
        try {
          await fetch(`https://api.themoviedb.org/3/movie/${route.params}?api_key=21f96aa3244baaf05f0a0807fb1fc18e&language=pt-BR`)
            .then(res => {
              return res.json()
            }).then(movie => {
              dispatch(item(movie))
            })
        } catch (err) {
          console.log(`Erro ao buscar Filme: erro: ${err}`)
        }
      }
      
      fetchData()
      dispatch(item({
        backdrop_path:         '', 
        belongs_to_collection: {},
        overview:              '',
        popularity:            0,
        poster_path:           '',
        production_companies:  [],
        release_date:          0,
        title:                 ''
    }))
    }, [])

  return (
    <>
      {
        Object.keys(dataMovies).length === 8
          ? <Loading />
          : <DetailsContainer>
            <HeaderDetails/>
            <CardInfo/>
            <Video />
            <Description />
          </DetailsContainer >
      }
    </>
  )
}

export default Details