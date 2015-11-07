var React = require('react');
var style = require('./style');

var textStyles = {
    h1Light: ['h1', 'h1 lh-120 txt-light color-light txt-shadow'],
    h2: ['h2', 'h2 lh-120 txt-regular color-dark'],
    h2Success: ['h2', 'h2 lh-100 txt-regular color-error'],
    h2Neutral: ['h2', 'h2 lh-120 txt-regular color-dark-lighter'],
    h3Emphasized: ['h3', 'h3 lh-120 txt-medium color-light'],
    h3: ['h3', 'h3 lh-100 txt-regular color-dark'],
    h3Neutral: ['h3', 'h3 lh-100 txt-regular color-neutral'],
    h3Red: ['h3', 'h3 lh-100 txt-regular color-red'],
    bodyEmphasized: ['span', 'span lh-100 txt-medium color-dark-darker margin-medium'],
    body: ['span', 'span lh-100 txt-regular color-dark-darker'],
    bodyNeutral: ['p', 'p lh-150 txt-regular color-dark-lighter'],
    bodyEmphasizedRed: ['span', 'span lh-100 txt-medium color-dark-darker'],
    bodyEmphasizedNeutral: ['span', 'span lh-100 txt-medium color-neutral'],
    bodyEmphasizedLightShadow: ['span', 'span lh-100 txt-medium color-light txt-shadow'],
    bodyLightShadow: ['span', 'span lh-120 txt-regular color-light txt-shadow'],
    small: ['small', 'small lh-100 txt-regular color-dark-darker'],
    smallEmphasized: ['small', 'small lh-100 txt-medium color-dark-darker'],
    smallDisabled: ['small', 'small lh-100 txt-regular color-neutral'],
    smallEmphasizedDisabled: ['small', 'small lh-100 txt-medium color-neutral'],
    smallEmphasizedLight: ['small', 'small lh-150 txt-medium color-light'],
    smallLightShadow: ['small', 'small lh-100 txt-regular color-light txt-shadow'],
    section: ['small', 'small lh-100 txt-regular color-dark-lighter margin-medium margin-left-large'],
    notification: ['small', 'notification lh-100 txt-medium color-light']
};

function createPropValidator(textStylesProp) {
    return function(props, propName, componentName) {
        var propValue = props[propName];

        if (typeof propValue !== 'string' || typeof textStylesProp[propValue] === 'undefined') {
            throw new Error('Validation error for ' + propName + ' prop in ' + componentName + 'component.');
        }
    };
}

var Text = React.createClass({
    propTypes: {
        type: createPropValidator(textStyles),
        children: React.PropTypes.string.isRequired,
        className: React.PropTypes.string
    },
    render: function() {
        var textStyle = textStyles[this.props.type];
        var HTMLTag = textStyle[0];
        var className = textStyle[1];
        var textContent = this.props.children;

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return React.createElement(
            HTMLTag,
            {className: className},
            textContent
        );
    }
});

module.exports = Text;
