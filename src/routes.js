import React from 'react'
import { Image, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Feed from './pages/Feed'
import { LogoHome } from './styles';

const logoUrl = "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-6.png"
const Routes = createAppContainer(
    createStackNavigator({
        Feed
    }, {
        defaultNavigationOptions: { // configuracoes pra todas as telas
            headerTitleAlign: 'center', // forçar a logo a ficar no centro
            headerTitle: <LogoHome source={{uri: logoUrl}} />, // titulo do header com o component nativo de imagem e seu source
            headerStyle: {
                backgroundColor: 'black',
                height:100
            }
        }
    }),
)

export default Routes;