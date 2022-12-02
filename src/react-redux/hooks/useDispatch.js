import React from "react";
import ReduxContext from '../ReduxContext'

function useDispatch(){
    const {store} = React.useContext(ReduxContext)
    return store.dispatch
}
export default useDispatch