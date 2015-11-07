'use strict';

const React = require('react');
const Container = require('../components/Container');
const Header = require('../components/Header');
const Drawer = require('../components/Drawer');
const Section = require('../components/Section');
const Text = require('../components/Text');
const LineChart = require('react-chartjs').Line;
const $ = require('jquery');

var lineChartOptions = {
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
        bezierCurve: false
    }
};

const Home = React.createClass({
    getInitialState() {
        return {
            value: 0,
            coeficient: 1,
            previousCoeficient: 1
        };
    },
    _fetchFromServer() {
        var self = this;
        $.ajax({
            url: 'http://warren.ngrok.io/stock',
            cache: false,
            success: function(data) {
                console.log('orders retrieved from server this is the first one:');
                console.log(data);

                var previousCoeficient =
                    self.state.coeficient === data.coeficient ?
                    self.state.previousCoeficient :
                    self.state.coeficient;

                self.setState({
                    coeficient: data.coeficient,
                    value: data.value,
                    previousCoeficient: previousCoeficient
                });

                lineChartOptions.data.datasets[0].data.shift();
                lineChartOptions.data.dataSets[0].data.push((this.state.value * this.state.coeficient).toFixed(2).parseFloat());

                LineChart.updatePoints();
            },
            error: function(xhr, status, err) {
                console.error(self.props.url, status, err.toString());
            }
        });
    },

    componentDidMount() {
        this._fetchFromServer()
        setInterval(this._fetchFromServer, 10000);
    },

    render() {
        var self = this;
        var difference = this.state.value * this.state.coeficient - this.state.previousCoeficient * this.state.value;
        var symbol = difference > 0 ? '+' : '-';
        return (
            <Container type='main'>
                <Header onHeaderButtonClick={function() {
                    self.refs.drawer.show();
                }}/>
                <Drawer ref='drawer' hideable/>
                <Container type="content">
                    <Text type='h2'>{(this.state.value * this.state.coeficient).toFixed(2)}</Text>
                    <Text type='h3Red'>{`${symbol} ${Math.abs(difference).toFixed(2)} (${this.state.coeficient} %)`}</Text>
                    <LineChart
                        ref='chart'
                        data={lineChartOptions.data}
                        options={lineChartOptions.options}
                    />
                </Container>
            </Container>
        );
    }
});

module.exports = Home;
