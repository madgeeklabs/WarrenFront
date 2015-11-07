'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const reactRouter = require('react-router');
const globalStyle = require('./stylesheets/global');

const App = require('./containers/App');
const Home = require('./containers/Home');

const Router = reactRouter.Router;
const Route = reactRouter.Route;
const Link = reactRouter.Link;

ReactDOM.render((
    <Router>
        <Route path='/' component={App}>
            <Route path='home' component={Home}/>
        </Route>
    </Router>
), document.getElementById('root'));
