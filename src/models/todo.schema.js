const { Schema, model } = require('mongoose')

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: {
        values: ['ongoing', 'done'],
        message: '{VALUE} is not supported',
        default: 'ongoing',
      },
    },
  },
  { timestamps: true, validateBeforeSave: true }
)

module.exports = model('Todo', todoSchema)
