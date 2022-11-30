import React from 'react'
import ReduxContext from './ReduxContext'

export default function Provider(props) {
    const {store,children} = props
  return (
    <ReduxContext.Provider value={{store}}>
        {children}
    </ReduxContext.Provider>
  )
}
