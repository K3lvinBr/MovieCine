import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

// types
import { TextProps } from './types'
import { THEME } from '../../assets/styles/theme'

const StyledText = styled.Text`
    font-family: 'Roboto-Regular';
    letter-spacing: -0.4px;
    color: ${THEME.colors.fonts};
`

const SmallText: FunctionComponent<TextProps> = (props) => {
    return <StyledText numberOfLines={props.numberOfLines} style={props.textStyles}>{props.children}</StyledText>
}

export default SmallText