import React from 'react'
import styled from 'styled-components/native'

//redux
import { useSelector } from 'react-redux'
import { useItem } from '../../redux/sliceGetDetailMovie'

//components
import SmallText from '../Texts/SmallText'

const DescriptionBackround = styled.View`
    padding: 30px;
`

const Description = () => {

    const dataMovie = useSelector(useItem)

    return (
        <DescriptionBackround>
            <SmallText textStyles={{ fontSize: 14 }}>
                {dataMovie.overview || 'Descrição não disponível para sua lingua'}
            </SmallText>
        </DescriptionBackround>

    )
}

export default Description