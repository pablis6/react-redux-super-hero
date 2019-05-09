let nextSHId = 0
export const addSuperHero = (name, description) => ({
  type: 'ADD_SUPERHERO',
  id: nextSHId++,
  name,
  description
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleHero = id => ({
  type: 'TOGGLE_HERO',
  id
})
export const guantelete = () => 
  ({
    type: 'GUANTELETE'
  })
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_VIVOS: 'SHOW_VIVOS',
  SHOW_MUERTOS: 'SHOW_MUERTOS'
}