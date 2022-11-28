import * as actionTypes from '../action-type'
function reducer(state={number:100},action){
    switch (action.type) {
        case actionTypes.ADD2:
            return {number:state.number +1}
        case actionTypes.ODD2:
            return {number:state.number -1}
        default:
            return state;
    }
}
export default reducer