import React, { Component } from "react";
import Logo from "../img/petabaselogo.png";
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
            <CardHeader tag="h3" style={{ textAlign: "center" }}>
              Welcome to Petabase!
            </CardHeader>
            <CardImg
              className="rounded mx-auto d-block"
              style={{
                width: "40%",
                marginBottom: "20px",
                paddingTop: "20px"
              }}
              src={Logo}
            />
            <CardBody>
              <CardText
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  fontSize: "25px"
                }}
              >
                Reuniting pets and their owners.
              </CardText>
              <CardText
                style={{
                  textAlign: "center",
                  fontSize: "20px"
                }}
              >
                Go to "Submit notice" if you have found or lost a pet!
              </CardText>
              <CardText
                style={{
                  textAlign: "center",
                  fontSize: "20px"
                }}
              >
                Go to "Lost & Found" to see and search existing notices
              </CardText>
              <CardText
                style={{
                  textAlign: "center",
                  fontSize: "20px"
                }}
              >
                Go to "Map" to see notices around you
              </CardText>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default SplashPage;
