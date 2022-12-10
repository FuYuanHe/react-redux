import { compose } from "redux"

function applyMiddlewares(...middlewares){
    return function(createStore){
        return function(reducer,oldState){
            let store = createStore(reducer,oldState)
            let dispatch
            let middlewareAPI = {
                getState:store.getState,
                // 这里需要使用对象属性的赋值方式，
                dispatch: (action)=>dispatch(action)
            }
            let originDispatch = store.dispatch
            let chain = middlewares.map(item => item(middlewareAPI))
            dispatch = compose(...chain )(originDispatch)
            // dispatch = middleware(middlewareAPI)(store.dispatch)
            // 这是最终的store
            return {
                ...store,
                dispatch
            }
        }
    }
}

export default applyMiddlewares