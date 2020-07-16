import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';   // grabbed from API, instead of importing
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],   // don't forget commas
			searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
}


onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })  
	// when you type something, 'searchfield' gets updated, filter the robots according to the changed "searchfield" 
}


	render() {
		const { robots, searchfield } = this.state
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		  return !robots.length ? 
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
				  	</ErrorBoundry>   {/*  ㄴ> not from CardList.js */ }
				  </Scroll>				
				</div>  						 
			);		
		}
	}



export default App;