import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos, setTodos }) {
	const onDelete = (deleted) => {
		setTodos(todos.filter((t) => t.id !== deleted.id));
	};
	return (
		<div>
			{todos.map((todo) => {
				return <TodoItem key={todo.text} todo={todo} onDelete={onDelete} />;
			})}
		</div>
	);
}

export default TodoList;
