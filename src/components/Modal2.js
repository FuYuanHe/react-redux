import React, { useImperativeHandle, forwardRef } from "react";
import { Modal } from 'antd'

const Modal2 = forwardRef((_, ref) => {
    useImperativeHandle(ref, () => ({
        setLook
    }))
    const setLook = () => {
        setShow(true)
    }
    const [show, setShow] = React.useState(false)
    const closeModal1 = () => {
        setShow(false)
    }

    return (
        <Modal
            open={show}
            width={1200}
            destroyOnClose
            cancelText="取消"
            onCancel={closeModal1}
        >
            我是模态框2
        </Modal>
    )
})

export default React.memo(Modal2)
