import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'

const HeroList = ({ heroes, toggleHero }) => (
  <ul>
    {heroes.map(hero =>
      <Hero
        key={hero.id}
        {...hero}
        onClick={() => toggleHero(hero.id)}
      />
    )}
  </ul>
)

HeroList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    vivo: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleHero: PropTypes.func.isRequired
}

export default HeroList