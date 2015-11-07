'use strict';

const React = require('react');
const Container = require('../components/Container');
const Header = require('../components/Header');
const Drawer = require('../components/Drawer');
const Section = require('../components/Section');
const Text = require('../components/Text');
const LineChart = require('react-chartjs').Line;

const Home = React.createClass({
    getInitialState() {
        return {
            savings: 1,
            lineChart: {
                data: {
                    labels: [
                        '',
                        '10',
                        '11',
                        '12',
                        '13',
                        '14',
                        '15'
                    ],
                    datasets: [
                        {
                            label: 'My First dataset',
                            fillColor: 'rgba(220,220,220,0.2)',
                            strokeColor: 'rgba(220,220,220,1)',
                            pointColor: 'rgba(220,220,220,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(220,220,220,1)',
                            data: [
                                5.45,
                                3.25,
                                6.20,
                                2.75,
                                3.10,
                                3.25,
                                4.75
                            ]
                        }
                    ]
                },
                options: {
                    bezierCurve : false
                }
            }
        };
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
                    <Text type='h2'>{this.state.savings}</Text>
                    <Text type='h3Red'>{'+ 2,50 (5,90€)'}</Text>
                    <LineChart
                        data={this.state.lineChart.data}
                        options={this.state.lineChart.options}
                    />
                </Container>
            </Container>
        );
    }
});

module.exports = Home;
