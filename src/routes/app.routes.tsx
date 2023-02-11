import React from 'react'

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//types
import { RootStackParamList } from '../@types/routesTypes';

// screens
import Home from '../screens/Home';
import Details from '../screens/Details';

const AppRoutes = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    return (
        
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Details" component={Details} options={({navigation}) => ({
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => <Icon name={'keyboard-backspace'} size={26} color={'#FFF'} onPress={() => {navigation.goBack()}}/>
            })}/>
        </Stack.Navigator>
    )
}

export default AppRoutes