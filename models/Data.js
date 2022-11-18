
const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
  car: String,
  model: String,
  color: String
})


const Data = mongoose.models.Data || mongoose.model('Data', DataSchema)

export default Data