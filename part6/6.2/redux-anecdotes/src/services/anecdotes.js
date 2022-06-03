import axios from 'axios'
import AnecdoteList from '../components/AnecdoteList'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (content) => {
  const object= {content, votes: 0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

const newVote = async (new_object) => {
  const response = await axios.put(`${baseUrl}/${new_object.id}`, new_object)
  return response.data

}
export default { getAll, createAnecdote, newVote }
