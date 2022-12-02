import React from "react";
import ReduxContext from "../ReduxContext";
import { bindActionCreators } from "../../redux";

function useBoundDispatch(actions){
    const {store} = React.useContext(ReduxContext)
    return bindActionCreators(actions,store.dispatch)
}
export default useBoundDispatch