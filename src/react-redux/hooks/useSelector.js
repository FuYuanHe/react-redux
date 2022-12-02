import React from "react";
import ReduxContext from "../ReduxContext";
function useSelector(selector){
    const {store} = React.useContext(ReduxContext)
    const state = store.getState()
    let [,forceUpdate] = React.useReducer(x=>x+1,0)
    React.useLayoutEffect(()=>{
        store.subscribe(()=>{
            forceUpdate()
        })
    },[store])
    return selector(state)
}
export default useSelector