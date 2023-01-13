import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './TodoItem.module.css';

function TodoItem({ todo, onDelete }) {
	const handleDelete = () => {
		onDelete(todo);
	};

	return (
		<ul id={todo.text} className={styles.todo}>
			<p>✅</p>
			<p>{todo.text}</p>
			<button onClick={handleDelete}>
				<BsFillTrashFill />
			</button>
		</ul>
	);
}

export default TodoItem;
