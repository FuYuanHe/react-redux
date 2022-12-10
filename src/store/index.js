import {createStore,applyMiddlewares} from './../redux'
import reducer from './reducers'
import logger from './logger'
import thunk from './thunk'

let store = applyMiddlewares(thunk,logger)(createStore)(reducer,{counter1:{number:0}})
export default store