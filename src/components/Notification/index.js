'use strict';

var React = require('react');
var Text = require('../Text');
var style = require('./style');

var Notification = React.createClass({
    render: function() {
        return (
            <div className="alert">
                <img className="alert-icon" src="/assets/images/icon_alert.png"/>
                <Text type="smallEmphasizedLight" className="alert-text">Pedido mínimo: 20 €</Text>
            </div>
        );
    }
});

module.exports = Notification;
