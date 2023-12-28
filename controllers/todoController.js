const Todo = require('./../models/todoModel')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')


exports.getAllTodos = catchAsync(async (req, res, next) => {
    const todos = await Todo.find()

    res.status(200).json({
        status: 'success',
        data: {
            todos
        }
    })
})

exports.getTodo = catchAsync(async (req, res, next) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        return next(new AppError(`No todo by the id ${req.params.id} exists`, 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            todo
        }
    })
})

exports.createTodo = catchAsync(async (req, res, next) => {
    if(req.body.task.trim() === '') {
        return next(new AppError('Please provide a Todo task', 400))
    }

    const newTodo = await Todo.create(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            todo: newTodo
        }
    })
})

exports.updateTodo = catchAsync(async (req, res, next) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})

    if(!todo) {
        return next(new AppError(`No todo by the id ${req.params.id} exists`, 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            todo
        }
    })
})

exports.deleteTodo = catchAsync(async (req, res, next) => {
    const todo = await Todo.findByIdAndDelete(req.params.id)

    if(!todo) {
        return next(new AppError(`No todo by the id ${req.params.id} exists`, 404))
    }

    res.status(204).json({
        status: 'success',
        data: {
            todo: null
        }
    })
})