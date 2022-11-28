import React, { useState } from 'react';
import '../App.css';

const Counter = ({ total, onClick }) => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		// setCount(count + 1);
		setCount((prev) => prev + 1);
		onClick();
	};

	return (
		<div className="counter">
			<p className="number">
				{count}
				<span className="total">/{total}</span>
			</p>
			<button className="button" onClick={handleClick}>
				Add +
			</button>
		</div>
	);
};

export default Counter;
