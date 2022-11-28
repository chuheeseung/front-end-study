import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	// 연관있는 데이터는 묶어서 관리하자

	const pointerMove = (e) => {
		// setPosition({ x: e.clientX, y: e.clientY });
		setPosition((prev) => ({ x: e.clientX, y: prev.y })); // x축으로만 이동
	};

	return (
		<div className="container" onPointerMove={pointerMove}>
			<div
				className="pointer"
				style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
			/>
		</div>
	);
}
