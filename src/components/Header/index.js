'use strict';

const React = require('react');
const style = require('./style');
const HeaderButton = require('../HeaderButton');

const Header = React.createClass({
    propTypes: {
        onHeaderButtonClick: React.PropTypes.func.isRequired
    },
    render() {
        return (
            <header className="header">
                <HeaderButton onButtonClick={this.props.onHeaderButtonClick}/>
            </header>
        );
    }
});

module.exports = Header;
