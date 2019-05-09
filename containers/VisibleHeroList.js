import { connect } from 'react-redux'
import { toggleHero } from '../actions'
import HeroList from '../components/HeroList'

const getVisibleHeroes = (heroes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return heroes
    case 'SHOW_VIVOS':
      return heroes.filter(h => h.vivo)
    case 'SHOW_MUERTOS':
      return heroes.filter(h => !h.vivo)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  heroes: getVisibleHeroes(state.heroes, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleHero: id => dispatch(toggleHero(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList)