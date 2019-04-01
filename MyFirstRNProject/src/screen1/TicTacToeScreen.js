import React, {Component} from 'react'
import {StyleSheet, ScrollView, TouchableOpacity, Switch, Text, View} from 'react-native'
import { calculateWinner, getDifference } from '../components/helpers'
import { Board, Header } from '../components/uikit'

const geoJson = 'https://auth.135.by/driver/token'

export default class TicTacToeScreen extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true,
    hightlightedSquare: null,
    boardSize: 3,
    historyOrderDesc: false,
    token: 'empty'
  }
 componentDidMount = async () => {
   fetch(geoJson, {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       phone: '375297777001',
       password: '1EC02B0'
     })
   })
     .then((responce) => {
       console.log(responce)
       return responce.json()
     })
     .then((json) => {
       console.log(json)
       this.setState({token: json.access_token})
     })
     .catch((error) => {
       console.log(error)
     })
 }
  
 handleClick(i) {
   const history = this.state.history.slice(0, this.state.stepNumber + 1)
   const current = history[history.length - 1]
   const squares = current.squares.slice()
   if (calculateWinner(squares) || squares[i]) {
     return
   }
   squares[i] = this.state.xIsNext ? 'X' : 'O'
   this.setState({
     history: history.concat([{squares}]),
     stepNumber: history.length,
     xIsNext: !this.state.xIsNext
   })
 }

 jumpTo(move) {
   this.setState({
     stepNumber: move,
     xIsNext: move % 2 === 0
   })
 }

 hightlightSquare(position) {
   this.setState({
     hightlightedSquare: position
   })
 }

 render() {
   const {navigation} = this.props
   const history = this.state.history
   const current = history[this.state.stepNumber]
   const winner = calculateWinner(current.squares)

   const moves = history.map((step, move) => {
     const position = move ? getDifference(history[move].squares, history[move - 1].squares) : null
     return (
       // eslint-disable-next-line react/no-array-index-key
       <TouchableOpacity
         key={position}
         onPress={() => this.jumpTo(move)}
         onPressIn={() => this.hightlightSquare(position)}
         onPressOut={() => this.hightlightSquare(null)}
       >
         <Text>{
           `Ход #${move}: ${ 
             move 
               ? `Перейти к ходу №${move  
               }: [${[position / this.state.boardSize | 0, position % this.state.boardSize]}]` 
               : 'К началу игры'}`
         }
         </Text>
       </TouchableOpacity>
     )
   })
    
   let status
   if (winner) {
     status = `Выиграл ${current.squares[winner[0]]}`
   } else if (current.squares.some(s => s === null)) { status = `Следующий ход: ${this.state.xIsNext ? 'X' : 'O'}` } else { status = 'Ничья' }
   const {game, gameInfo, scrollView, gameBoards, switchStyle} = styles
   return (
     <View style={{backgroundColor: 'gold', flex: 1}}>
       <Header 
         title='TicTacToe Game' 
         onPressLeft={() => navigation.goBack()}
         iconLeft='ios-arrow-back'
         colorLeft="#fff"
       />
       <View style={game}>
         <ScrollView style={scrollView}>
           <View style={gameBoards}>
             <Board 
               hightlightedSquare={this.state.hightlightedSquare}
               boardSize={this.state.boardSize}
               squares={current.squares}
               onClick={(i) => this.handleClick(i)}
             />
           </View>
         </ScrollView> 
         <View style={gameInfo}>
           <View><Text>{status.toUpperCase()}</Text></View>
           <View style={{display: 'flex', flexDirection: 'row'}}>
             <Text>Сортировать по убыванию: </Text>
             <Switch
               value={this.state.historyOrderDesc} 
               onValueChange={(checked) => {
                 this.setState({
                   historyOrderDesc: checked
                 })
               }}
               style={switchStyle}
             />
           </View>
           <View>
             {this.state.historyOrderDesc ? moves.reverse() : moves}
           </View>
         </View>
       </View>
     </View>
   )
 }
}

const styles = StyleSheet.create({
  status: {
    marginBottom: 10
  },
  game: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  gameInfo: {
    flex: 1,
    marginLeft: 20
  },
  scrollView: {
    flex: 1
  },
  gameBoards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'center'
  },
  switchStyle: {
    height: 21,
    width: 42
  }
})
