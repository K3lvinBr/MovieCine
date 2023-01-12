import React from 'react'

// react-navigation

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//types
import { RootStackParamList } from '../@types/routesTypes';

// screens
import Home from '../screens/Home';

const AppRoutes = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default AppRoutes