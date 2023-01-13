import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Filters from './components/Filters/Filters';
import NewTodo from './components/NewTodo/NewTodo';
import { datas } from './data/data';

const filters = ['all', 'active', 'completed'];

function App() {
	const [todos, setTodos] = useState(datas);
	const [filter, setFilter] = useState(filters[0]);

	const getNewTodo = (response) => {
		setTodos([...todos, response]);
	};

	return (
		<div className="app">
			<Filters filters={filters} filter={filter} onFilterChange={setFilter} />
			<TodoList todos={todos} setTodos={setTodos} />
			<NewTodo getNewTodo={getNewTodo} />
		</div>
	);
}

export default App;
