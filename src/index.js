import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Game from 'components/Game'
import './styles/index.styl'

ReactDOM.render(
  <AppContainer>
    <Game/>
  </AppContainer>,
  document.getElementById('root'),
)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept()
}
