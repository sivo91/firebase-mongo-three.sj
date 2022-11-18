import React from 'react'
import Auth from './Auth'


const Layout = ({children}) => {
  return (
    <>
      <Auth/>
      {children}
    </>
  )
}

export default Layout