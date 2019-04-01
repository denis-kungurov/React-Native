import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import TicTacToeScreen from './TicTacToeScreen'
import {
  MYAPP_HOME,
  MYAPP_TIC_TAC_TOE
} from '../routes'

export default createStackNavigator(
  {
    [MYAPP_HOME]: HomeScreen,
    [MYAPP_TIC_TAC_TOE]: TicTacToeScreen
  },
  {
    headerMode: 'none'
  }
)
