const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  todoID: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  handle: {
    type: String,
    require: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String
  },
  createdBy: {
    type: String,
    require: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  category: {
    type: String
  },
  todos: [
    {
      title: {
        type: String,
        require: true
      },
      completed: {
        type: Boolean,
        default: false
      }
    }
  ]
});

module.exports = Todos = mongoose.model("todos", TodosSchema);
