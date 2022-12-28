import React, { useState } from 'react';

function AddTodo({ onAdd }) {
	const [text, setText] = useState('');

	const handleChange = (e) => setText(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim() === '') {
			// if (text.trim().length === 0) {
			return;
		}

		onAdd({ id: '고유한값', text, status: 'active' });
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="addForm"
				value={text}
				placeholder="Add Todo"
				onChange={handleChange}
			/>
			<button>Add</button>
		</form>
	);
}

export default AddTodo;
