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
  render() {
    const id = this.props;

    this.state = {
      id,
      pictures: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ],
      description: "Hello I lost my dog",
      details: "Phone: +447521244348"
    };

    var cardImg = (
      <Row>
        {this.state.pictures.map(picture => (
          <Col sm="4">
            <CardImg
              style={{
                width: "100%",
                borderRadius: "5%",
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
            <CardTitle>Lost Dog</CardTitle>
            <CardSubtitle>whatever</CardSubtitle>
            <CardText>Address n shit</CardText>
            <Button>Help!</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Notice;
