import React from 'react'
import PropTypes from 'prop-types'

export default function SectionWrapper({children, className=''}){
  return (
    <section className={`py-16 ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
