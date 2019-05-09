import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import Guantelete from '../containers/Guantelete'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_VIVOS}>
      Vivos
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_MUERTOS}>
      Muertos
    </FilterLink>
  </div>
)

export default Footer