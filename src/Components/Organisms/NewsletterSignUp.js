import React from 'react';
import InputEmail from '../Molecules/InputEmail';
import InputName from '../Molecules/InputName';

class NewsletterSignUp extends React.Component {
	state = { status: 1, user_data: { email_address: '', first_name: '', last_name: '' } };

	handleUpdate = data => {
		const { status, user_data } = this.state;
		let prev_user_data = JSON.parse(JSON.stringify(user_data));
		this.setState({ status: status + 1, user_data: Object.assign(prev_user_data, data) });
	};

	displayStatus = () => {
		const { status } = this.state;
		switch (status) {
			case 1:
				return <InputEmail handleUpdate={this.handleUpdate} />;
			case 2:
				return <InputName handleUpdate={this.handleUpdate} />;
			case 3:
				return <p>Congrats</p>;
			default:
				return <p>Congrats</p>;
		}
	};

	render() {
		return <React.Fragment>{this.displayStatus()}</React.Fragment>;
	}
}

export default NewsletterSignUp;
