import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle
} from "reactstrap";

class CardPictureList extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      pic1: props.pic1,
      pic2: props.pic2,
      pic3: props.pic3
    };
  }

  render() {
    return (
      <Row className="mt-3 ml-2 mr-2">
        <Col sm="4">
          <CardImg
            style={{
              width: "100%",
              borderRadius: "10%",
              marginBottom: "20px"
            }}
            src={this.state.pic1 ? this.state.pic1 : null}
          />
        </Col>
        <Col sm="4">
          <CardImg
            style={{
              width: "100%",
              borderRadius: "10%",
              marginBottom: "20px"
            }}
            src={this.state.pic2 ? this.state.pic2 : null}
          />
        </Col>
        <Col sm="4">
          <CardImg
            style={{
              width: "100%",
              borderRadius: "10%",
              marginBottom: "20px"
            }}
            src={this.state.pic3 ? this.state.pic3 : null}
          />
        </Col>
      </Row>
    );
  }
}

export default CardPictureList;
