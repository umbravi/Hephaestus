import './polyfills'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createStore from './app/composition/store'
import { middleware } from './app/composition/middleware'
import { Main, run } from './app/main'
import * as serviceWorker from './tools/serviceWorker'

const history = createBrowserHistory()

const store = createStore({}, [...middleware(history)], history)

run()

ReactDOM.render(
  Main(store, history, ConnectedRouter),
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// possible code for persisting store through hot reload if needed

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import * as serviceWorker from './tools/serviceWorker'

// // Add this import:
// import { AppContainer } from 'react-hot-loader'

// // Wrap the rendering in a function:
// const render = () => {
//   ReactDOM.render(
//     // Wrap App inside AppContainer
//     <AppContainer>
//       <App />
//     </AppContainer>,
//     document.getElementById('root'),
//   )
// }

// // Render once
// render()

// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render()
//   })
// }

// serviceWorker.unregister()
