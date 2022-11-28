import * as actionTypes from '../action-type'
function reducer(state={number:0},action){
    switch (action.type) {
        case actionTypes.ADD1:
            return {number:state.number +1}
        case actionTypes.ODD1:
            return {number:state.number -1}
        default:
            return state;
    }
}
export default reducer