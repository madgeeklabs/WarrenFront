'use strict';

const React = require('react');
const Container = require('../components/Container');
const Header = require('../components/Header');
const Drawer = require('../components/Drawer');
const Section = require('../components/Section');
const Text = require('../components/Text');
const LineChart = require('react-chartjs').Line;

const Invest = React.createClass({

	selectFacebook(e){
		e.preventDefault();
$.ajax({
  type: "POST",
  url: 'http://warren.ngrok.io/company',
  data: {company:"fb"},
  success: function(response) {
	console.log("facebook selected", response)
	$(location).attr('href','#/Home');
},
  error: function(e) {alert("error in facebook selected")},
  dataType: "json" 
});
	},
	selectGoogle(e){
		e.preventDefault();
$.ajax({
  type: "POST",
  url: 'http://warren.ngrok.io/company',
  data: {company:"go"},
  success: function(response) {
	console.log("Google selected", response)
	$(location).attr('href','#/Home');
},
  error: function() {alert("error in google selected")},
  dataType: "json" 
});
	},
	alertNotImplemented(e){
		e.preventDefault();
		alert("Not Implemented!");
	},

    render() {
        var self = this;
        return (
            <Container type='main'>
                <Header onHeaderButtonClick={function() {
                    self.refs.drawer.show();
                }}/>
                <Drawer ref='drawer' hideable/>
                <Container type="content">
<div className="invest" onClick={this.selectFacebook} id="facebook">Facebook<img class="invest_image" src="../assets/images/facebook.jpg"/></div>
<div className="invest" onClick={this.selectGoogle} id="google">Google<img class="invest_image" src="../assets/images/Google.jpg" /></div>
<div className="invest" onClick={this.alertNotImplemented} id="inditex">Inditex<img class="invest_image" src="../assets/images/inditex.png" /></div>
<div className="invest" onClick={this.alertNotImplemented} id="repsol">Repsol<img class="invest_image" src="../assets/images/repsol.jpg" /></div>
<div className="invest" onClick={this.alertNotImplemented} id="twitter">Twitter<img class="invest_image" src="../assets/images/twitter.jpg" /></div>
                </Container>
            </Container>
        );
    }
});



module.exports = Invest;
