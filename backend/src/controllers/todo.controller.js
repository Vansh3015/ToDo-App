// const todo = require('../models/todo.model');
// const createTodo = async (req, res) => {
//     try {
//         const todo = await Todo.create(req.body);
//         res.status(200).send("created successfully");
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// const getTodo = async (req, res) => {
//     try {
//         const todos = await Todo.find();
//         res.status(200).json(todos);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };  

// modules.exports = { createTodo, getTodo };

const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
  try{
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
  }catch(error){
    res.status(400).json({ error: error.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({
    message: "Deleted" 
    });
    
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo  
}