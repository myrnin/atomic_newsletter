import React from 'react';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import Heading from '../Atoms/Heading';

class InputName extends React.Component {
	state = { first_name: { value: '', error: false }, last_name: { value: '', error: false } };

	handleInput = (e, field) => {
		this.setState({ [field]: { value: String(e.target.value), error: false } });
	};

	handleNext = () => {
		const { first_name, last_name } = this.state;
		// Regex from: https://tylermcginnis.com/validate-email-address-javascript/
		if (first_name.value.length < 1) {
			this.setState({ first_name: { first_name: first_name.value, error: true } });
		} else if (last_name.value.length < 1) {
			this.setState({ last_name: { last_name: last_name.value, error: true } });
		} else {
			this.props.handleUpdate({ first_name: first_name.value, last_name: last_name.value });
		}
	};

	render() {
		const { first_name, last_name } = this.state;
		return (
			<React.Fragment>
				<Heading text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME." />
				<Input
					value={first_name.value}
					placeholder="First Name"
					onChange={e => this.handleInput(e, 'first_name')}
					theme={first_name.error ? 'danger' : 'primary'}
				/>
				<Input
					value={last_name.value}
					placeholder="Last name"
					onChange={e => this.handleInput(e, 'last_name')}
					theme={last_name.error ? 'danger' : 'primary'}
				/>
				<Button text="SIGN UP" onClick={this.handleNext} />
			</React.Fragment>
		);
	}
}

export default InputName;
