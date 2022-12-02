import React, { Component } from 'react'
import {connect} from '../react-redux'
import actions  from '../store/actions/counter1';
// 将actions由{add(){return {type:ADD}}} 变成{add(){dispatch(add())}}
class Counter1 extends Component {
    
    render() {
        // const modalRef = useRef(null)
        const {add,odd,number} = this.props
        return (
            <div>
                <p>{number}</p>
                <button onClick={add}>增加</button>
                <button onClick={odd}>减少</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => state.reducer1
export default connect(
    mapStateToProps,
    actions
)(Counter1)
