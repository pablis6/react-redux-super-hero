import React from 'react'
import { connect } from 'react-redux'
import { guantelete } from '../actions'

const Guantelete = ({ dispatch }) => {

  return (
    <div>
      <span>Guantelede de: </span>
      <button onClick={() => dispatch(guantelete())}>Thanos</button>
    </div>
  )
}

export default connect()(Guantelete)