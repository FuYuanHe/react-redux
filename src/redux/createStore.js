function createStore(reducer){
    // 初始state
    let state
    // 监听数组
    let listeners = []
    function getState(){
        return state
    }
    function dispatch(action){
        state = reducer(state,action)
        listeners.forEach(l => l())
    }
    // 订阅函数
    function subscribe(listener){
        listeners.push(listener)
        // 返回一个结束监听的函数
        return ()=> {
            listeners =  listeners.filter(l => l !== listener)
        }
    }
    // 立即调用，给state赋值
    dispatch({type:'INIT'})
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default createStore