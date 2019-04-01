import React, {Component} from 'react'
import { Button, View, Text } from 'react-native'
import {connect} from 'react-redux'
import { searchChanged, getMovies } from '../actions'
import { MYAPP_TIC_TAC_TOE } from '../routes'
import { Header, SearchBar } from '../components/uikit'
import { width } from '../../constants'

class HomeScreen extends Component {
  state = {
    visibleSearchbar: false
  }

  _onChangeText = text => {
    this.props.searchChanged(text)
    this.props.getMovies({phone: text, password: '1EC02B0'})
  }

  render() {
    const {navigation, movie, data} = this.props
    const {visibleSearchbar} = this.state
    console.log(this.props)
    
    return (
      <View>
        { visibleSearchbar ? 
          <SearchBar 
            colorRight={'#fff'}
            iconRight='magnify'
            placeholder="Search"
            onChangeText={this._onChangeText}
            value={movie}
            onPressRight={() => this.setState({ visibleSearchbar: false})}
            onBlur={() => this.setState({visibleSearchbar: true})}
          /> : 
          <Header
            title='Games 1' 
            colorRight={'#fff'}
            iconRight='magnify'
            onPressRight={() => this.setState({visibleSearchbar: true})}
          />
        }
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gold' }}
        >
          <View style={{
            flexDirection: 'row', 
            width: width - 60,
            margin: 50, 
            justifyContent: 'center' }}
          >
            <Button 
              title='Play Game "Tic Tac Toe"' 
              onPress={() => navigation.navigate(MYAPP_TIC_TAC_TOE, ({ onGoBack: this.onGoBack}))}
            />
          </View>
          <Text>
            {data && data.access_token}
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { 
    movie: state.search.movie,
    data: state.search.data
  }
}
export default connect(mapStateToProps, {searchChanged, getMovies})(HomeScreen)
