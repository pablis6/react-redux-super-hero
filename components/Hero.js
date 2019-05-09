import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ onClick, vivo, name, description }) => (
  <li
    style={{
      textDecoration: !vivo ? 'line-through' : 'none'
    }}
  >
    {name} - {description} <button onClick={onClick} disabled={!vivo}>Matar</button>
  </li>
)

Hero.propTypes = {
  onClick: PropTypes.func.isRequired,
  vivo: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Hero