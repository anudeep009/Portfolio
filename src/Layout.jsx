import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavBar, Footer} from './index'

function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout