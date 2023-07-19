const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    // enum: ['Conferencia', 'Taller', 'Seminario']
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String,
  place: String,
  price: {
    type: Number,
    min: 0
  },
  capacity: {
    type: Number,
    min: 0
  },
  assistance: {
    type: Number,
    min: 0
  }
})

// creando métodos

eventSchema.methods.getFormattedDate = () => this.date.toLocaleDateString()

eventSchema.methods.changeName = (newName) => this.name = newName

// creando modelo a partir del esquema
const Event = mongoose.model('Evento', eventSchema)

// exportando
module.exports = Event