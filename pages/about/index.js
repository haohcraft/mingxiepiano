import React, { Component, PropTypes } from 'react';

export default class About extends Component {
	static propTypes = {
		name: PropTypes.string
	};
	static defaultProps = {
		name: 'Ming Xie'
	};
	render() {
		return <div>About {this.props.name}</div>;
	}
}
