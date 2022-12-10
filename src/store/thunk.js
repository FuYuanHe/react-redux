function thunk({getState,dispatch}){
    return function(next){
        return function(action){
            // 如果接收的action是一个函数，就执行函数传递参数
            // 如果传递的action是promise，就then它
            if(typeof action === 'function'){
                return action(dispatch,getState)
            }
            return next(action)
        }
    }
}
export default thunk