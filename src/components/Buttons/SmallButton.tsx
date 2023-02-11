import React, { FC } from 'react'
import styled from 'styled-components/native'

// components
import SmallText from '../Texts/SmallText'

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
`;


const SmallButton: FC<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            {props.icon}
            <SmallText textStyles={props.textStyles}>{props.children}</SmallText>
        </ButtonView>
    )
}

export default SmallButton