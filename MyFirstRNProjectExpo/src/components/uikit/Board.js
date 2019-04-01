import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Square } from './Square'
import { calculateWinner } from '../helpers'

class Board extends React.Component {
  createBoard(size) {
    const board = []
  
    for (let i = 0; i < size; i++) {
      const squares = []
      for (let j = 0; j < size; j++) {
        squares.push(this.renderSquare((i * size) + j))
      }   
      board.push(<View
        style={styles.boardRow} 
        key={i}
      >{squares}</View>)
    }
    return board
  }

  renderSquare(i) {
    const winner = calculateWinner(this.props.squares) || (i === this.props.hightlightedSquare ? [i] : [])
    return (<Square
      key={i}
      value={this.props.squares[i]} hightlighted={winner.some(w => w === i)}
      onClick={() => this.props.onClick(i)}
    />)
  }
  
  render() {
    return (
      <View style={styles.board}>
        {this.createBoard(this.props.boardSize)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  boardRow: {
    flexDirection: 'row'
  },
  board: {
    shadowColor: '#fff',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    margin: 10
  }
})

export {Board}
