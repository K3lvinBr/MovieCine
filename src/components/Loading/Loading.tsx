import { ActivityIndicator } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

//style
import { THEME } from '../../assets/styles/theme'

const Loading = () => {
  return (
    <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(60,60,60,1)', 'rgba(0,0,0,1)']} style={{flex: 1, justifyContent: 'center'}}>
         <ActivityIndicator size="large" color={THEME.colors.primary} />
    </LinearGradient>
  )
}

export default Loading