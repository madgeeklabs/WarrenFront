'use strict';

const React = require('react');
const style = require('./style');

const HeaderButton = React.createClass({
    propTypes: {
        onButtonClick: React.PropTypes.func.isRequired,
        type: React.PropTypes.oneOf([
            'default',
            'back'
        ]).isRequired
    },
    getDefaultProps() {
        return {
            type: 'default'
        };
    },

    handleClick(event) {
        event.preventDefault();

        if (this.props.type === 'default') {
            this.ref.drawer.show();
        } else { // 'back'
            window.history.back();
        }
    },
    render() {
        let imageSrc;
        let imageAlt;
        let classNames = 'btn btn-header';

        if (this.props.type === 'default') {
            imageSrc = '/assets/images/icon_menu.png';
            imageAlt = 'Botón de menú';
            classNames += ' btn-menu';
        } else { // 'back'
            imageSrc = '/assets/images/icon_arrow_back.png';
            imageAlt = 'Botón de volver atrás';
            classNames += ' btn-back';
        }

        return (
            <button className={classNames} role="button" onClick={this.props.onButtonClick}>
                <img src={imageSrc} alt={imageAlt}/>
            </button>
        );
    }
});

module.exports = HeaderButton;
