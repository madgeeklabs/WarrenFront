'use strict';

var React = require('react');
var style = require('./style');

const Tabs = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        index: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            className: '',
            index: 0
        };
    },
    getInitialState() {
        return {
            index: this.props.index,
            pointer: {}
        };
    },

    handleResize(event) {
        this.setState({pointer: this._pointerPosition(this.state.index)});
    },

    componentDidMount() {
        setTimeout(() => {
            this.setState({pointer: this._pointerPosition(this.state.index)});
        }, 20);
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },

    componentWillReceiveProps(nextProps) {
        const index = nextProps.index || this.state.index;
        this.setState({
            index,
            pointer: this._pointerPosition(index)
        });
    },

    _pointerPosition(index = 0) {
        const startPoint = this.refs.tabs.getBoundingClientRect().left;
        const label = this.refs.navigation.children[index].getBoundingClientRect();

        return {
            top: `${this.refs.navigation.getBoundingClientRect().height}px`,
            left: `${label.left - startPoint}px`,
            width: `${label.width}px`
        };
    },
    handleClick(index) {
        this.setState({
            index,
            pointer: this._pointerPosition(index)
        });
        if (this.props.onChange) this.props.onChange(this);
    },

    renderLabels(labels) {
        return labels.map((props) => {
            return <label {...props}>{ props.label }</label>;
        });
    },

    render() {
        const labels = [];

        const tabs = this.props.children.map((tab, index) => {
            const active = this.state.index === index;
            let className = `tab-label ${tab.props.className}`;

            if (active) className += ` active`;
            if (tab.props.disabled) className += ` disabled`;
            if (tab.props.hidden) className += ` hidden`;

            labels.push({
                className,
                label: tab.props.label,
                key: index,
                onClick: !tab.props.disabled ? this.handleClick.bind(this, index) : null
            });

            return React.cloneElement(tab, {active, key: index, tabIndex: index});
        });

        let className = 'tab-root';
        if (this.props.className) className += ` ${this.props.className}`;

        return (
            <div data-react-toolbox='tabs' ref='tabs' className={className}>
                <nav className='tab-navigation' ref='navigation'>
                { this.renderLabels(labels) }
                </nav>
                <span className='pointer' style={this.state.pointer} />
                { tabs }
            </div>
            );
    },
    active(value) {
        this.setState({active: value});
        if (this.props.onActive && value) {
            this.props.onActive(this);
        }
    }
});

module.exports = Tabs;
