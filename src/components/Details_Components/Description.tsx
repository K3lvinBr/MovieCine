import React, { FC } from 'react'
import styled from 'styled-components/native'

//types
import { ItemsProps } from '../../@types/dataTypes'

//components
import SmallText from '../Texts/SmallText'

const DescriptionBackround = styled.View`
    padding: 30px;
`

const Description: FC<ItemsProps> = ({data}) => {
    return (
        <DescriptionBackround>
            <SmallText textStyles={{fontSize: 14}}>
                {data.overview || 'Descrição não disponível para sua lingua'}
            </SmallText>
        </DescriptionBackround>

    )
}

export default Description