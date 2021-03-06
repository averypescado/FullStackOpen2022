import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'

import {setNotification} from '../reducers/notificationReducer'
import {clearNotification} from '../reducers/notificationReducer'



const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const placevote = (anecdote) => {
    dispatch(addVote(anecdote))
    dispatch(setNotification(`You voted for "${anecdote.content}"`,300))
  }


return (
<div>
<h2>Anecdotes</h2>
{anecdotes.map(anecdote =>
  <div key={anecdote.id}>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={() => placevote(anecdote)}>vote</button>
    </div>
  </div>
)}
</div>
)
}

export default AnecdoteList