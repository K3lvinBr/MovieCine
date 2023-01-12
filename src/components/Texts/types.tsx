import { ReactNode } from 'react'
import { StyleProp, TextStyle } from 'react-native'

export interface TextProps {
    textStyles?: StyleProp<TextStyle>
    numberOfLines?: number 
    children: ReactNode
}