import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../paginas/BemVindo/BemVindo';
import Login from '../paginas/Login/Login';
import Feed from '../paginas/Feed/Feed'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component={BemVindo}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Feed"
                component={Feed}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}