'use strict';

var React = require('react');
var Card = require('../Card');
var Text = require('../Text');
var style = require('./style');

const OrderList = React.createClass({
    render() {
        return (
            <Card>
                <div className='order-location'>
                    <Text type='notification'>Recoger en local</Text>
                </div>
                <div className='order-info'>
                    <Text className='order-name' type='bodyEmphasized'>Hoy</Text>
                    <Text className='order-purchasing-time' type='small'>4:39 PM</Text>
                    <Text className='order-description' type='small'>
                        2x Cervezas
                        4x Croquetas
                        ...
                    </Text>
                    <Text className='order-price' type='h3'>39€</Text>
                </div>
                <div className='order-actions'>
                    <button className='btn-card btn-left'>
                        <Text className='btn-card-label' type='smallEmphasized'>Favoritos</Text>
                    </button>
                    <button className='btn-card btn-right'>
                        <Text className='btn-card-label' type='smallEmphasized'>Ver estado</Text>
                    </button>
                </div>
            </Card>
        );
    }
});

module.exports = OrderList;
