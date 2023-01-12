import React, { FunctionComponent } from 'react'
import ProgressBar from 'react-native-animated-progress';
import { THEME } from '../../assets/styles/theme';
import { HeaderProgressProps } from './types';

const HeaderProgress: FunctionComponent<HeaderProgressProps> = ({progressValue, progressReset}) => {
    return (
        <ProgressBar progress={progressValue} animated={progressReset} backgroundColor={THEME.colors.primary} trackColor='transparent' />
    )
}

export default HeaderProgress