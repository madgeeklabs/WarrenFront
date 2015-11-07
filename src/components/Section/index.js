var React = require('react');
var style = require('./style');
var Card = require('../Card');
var Text = require('../Text');
var Button = require('../Button');

var Section = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <div className="section">
                <Text type="section">{this.props.title}</Text>
                <Card>
                    <div className="section-item-info">
                        <Text type="bodyEmphasized">Cena partidos</Text>
                        <Text type="small">Cena partidos</Text>
                    </div>
                    <Button type="cardSide">Repetir</Button>
                </Card>
                <a className="btn btn-default center-block" href="#" role="button">Ver más</a>
            </div>
        );
    }
});

module.exports = Section;
