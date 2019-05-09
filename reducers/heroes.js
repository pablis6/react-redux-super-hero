const heroes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SUPERHERO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          vivo: true
        }
      ]
    case 'TOGGLE_HERO':
      return state.map(hero =>
        (hero.id === action.id)
          ? {...hero, vivo: false}
          : hero
      )
    case 'GUANTELETE': 
      return state.map(hero =>
        (hero.vivo === true)
          ? {...hero, vivo: Math.random(1) > 0.5 ? true : false}
          : hero
      )
    default:
      return state
  }
}

export default heroes