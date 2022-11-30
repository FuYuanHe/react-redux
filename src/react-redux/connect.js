import React from "react"
import ReduxContext from "./ReduxContext"
import {bindActionCreators} from '../redux'
// connect是一个高阶组件，返回一个全新的组件
function connect(mapStateToProps,actions){
    // 返回一个函数
    return function(OldComponent){
        // 返回一个组件
        return class extends React.Component{
            // 获取context
            static contextType = ReduxContext
            constructor(props,context){
                console.log('context',context);
                super(props)
                // 解构
                const {store} = context
                const {getState,subscribe,dispatch} = store
                // 设置初始状态
                this.state = mapStateToProps(getState())
                // 每次订阅设置最新状态并保存取消订阅的函数
                this.unsub =  subscribe(()=>{
                    this.setState(mapStateToProps(getState()))
                })
                // 得到整合后的actionCreators
                this.dispatchProps = bindActionCreators(actions,dispatch)
            }
            // 组件卸载取消订阅
            componentWillUnmount(){
                this.unsub()
            }
            // 返回老组件并传递状态和整合后的actionCreators
            render(){
                return <OldComponent {...this.props} {...this.state} {...this.dispatchProps}/>
            }
        }
    }
}
export default connect