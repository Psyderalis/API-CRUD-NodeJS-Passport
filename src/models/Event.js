const mongoose = require('mongoose')

const eventObj = {
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
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
  },
  estimate: {
    type: Number,
    min: 0
  }
}

const Schema = mongoose.Schema

const eventSchema = new Schema(eventObj)

// creando métodos

// eventSchema.methods.getFormattedDate = () => this.date.toLocaleDateString()

// eventSchema.methods.changeName = (newName) => this.name = newName

// creando modelo a partir del esquema
const EventModel = mongoose.model('Event', eventSchema)

// exportando
module.exports = {
  EventModel,
  eventObj
}