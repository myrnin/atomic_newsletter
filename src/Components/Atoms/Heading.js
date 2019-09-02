import React from 'react';

const Heading = ({ text, onClick, styles }) => (
	<p onClick={onClick} className={styles} style={{ ...styles }}>
		{text}
	</p>
);

export default Heading;

//Add proptypes once props are finalized
