import { inject } from 'react-web-component-injector'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import Reducer from './shared/reducer'

import ExampleReact from './components/example-react/ExampleReact'

const dev = process.env.NODE_ENV !== 'production'

const createStoreWithMiddleware = compose(
  dev ? applyMiddleware(createLogger()) : f => f
)(createStore)

const store = createStoreWithMiddleware(
  combineReducers({
    exampleReactDemo: Reducer
  })
)

inject(
  {
    'Example-React': ExampleReact
  },
  {
    store
  }
)
