'use strict';

const React = require('react');
const Container = require('../components/Container');
const Header = require('../components/Header');
const Drawer = require('../components/Drawer');
const Section = require('../components/Section');
const Text = require('../components/Text');
const LineChart = require('react-chartjs').Line;

const Invest = React.createClass({
    render() {
        var self = this;
        return (
            <Container type='main'>
                <Header onHeaderButtonClick={function() {
                    self.refs.drawer.show();
                }}/>
                <Drawer ref='drawer' hideable/>
                <Container type="content">
                <table  >
  
  <tr>
    <td><img src="../images/twitter.jpg" alt="Twitter"/></td>
   
    <td><td><img src="../images/flecha_arriba.png" alt="OK"/></td></td>
  </tr>
  <tr>
    <td><img src="../images/Google.jpg" alt="Google"/></td>
    <td><td><img src="../images/flecha_abajo.jpg" alt="KO"/></td></td>
  </tr>
</table>
                </Container>
            </Container>
        );
    }
}); 



module.exports = Invest;
