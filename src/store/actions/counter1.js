import * as actionTypes from '../action-type'
const actions = {
    add(){
        return {type:actionTypes.ADD1}
    },
    odd(){
        return {type:actionTypes.ODD1}
    },
    thunk(){
        return function(dispatch,getState){
            setTimeout(()=>{
                dispatch({type:actionTypes.ADD1})
            },2000)
        }
    }
}
export default actions