import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Screen from './src/screen1'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(ReduxThunk))
)

const App = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  )
}

export default App
