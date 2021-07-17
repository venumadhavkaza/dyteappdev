import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'

const screens = {
    Home:{
        screen: Home
    }
}
const homestack = createStackNavigator(screens)

export default createAppContainer(homestack);