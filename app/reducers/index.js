import { combineReducers } from 'redux';
import videoReducers from './videoReducers'
import userReducers from './userReducers'
import popularReducers from './popularReducers'

const reducers = combineReducers({
    videoReducers,
    userReducers,
    popularReducers
})

export default reducers