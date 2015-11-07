'use strict';

var React = require('react');
var Text = require('../Text');
var style = require('./style');

var UnitStepper = React.createClass({
    propTypes: {
        amount: React.PropTypes.number.isRequired
    },
    render: function() {
        return (
            <div className="unit-stepper">
                <button className="unit-stepper-btn">
                    <img className="unit-stepper-icon" src="/assets/images/icon_decrease.png"/>
                </button>
                <Text className="unit-stepper-amount" type="h3">{`${this.props.amount}`}</Text>
                <button className="unit-stepper-btn">
                    <img className="unit-stepper-icon" src="/assets/images/icon_increase.png"/>
                </button>
            </div>
        );
    }
});

module.exports = UnitStepper;
