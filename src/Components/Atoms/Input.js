import React from 'react';

export const Input = ({ text, placeholder, ongChange, type, disabled, styles }) => (
	<input
		type={type}
		placeholder={placeholder}
		disabled={disabled}
		ongChange={ongChange}
		className={styles.button}
		style={{ ...styles }}
	>
		{text}
	</input>
);

//Add proptypes once props are finalized
