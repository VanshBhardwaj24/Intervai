import React, { ReactNode } from 'react'

const Authlayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='auth-Layout'>{children}</div>
  )
}

export default Authlayout