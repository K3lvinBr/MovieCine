import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

// components
import RegularText from '../Texts/RegularText'

//styles
import { THEME } from '../../assets/styles/theme'

//tyles
import { ButtonProps } from './types'

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${THEME.colors.primary};
    width: 100%;
    border-radius: 6px;
`

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    )
}

export default RegularButton