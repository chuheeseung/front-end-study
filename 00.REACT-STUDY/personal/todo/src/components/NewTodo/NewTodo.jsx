import React from 'react';
import styles from './NewTodo.module.css';
import { AiFillPlusCircle } from 'react-icons/ai';

function NewTodo(props) {
	return (
		<div>
			<form>
				<input type="text" />
				<button>
					<AiFillPlusCircle />
				</button>
			</form>
		</div>
	);
}

export default NewTodo;
