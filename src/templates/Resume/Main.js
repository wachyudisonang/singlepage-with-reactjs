import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
	<main id="content" className="bd-masthead" role="main">
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/portfolio' component={Portfolio}/>
			<Route path='/contact' component={Contact}/>
		</Switch>
	</main>
)

export default Main
