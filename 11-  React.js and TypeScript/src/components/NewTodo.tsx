import React, { useRef } from "react"

type NewTodoProps = {
  onAddTodo: (todoText: string) => void
}

export const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const entredText = textInputRef.current!.value
    onAddTodo(entredText)
  }
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" name="" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
}
