import React from 'react'
import './Layout.css'

const Layout = (props:any) => {
  return (
    <div className='app-body'>
     {props.children}
    </div>
  )
}

export default Layout
