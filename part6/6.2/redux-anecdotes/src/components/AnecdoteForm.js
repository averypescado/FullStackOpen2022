import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addAnecdote} from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const NewAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.body.value
    event.target.body.value=''
    dispatch(addAnecdote(content))
  }


return (
  <div>
  <h2>create new</h2>
  <form onSubmit={NewAnecdote}>
    <div><input name="body"/></div>
    <button type="submit">create</button>
  </form>
  </div>
  )
}

export default AnecdoteForm