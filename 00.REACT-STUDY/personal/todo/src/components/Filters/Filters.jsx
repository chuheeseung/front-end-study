import React from 'react';
import styles from './Filters.module.css';

function Filters(props) {
	return (
		<header>
			<button>전체</button>
			<button>완료</button>
			<button>미완료</button>
		</header>
	);
}

export default Filters;
