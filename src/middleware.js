import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router-dom'
import reducers from './reducers'
import routes from './routes'

export default (req, res) => {
	if(process.env.NODE_ENV == 'development') {
		res.status(200).send(`
			<!doctype html>
			<html>
				<header>
					<title>My Universal App</title>
				</header>
				<body>
					<div id='app'></div>
					<script src='vendor.bundle.js'></script>
					<script src='main.bundle.js'></script>
				</body>
			</html>
		`)
	} else if(process.env.NODE_ENV == 'production') {
		res.status(200).send(`
			<!doctype html>
			<html>
				<header>
					<title>My Universal App</title>
				</header>
				<body>
					<div id='app'>${renderToString(
						<Provider store={createStore(reducers)}>
							<Router>
								{ routes }
							</Router>
						</Provider>
					)}</div>
					<script src='vendor.bundle.js'></script>
					<script src='main.bundle.js'></script>
				</body>
			</html>
		`);
	} else {
	res.status(404).send('Not found');
	}
}
