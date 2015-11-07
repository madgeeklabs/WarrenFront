'use strict';

var React = require('react');
var style = require('./style');

var Text = require('../Text');

var Button = React.createClass({
    propTypes: {
        type: React.PropTypes.string.isRequired,
        children: React.PropTypes.string.isRequired,
        className: React.PropTypes.string
    },
    _cardSideButton: function() {
        var className = this.props.className ? `btn-card-side ${this.props.className}` : 'btn-card-side';

        return (
            <a className={className} href="#" role="button">
                <img className="btn-icon" src="/assets/images/icon_repeat.png" />
                <span className="btn-label">{this.props.children}</span>
            </a>
        );
    },
    _paddedButton: function() {
        var className = this.props.className ? `btn-padded ${this.props.className}` : 'btn-padded';

        return (
            <button className={className} href="#" role="button">
                <span className="btn-label">{this.props.children}</span>
            </button>
        );
    },
    render: function() {
        var methodName = `_${this.props.type}Button`;
        return this[methodName]();
    }
});

module.exports = Button;
