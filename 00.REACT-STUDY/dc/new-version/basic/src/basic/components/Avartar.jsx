import React from 'react';

const Avartar = ({ image, isNew }) => {
	return (
		<div className="avartar">
			<img className="photo" src={image} alt="avatar" />
			{isNew && <span className="new">New</span>}
		</div>
	);
};

export default Avartar;
