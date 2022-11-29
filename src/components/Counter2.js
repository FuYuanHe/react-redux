import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import actions  from '../store/actions/counter2';
import store from '../store'

const bindActions = bindActionCreators(actions,store.dispatch)
console.log(bindActions);
// 将actions由{add(){return {type:ADD}}} 变成{add(){dispatch(add())}}
export default class Counter1 extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState().reducer2
    }
    componentDidMount(){
        this.unSub = store.subscribe(()=>{
            this.setState(store.getState().reducer2)
        })
    }
    componentWillUnmount(){
        this.unSub()
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={bindActions.add}>增加</button>
                <button onClick={bindActions.odd}>减少</button>
            </div>
        )
    }
}
