import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Filters from './components/Filters/Filters';
import NewTodo from './components/NewTodo/NewTodo';

function App() {
	const [todos, setTodos] = useState([
		{
			text: 'shop',
			filter: 'completed',
		},
		{
			text: 'read books',
			filter: 'not completed',
		},
	]);

	return (
		<div>
			<Filters />
			<TodoList todos={todos} setTodos={setTodos} />
			<NewTodo />
		</div>
	);
}

export default App;
