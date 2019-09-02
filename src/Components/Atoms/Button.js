import React from 'react';

export const Button = ({ text, onClick, type, disabled, styles }) => (
	<button type={type} disabled={disabled} onClick={onClick} className={styles.button} style={{ ...styles }}>
		{text}
	</button>
);

//Add proptypes once props are finalized
