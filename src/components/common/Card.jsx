import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveImage from './ResponsiveImage'

function Card({title, body, image}){
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      {image && (
        <div className="w-full h-40 lg:h-48">
          <ResponsiveImage src={image} alt={`${title} image`} />
        </div>
      )}
      <div className="p-6">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="mt-3 text-neutral-600">{body}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default React.memo(Card)
