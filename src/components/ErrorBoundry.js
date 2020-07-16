import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props); // --> to allow access to this.props in the constructor  
		this.state = {
			hasError: false
		}
	}

componentDidCatch(error, info) {
	this.setState({ hasError: true })
	// if componentDidCatch is triggered, render() runs 
}

	render() {
		if (this.state.hasError){ // this.state.hasError == True -> means error occured
			return <h1>Oooops. That is not good</h1>
			// if the error occured, return ㄴ> this 
		}
		return this.props.children
	}
}

export default ErrorBoundry;