import React from 'react';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import Heading from '../Atoms/Heading';

class InputEmail extends React.Component {
	state = { email_address: '', error: false };

	handleInput = e => {
		this.setState({ email_address: String(e.target.value), error: false });
	};

	handleNext = () => {
		const { email_address } = this.state;
		const email_is_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_address);
		// Regex from: https://tylermcginnis.com/validate-email-address-javascript/
		if (email_is_valid) {
			this.props.handleUpdate({ email_address: email_address });
		} else {
			this.setState({ error: true });
		}
	};

	render() {
		const { email_address, error } = this.state;
		return (
			<React.Fragment>
				<Heading text="SING UP FOR THE TLC NEWSLETTER." />
				<Input
					value={email_address}
					placeholder="enter email address"
					onChange={this.handleInput}
					theme={error ? 'danger' : 'primary'}
				/>
				<Button text="NEXT" onClick={this.handleNext} />
			</React.Fragment>
		);
	}
}

export default InputEmail;
