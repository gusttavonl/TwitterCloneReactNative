import React from 'react'
import { Image, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Feed from './pages/Feed'
import { TextHome } from './styles';

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    }, {
        defaultNavigationOptions: { // configuracoes pra todas as telas
            headerTitleAlign: 'center', // forçar a logo a ficar no centro
            headerTitle: <TextHome>Home</TextHome>, // titulo do header com o component nativo de imagem e seu source
        }
    }),
)

export default Routes;