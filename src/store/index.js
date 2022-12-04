import {createStore} from './../redux'
import reducer from './reducers'
import logger from './logger'
import thunk from './thunk'

function applyMiddleware(middleware){
    return function(createStore){
        return function(reducer,oldState){
            let store = createStore(reducer,oldState)
            let dispatch
            let middlewareAPI = {
                getState:store.getState,
                // 这里需要使用对象属性的赋值方式，
                dispatch: (action)=>dispatch(action)
            }
            dispatch = middleware(middlewareAPI)(store.dispatch)
            // 这是最终的store
            return {
                ...store,
                dispatch
            }
        }
    }
}
let store = applyMiddleware(thunk)(createStore)(reducer,{counter1:{number:0}})
export default store