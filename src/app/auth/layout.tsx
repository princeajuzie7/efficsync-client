"use client"
import NotSignedhoc from '@/helper/hoc/notSignedhoc'
import React from 'react'

export  function layout({children}: {children: React.ReactNode}) {
  return (
      <div>
          {children}
    </div>
  )
}

const Layout = NotSignedhoc(layout)

export default Layout