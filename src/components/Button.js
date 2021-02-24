import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'

const Button = ({ children, link }) => {
  return (
    <>
      <AnchorLink className="btn" to={`/ ${link ? link : ''}`}>
        {children}
      </AnchorLink>
    </>
  )
}

export default Button
