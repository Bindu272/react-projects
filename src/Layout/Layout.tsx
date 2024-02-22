import React from 'react'
import './Layout.css'

const Layout = (props:any) => {
  return (
    <div className='app-body' data-testid="test-child">
     {props.children}
    </div>
  )
}

export default Layout
