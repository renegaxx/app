import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './cadastro';
import Login from './login';
import Home from './home';
import Inicio from './inicio';
import Usuario from './usuario';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen
                    name="inicio"
                    component={Inicio}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen   
                    name="cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="usuario"
                    component={Usuario}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
