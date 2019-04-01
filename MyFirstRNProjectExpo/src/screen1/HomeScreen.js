import React, {Component} from 'react'
import { Button, View} from 'react-native'
import {connect} from 'react-redux'
import { searchChanged } from '../actions'
import { MYAPP_TIC_TAC_TOE } from '../routes'
import { Header, SearchBar } from '../components/uikit'
import { width } from '../../constants'

class HomeScreen extends Component {
  state = {
    visibleSearchbar: false
  }

  _onChangeText = text => {
    this.props.searchChanged(text)
  }

  render() {
    const {navigation} = this.props
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
          flexDirection: 'row',
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
        </View>
      </View>
    )
  }
}

export default connect(null, {searchChanged})(HomeScreen)
