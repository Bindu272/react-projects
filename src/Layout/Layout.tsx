import React from 'react'
import Home from '../Screens/Home/Home'
import './Layout.css'

const Layout = (props:any) => {
  return (
    <div className='app-body'>
     {props.children}
    </div>
  )
}

export default Layout
