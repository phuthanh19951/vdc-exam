import mongoose, { Schema } from 'mongoose'

const TrackSchema: Schema = new Schema({
  clientIP: {
    type: String,
    required: true,
  },
  action: {
    type: String,
  },
  keyword: {
    type: Object
  },
  product: {
    type: String
  }
}, {
  timestamps: true
})

export default mongoose.model('Track', TrackSchema)

