import './App.css';
import { useEffect, useState } from 'react';
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

	useEffect(() => {
		// filter가 변할 때마다 todos에서 filter 맞는거만 걸러주어서 setTodos에 저장
	}, [filter]);

	return (
		<div className="app">
			<Filters filters={filters} filter={filter} onFilterChange={setFilter} />
			<TodoList todos={todos} setTodos={setTodos} />
			<NewTodo getNewTodo={getNewTodo} />
		</div>
	);
}

export default App;
