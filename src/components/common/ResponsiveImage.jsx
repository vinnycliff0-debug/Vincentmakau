import React from 'react'
import PropTypes from 'prop-types'

export default function ResponsiveImage({src, alt, className = '', width, height, srcSet}){
  return (
    <img
      src={src}
      srcSet={srcSet}
      loading="lazy"
      alt={alt}
      width={width}
      height={height}
      className={`w-full h-full object-cover ${className}`}
    />
  )
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  srcSet: PropTypes.string
}

