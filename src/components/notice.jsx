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

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ],
      description: "Hello I lost my dog",
      details: "Phone: +447521244348"
    };
  }

  render() {
    var cardImg = (
      <Row className="mt-3 ml-2 mr-2">
        {this.state.pictures.map(picture => (
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
      <div style={{ marginBottom: "20px" }}>
        <Card>
          {cardImg}
          <CardBody>
            <CardTitle>Lost Dog</CardTitle>
            <CardSubtitle>{this.state.description}</CardSubtitle>
            <CardText>{this.state.details}</CardText>
            <Button>Help!</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Notice;
