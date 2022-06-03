const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogsRouter.get('/', async (request, response) => {
    blogs= await Blog.find({}).populate('user')
    response.json(blogs)
    })


blogsRouter.post('/', async (request, response, next) => {
  const body=request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const Newblog = new Blog({
    title: body.title,
    Author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id
  
  }
  
  )
    const savedBlog = await Newblog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog)
  })



blogsRouter.delete('/:id', async (request, response)=> {
  await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

blogsRouter.get('/:id', async (request, response)=> {
  blog = await Blog.findById(request.params.id)
    response.json(blog)
})

blogsRouter.put('/:id', async (request, response)=> {
  const body = request.body
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }
  updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog,{new: true})
    response.json(updatedBlog)
})







module.exports = blogsRouter