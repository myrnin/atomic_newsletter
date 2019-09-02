import React from 'react';

const Input = ({ text, placeholder, onChange, type, disabled, theme, value }) => (
	<input
		type={type}
		placeholder={placeholder}
		disabled={disabled}
		onChange={onChange}
		style={{border: '2px solid black', borderColor: theme === 'danger' ? 'red' : 'blue'}}
		value={value}
	></input>
);

export default Input;

//Add proptypes once props are finalized
