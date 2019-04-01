import {createStackNavigator} from 'react-navigation'
import {MAIN_SCREEN, SECOND_SCREEN} from '../routes'
import MainScreen from './MainScreen'
import SecondScreen from './SecondScreen'

export default createStackNavigator({
  [MAIN_SCREEN]: MainScreen,
  [SECOND_SCREEN]: SecondScreen
})
