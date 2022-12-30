import React, { useState } from "react"
import { NewTodo } from "./components/NewTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  // const todos = [{ id: 't1', text: 'Finish the course' }];
  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: text }])
  }
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== todoId
      })
    })
  }
  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos}  onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App
