import React, { FC } from 'react'
import styled from 'styled-components/native'

// components
import RegularText from '../Texts/RegularText'

//styles
import { THEME } from '../../assets/styles/theme'

//tyles
import { ButtonProps } from './types'

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${THEME.colors.primary};
    border-radius: 6px;
    flex-direction: row;
`

const RegularButton: FC<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            {props.icon}
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    )
}

export default RegularButton