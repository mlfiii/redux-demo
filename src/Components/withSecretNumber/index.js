import React from 'react'

const withSecretNumber = Component => props => {
  const secretNumber = 42

  return <Component secretNumber={secretNumber} {...props} />
}

export default withSecretNumber
