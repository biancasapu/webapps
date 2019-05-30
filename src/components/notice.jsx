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

const heroku = "http://webapps05backend.herokuapp.com/hello/id";

//var rp = require("request-promise-any");

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hi",
      pictures: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
      ],
      description: "Hello I lost my dog",
      details: "Phone: +447521244348"
    };

    fetch(heroku)
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        console.log(response);
        this.state.title = response.DATA[0].id;
        console.log(this.state.title);
        this.forceUpdate();
      });
  }

  render() {
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
      <div style={{ marginBottom: "20px" }}>
        <Card>
          {cardImg}
          <CardBody>
            <CardTitle> {this.state.title}</CardTitle>
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
