import React from 'react'

const Button = ({ children, handler, type }) => (
  <button
    className='waves-effect waves-light btn'
    onClick={handler ? () => handler() : () => {}}
    type={type ? type : 'text'}
  >
    {children}
  </button>
)

export default Button
