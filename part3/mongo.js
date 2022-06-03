const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]


const url =
  `mongodb+srv://Afishy1:${password}@cluster0.rkrb2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)



const numberSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Number = mongoose.model('Number', numberSchema)



if (process.argv.length ==3 ) {
  Number.find({}).then(result => {
    result.forEach(number => {
      console.log(number)
    })
    mongoose.connection.close()
  })
}


if (process.argv.length ==4 ) {
  const number = new Number({
    name: process.argv[3],
    number: rocess.argv[4],
  })

  number.save().then(result => {
    console.log('number saved!')
    mongoose.connection.close()
  })

}

