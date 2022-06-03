require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Number = require('./models/number')


app.use(express.static('build'))
app.use(express.json())
app.use(morgan('combined'))
app.use(cors())




app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Number.find({}).then(people =>{
    response.json(people)
  })
})



app.post('/api/persons', (request, response) => {
    const body = request.body
    if (body.name === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const number = new Number({
      name: body.name,
      number: body.number
      }
    )

    number.save()
    .then((savedNumber) => savedNumber.toJSON())
    .then((savedAndFormattedNumber) => response.json(savedAndFormattedNumber))
    .then(savedNumber =>{response.json(savedNumber)})
    .catch(error => next(error))

});

app.get('/api/persons/:id', (request, response, next)=> {
  Number.findById(request.params.id).then(number => {
    if (number) {
      response.json(number)
    }
    else {
      response.status(404).end
    }
  })
  .catch(error => {
    next(error)

  })

})

app.delete('/api/persons/:id', (request, response, next) => {
  Number.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  else if (error.name === "ValidationError") {
    return response.status(406).json({ error: error.message });

  next(error)
};

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})