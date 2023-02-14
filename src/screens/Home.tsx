import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'react-native'

//components
import Card from '../components/Home_Components/Cards/Card'
import Loading from '../components/Loading/Loading'
import HeaderHome from '../components/Home_Components/HeaderHome/HeaderHome'
import RegularText from '../components/Texts/RegularText'

//styles
import { THEME } from '../assets/styles/theme'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { data, useData } from '../redux/sliceGetMovies'

const Home = () => {

  const dataMovies = useSelector(useData)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
         await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=21f96aa3244baaf05f0a0807fb1fc18e&language=pt-BR')
          .then(res => {
            return res.json()
          }).then(movies => {
            dispatch(data(movies.results))
          })
      } catch (err) {
        console.log(`Erro ao buscar Dados: erro: ${err}`)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {
        dataMovies.length === 0
          ? <Loading />
          : <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(60,60,60,1)', 'rgba(0,0,0,1)']} style={{ flex: 1, alignItems: 'center' }}>
            <FlatList
              style={{ flex: 1 }}
              data={dataMovies}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              keyExtractor={({ id }: any) => id.toString()}
              renderItem={({ item }: any) => <Card data={item} />}
              ListHeaderComponent={() =>
                <>
                  <HeaderHome />
                  <View style={{ marginVertical: 26, marginLeft: 30 }}>
                    <RegularText textStyles={{ fontSize: 18, color: THEME.colors.primary }}>Novos</RegularText>
                    <RegularText textStyles={{ fontSize: 18 }}>Lançamentos</RegularText>
                  </View>
                </>
              }
            />
          </LinearGradient>
      }
    </>
  )
}

export default Home