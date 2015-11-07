'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const reactRouter = require('react-router');
const globalStyle = require('./stylesheets/global');

const App = require('./containers/App');
const Home = require('./containers/Home');
const Invest = require('./containers/Invest');

const Router = reactRouter.Router;
const Route = reactRouter.Route;
const Link = reactRouter.Link;

ReactDOM.render((
    <Router>
        <Route path='/' component={App}>
            <Route path='home' component={Home}/>
            <Route path='invest' component={Invest}/>
        </Route>
    </Router>
), document.getElementById('root'));
