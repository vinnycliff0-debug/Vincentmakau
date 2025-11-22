import React from 'react'
import PropTypes from 'prop-types'

export default function Button({variant='primary', children, ...props}){
  const base = 'px-4 py-2 rounded-md font-medium'
  const styles = {
    primary: `${base} bg-primary text-white`,
    secondary: `${base} bg-secondary text-white`,
    outline: `${base} border border-neutral-300 text-neutral-800 bg-white`
  }
  return (
    <button className={styles[variant]} {...props}>{children}</button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary','secondary','outline']),
  children: PropTypes.node
}
