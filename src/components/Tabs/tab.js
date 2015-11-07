'use strict';

var React = require('react');

const Tab = React.createClass({
    propTypes: {
        active: React.PropTypes.bool,
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        label: React.PropTypes.string.isRequired,
        onActive: React.PropTypes.func,
        tabIndex: React.PropTypes.number
    },

    getDefaultProps() {
        return {
            className: ''
        };
    },

    componentDidMount() {
        this.active(this.props.active);
    },

    componentWillReceiveProps(nextProps) {
        if (nextProps.active) this.active(nextProps.active);
    },

    render() {
        let className = `tab-content ${this.props.className}`;
        if (this.props.active) className += ` active`;
        if (this.props.disabled) className += ` disabled`;
        if (this.props.hidden) className += ` hidden`;

        return (
          <section
          data-react-toolbox='tab-content'
          className={className}
          tabIndex={this.props.tabIndex}
          >
            { this.props.children }
          </section>
          );
    },
    active(value) {
        this.setState({active: value});
        if (this.props.onActive && value) {
            this.props.onActive(this);
        }
    }
});

module.exports = Tab;
