'use strict';

const React = require('react');
const Container = require('../components/Container');

const PropTypes = React.PropTypes;

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(PropTypes.element.isRequired),
            React.PropTypes.element
        ]).isRequired
    },
    render() {
        return (
            <Container type='app'>
                {this.props.children}
            </Container>
        );
    }
});

module.exports = App;
