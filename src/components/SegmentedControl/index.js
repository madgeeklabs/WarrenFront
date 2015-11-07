'use strict';

var React = require('react');
var Text = require('../Text');
var style = require('./style');

var firstItemValue = 'domicilio';
var secondItemValue = 'recoger';

var SegmentedControl = React.createClass({
    getInitialState: function() {
        return {value: firstItemValue};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var firstItemClasses = this.state.value === firstItemValue ? 'segmented-item segmented-selected' : 'segmented-item';
        var secondItemClasses = this.state.value === secondItemValue ? 'segmented-item segmented-selected' : 'segmented-item';

        return (
            <ul className="segmented">
                <li className={firstItemClasses}>
                    <input className="segmented-item-input" type="radio" name="numbers" value={firstItemValue} onChange={this.handleChange} id="zero" defaultChecked="checked" />
                    <label className="segmented-item-label" htmlFor="zero">{firstItemValue.toUpperCase()}</label>
                </li>

                <li className={secondItemClasses}>
                    <input className="segmented-item-input" type="radio" name="numbers" value={secondItemValue} onChange={this.handleChange} id="one" />
                    <label className="segmented-item-label" htmlFor="one">{secondItemValue.toUpperCase()}</label>
                </li>
            </ul>
        );
    }
});

module.exports = SegmentedControl;
