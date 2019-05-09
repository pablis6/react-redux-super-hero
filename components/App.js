import React from 'react'
import Footer from './Footer'
import AddHero from '../containers/AddHero'
import VisibleHeroList from '../containers/VisibleHeroList'
import Guantelete from '../containers/Guantelete'

const App = () => (
  <div>
    <AddHero />
    <VisibleHeroList />
    <Guantelete />
    <Footer />
  </div>
)

export default App