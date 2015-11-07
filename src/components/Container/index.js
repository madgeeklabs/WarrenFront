'use strict';

var React = require('react');
var style = require('./style');

var Container = React.createClass({
    propTypes: {
        type: React.PropTypes.oneOf(['app', 'main', 'content']),
        bgCover: React.PropTypes.string,
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.element),
            React.PropTypes.element
        ]).isRequired
    },
    render: function() {
        var componentId = `${this.props.type}-container`;
        var className = this.props.className ? this.props.className : null;
        var backgroundImage = null;

        if (this.props.type === 'content' && this.props.bgCover) {
            className = className ? `${className} bg-cover` : 'bg-cover';
            backgroundImage = `url(${this.props.bgCover})`;
        }

        return (
            <div id={componentId} className={className} style={{backgroundImage: backgroundImage}}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Container;
