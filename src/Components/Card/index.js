import React from 'react'

const Card = ({ children, title }) => (
  <div className='row'>
    <div className='col m12'>
      <div className='card blue-grey darken-1'>
        <div className='card-content white-text'>
          <span className='card-title'>{title}</span>
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default Card
