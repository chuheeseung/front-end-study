import React from 'react';
import styles from './Filters.module.css';

function Filters({ filters, filter, onFilterChange }) {
	return (
		<header className={styles.header}>
			{filters.map((value, index) => {
				return (
					<button
						key={index}
						className={styles.button}
						onClick={() => onFilterChange(value)}
					>
						{value}
					</button>
				);
			})}
		</header>
	);
}

export default Filters;
