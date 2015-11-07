'use strict';

const React = require('react');
const style = require('./style');

const Card = React.createClass({
    propTypes: {
        children: React.PropTypes.oneOf([
            React.PropTypes.element,
            React.PropTypes.arrayOf(React.PropTypes.element.isRequired)
        ]).isRequired
    },
    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Card;
