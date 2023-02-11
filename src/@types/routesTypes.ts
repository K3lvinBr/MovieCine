import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Details: Number;
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>

export type Props = NativeStackScreenProps<RootStackParamList, 'Details'>