import React,{useImperativeHandle,forwardRef} from "react";
import {Modal}from 'antd'

// _,ref 函数组件需要的两个参数，第一个是props,不使用可以使用占位符，但是不能没有，第二参数是ref，也就是在父组件中给子组件添加的ref属性
// useImperativeHandle这个hook就是给该ref添加对应的各种属性，这样就可以在父组件中调用这些方法以达到父子组件之间的数据共享
const Modal1 = forwardRef((_,ref)=>{
    useImperativeHandle(ref,()=>({
        setLook
    }))
    const [show,setShow] = React.useState(false)
    const closeModal1 = ()  => {
        setShow(false)
    }
    const setLook = () => {
        setShow(true)
    }
    return (
        <Modal
            open={show}
            width={1200}
            destroyOnClose
            cancelText="取消"
            onCancel={closeModal1}
        >
            我是模态框1
        </Modal>
    )
})

export default React.memo(Modal1)
