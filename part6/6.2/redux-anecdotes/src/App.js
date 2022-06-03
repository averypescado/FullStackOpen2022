import React, {useEffect} from 'react'
import {useDispatch } from 'react-redux'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import {addVote} from './reducers/anecdoteReducer'
import {addAnecdote} from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'




const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App