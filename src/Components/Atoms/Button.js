import React from 'react';

const Button = ({ text, onClick, type, disabled, styles }) => (
	<button type={type} disabled={disabled} onClick={onClick} className={styles} style={{ ...styles }}>
		{text}
	</button>
);

export default Button;

//Add proptypes once props are finalized
