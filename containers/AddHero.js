import React from 'react'
import { connect } from 'react-redux'
import { addSuperHero } from '../actions'

const AddHero = ({ dispatch }) => {
  let input;
  let description;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() || !description.value.trim()) {
          return
        }
        dispatch(addSuperHero(input.value, description.value))
        input.value = '';
        description.value = '';
      }}>
        <label>
        Superheroe: <input ref={node => input = node} />
        </label>
        <br/>
        <label>
        Descripción: <textarea ref={node => description = node}></textarea>
        </label>
        <br/>
        <button type="submit">
          Añadir superheroe
        </button>
      </form>
    </div>
  )
}

export default connect()(AddHero)