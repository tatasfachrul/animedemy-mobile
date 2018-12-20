import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import promiseMiddleware from 'redux-promise-middleware'

// store akan menyimpan data reducer
const store = createStore(
    reducers,
    applyMiddleware(
        promiseMiddleware()
    ),
)

export default store