import React, { useState } from 'react';
import styles from './NewTodo.module.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

function NewTodo({ getNewTodo }) {
	const [newTodo, setNewTodo] = useState('');

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (newTodo.trim() === '') {
			return;
		}

		getNewTodo({ id: uuidv4(), text: newTodo, status: 'active' });
		setNewTodo('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add Todo"
					value={newTodo}
					onChange={handleChange}
				/>
				<button>
					<AiFillPlusCircle />
				</button>
			</form>
		</div>
	);
}

export default NewTodo;
