import React, { Component } from "react";
import {
  CardImg,
  Card,
  CardText,
  CardBody,
  CardHeader,
  Container
} from "reactstrap";

class SplashPage extends Component {
  render() {
    return (
      <div style={{ background: "#e6e6ca" }}>
        <Container>
          <Card style={{ fontFamily: "Georgia, serif" }}>
            <CardHeader tag="h3">Title here</CardHeader>
            <CardImg
              className="rounded mx-auto d-block"
              style={{
                width: "50%",
                marginBottom: "20px"
              }}
              src="https://i.imgur.com/nt7vICc.jpg"
            />
            <CardBody>
              <CardText> Text here </CardText>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default SplashPage;
