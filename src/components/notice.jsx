import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
require("any-promise/register/q");

//var rp = require("request-promise-any");

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ]
    };
  }

  render() {
    const { id, title, description, tags, community } = this.props;

    var cardImg = (
      <Row className="mt-3 ml-2 mr-2">
        {this.state.pictures &&
          this.state.pictures.map(picture => (
            <Col sm="4">
              <CardImg
                style={{
                  width: "100%",
                  borderRadius: "10%",
                  marginBottom: "20px"
                }}
                src={picture}
              />
            </Col>
          ))}
      </Row>
    );

    return (
      <div key={id} style={{ marginBottom: "20px" }}>
        <Card>
          {cardImg}
          <CardBody>
            <CardTitle> {title}</CardTitle>
            <CardSubtitle>{community}</CardSubtitle>
            <CardText>{description}</CardText>
            <CardText>{tags}</CardText>
            <Button>Help!</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Notice;
