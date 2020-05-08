import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginPage from '../pages/auth/LoginPage'
const Stack = createStackNavigator();
export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}