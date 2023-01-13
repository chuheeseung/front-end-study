import React from 'react';
import styles from './Filters.module.css';

function Filters({ filters, filter, onFilterChange }) {
	return (
		<header>
			{filters.map((value, index) => {
				<button key={index} onClick={() => onFilterChange(value)}>
					{value}
				</button>;
			})}
		</header>
	);
}

export default Filters;
