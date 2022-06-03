const http = require('http')
 const express = require('express')
 const app = express()
 const cors = require('cors')
 app.use(express.json())
 app.use(cors())


 const mongoose = require('mongoose')

//  const corsOption = {
//    origin: 'http://localhost:3003',
//    credentials: true,
//    optionSuccessStatus: 200

//  }

 const mongoUrl = 'mongodb+srv://Afishy1:BarryBonds25@cluster0.rkrb2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 mongoose.connect(mongoUrl)
    .then(result => {
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })

 const blogSchema = new mongoose.Schema({
   title: String,
   author: String,
   url: String,
   likes: String
 })

 const Blog = mongoose.model('Blog', blogSchema)



 app.get('/api/blogs', (request, response) => {
   Blog
     .find({})
     .then(blogs => {
       response.json(blogs)
     })
 })

 app.post('/api/blogs', async (request, response) => {
  const body=request.body
  const Newblog = new Blog({
    title: body.title,
    Author: body.author,
    url: body.url,
    likes: body.likes

  }

  )
  try {
    const savedBlog= await Newblog.save()
    response.status(200).json(savedBlog)
  }
  catch (error) {
    response.status(500).json(error)

  }
})



app.get('/', (request, response) => {
    Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})


const PORT = process.env.PORT || 3003
 app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`)
 })
