import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle,
  Button
} from "reactstrap";
require("any-promise/register/q");

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [
        "https://i.imgur.com/6hETUDz.jpg",
        "https://i.imgur.com/6hETUDz.jpg",
        "https://i.imgur.com/6hETUDz.jpg"
      ]
    };
  }

  render() {
    const {
      id,
      title,
      description,
      tags,
      community,
      pic1,
      pic2,
      pic3,
      contact,
      lastSeen,
      postcode
    } = this.props;

    return (
      <div key={id} style={{ marginBottom: "20px" }}>
        <Card style={{ fontFamily: "Georgia, serif" }}>
          <CardHeader tag="h3">{title}</CardHeader>
          <Row className="mt-3 ml-2 mr-2">
            <Col sm="4">
              <CardImg
                style={{
                  width: "100%",
                  borderRadius: "10%",
                  marginBottom: "20px"
                }}
                src={pic1}
              />
            </Col>
            <Col sm="4">
              <CardImg
                style={{
                  width: "100%",
                  borderRadius: "10%",
                  marginBottom: "20px"
                }}
                src={pic2}
              />
            </Col>
            <Col sm="4">
              <CardImg
                style={{
                  width: "100%",
                  borderRadius: "10%",
                  marginBottom: "20px"
                }}
                src={pic3 ? pic3 : null}
              />
            </Col>
          </Row>
          <CardBody>
            <CardSubtitle>{community}</CardSubtitle>
            <CardText> Postcode: {postcode} </CardText>
            <CardText>{description}</CardText>
            <CardText> Last Seen: {lastSeen} </CardText>
            <CardText>Contact Information: {contact} </CardText>
            <CardText className="text-muted">{tags}</CardText>
            <Button>Help!</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Notice;
