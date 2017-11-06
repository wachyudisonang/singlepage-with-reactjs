import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const stringProps = JSON.stringify(this.props);

const body = (
	<BrowserRouter>
		<App blablab={stringProps} />
	</BrowserRouter>
);

ReactDOM.render(body, document.getElementById('root'));