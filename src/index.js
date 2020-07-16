import React from 'react';    //  in the past, we had to use Browserify to bundle JS files, but React does that
import ReactDOM from 'react-dom';
import './index.css'; // import multiple css files from each different component
					  					// the first letter of component name should be capital
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import CardList from './components/CardList';
// import { robots } from './robots';

ReactDOM.render(
	<App />
	, document.getElementById('root')
);

// ReactDOM.render(
// 	<Hello greeting={'Hello' + 'React Ninja'}/>
// 	);
// 	document.serviceWorker();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
