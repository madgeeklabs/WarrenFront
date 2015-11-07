'use strict';

var React = require('react');
var style = require('./style');
var Text = require('../Text');

var Drawer = React.createClass({
    propTypes: {
        active: React.PropTypes.bool,
        className: React.PropTypes.string,
        hideable: React.PropTypes.bool,
        type: React.PropTypes.oneOf(['left', 'right'])
    },

    getDefaultProps() {
        return {
            className: '',
            hideable: true,
            type: 'left'
        };
    },

    getInitialState() {
        return {active: this.props.active};
    },

    handleOverlayClick() {
        if (this.props.hideable) {
            this.setState({active: false});
        }
    },
    show() {
        this.setState({active: true});
    },
    hide() {
        this.setState({active: false});
    },
    render() {
        let className = `drawer drawer-${this.props.type}`;
        if (this.state.active) className += ' drawer-active';
        if (this.props.className) className += ` ${this.props.className}`;

        return (
            <div data-react-toolbox='drawer' className={className}>
                <div className={'drawer-overlay'} onClick={this.handleOverlayClick}></div>
                <aside className={'drawer-content'}>
                    <div className="drawer-profile">
                        <img className="drawer-profile-image" src="/src/images/icon_profile_small.png" />
                        <div className="drawer-profile-content">
                            <Text className="drawer-profile-title" type="bodyEmphasized">Iniciar sesión</Text>
                            <Text className="drawer-profile-subtitle" type="small">Ver perfil</Text>
                        </div>
                        <img className="drawer-profile-settings" src="/src/images/icon_settings.png" />
                    </div>
                    <ul className="drawer-list drawer-main">
                        <li>
                            <a className="drawer-list-item" href="">
                                <img className="drawer-item-icon" src="/src/images/icon_home.png" />
                                <span className="drawer-item-label">Home</span>
                            </a>
                        </li>
                        <li>
                            <a className="drawer-list-item" href="">
                                <img className="drawer-item-icon" src="/src/images/icon_receipt.png" />
                                <span className="drawer-item-label">My Products</span>
                            </a>
                        </li>
                    </ul>
                    <Text className="drawer-list-title" type="section">Product Catalog</Text>
                    <ul className="drawer-list drawer-cart">
                        <li>
                            <a className="drawer-list-item" href="">
                                <img className="drawer-item-icon" src="/src/images/icon_featured.png" />
                                <span className="drawer-item-label">Stocks</span>
                            </a>
                        </li>
                        <li>
                            <a className="drawer-list-item" href="">
                                <img className="drawer-item-icon" src="/src/images/icon_products.png" />
                                <span className="drawer-item-label">Mutual Funds</span>
                            </a>
                        </li>
                        <li>
                            <a className="drawer-list-item" href="">
                                <img className="drawer-item-icon" src="/src/images/icon_search.png" />
                                <span className="drawer-item-label">Bank Deposits</span>
                            </a>
                        </li>
                    </ul>
                    { this.props.children }
                </aside>
            </div>
        );
    }
});

module.exports = Drawer;
