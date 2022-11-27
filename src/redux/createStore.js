function createStore(reducer){
    let state
    function getState(){
        return state
    }
    function dispatch(){
        state = reducer(state,action)
    }
    // 立即调用，给state赋值
    dispatch({type:'INIT'})
    return {
        getState,
        dispatch,
    }
}
export default createStore