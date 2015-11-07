var React = require('react');
var FontIcon = require('../FontIcon');
var Ripple = require('../Ripple');
var style = require('./style');
var events = require('../../utils/events');

const Button = React.createClass({
    getDefaultProps() {
        return {
            accent: false,
            className: '',
            kind: 'flat',
            loading: false,
            mini: false,
            primary: false,
            ripple: true
        };
    },
    handleMouseDown(event) {
        events.pauseEvent(event);
        this.refs.ripple.start(event);
        if (this.props.onMouseDown) this.props.onMouseDown(event);
    },
    render() {
        let className = style[this.props.kind];
        const {label, icon, loading, ripple, primary, accent, mini, kind, ...others} = this.props;
        if (this.props.className) className += ` ${this.props.className}`;
        if (!primary && !accent) className += ` ${style.primary}`;
        if (primary) className += ` ${style.primary}`;
        if (accent) className += ` ${style.accent}`;
        if (mini) className += ` ${style.mini}`;

        return (
            <button
            {...others}
            className={className}
            data-react-toolbox='button'
            onMouseDown={this.handleMouseDown}
            disabled={this.props.disabled || this.props.loading}
            >
                { ripple ? <Ripple ref='ripple' loading={loading}/> : null }
                { icon ? <FontIcon className={style.icon} value={icon}/> : null }
                { label ? <abbr className={style.label}>{label}</abbr> : null }
            </button>
        );
    }
});

module.exports = Button;
