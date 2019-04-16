import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class DataCard extends Component {

  render() {
    return (
        <Card style = {{width: "237.26px", height: "98.99px", display: "inline-block", marginRight: "15.74px", marginTop: "35px"}}>
            <CardBody style = {{padding: "0px"}}>
                <CardText style = {{marginLeft: "20.43px", marginTop: "12px", marginBottom: "16.81"}}>
                    <div><i style = {{color: "#959595"}} class={this.props.picture}></i>
                    <h6 style = {{display: "inline-block", fontFamily: "Nunito Sans", fontSize: "12px", color: "#959595", marginLeft: "8.11px"}}>{this.props.title}</h6>
                    </div>
                    <h3 style = {{fontSize: "40px", fontFamily: "Nunito Sans", color: "#137991"}}>{this.props.number}</h3>
                </CardText>
            </CardBody>
        </Card>
        );
    }
};


export default DataCard;