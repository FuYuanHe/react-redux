

// 中间件，即重写store.dispatch方法
function logger({getState,dispatch}){
    return function(oldDispatch){
        return function(action){
            console.log('prev state',getState());
            oldDispatch(action)
            console.log('next statr',getState());
            return action
        }
    }
}

export default logger