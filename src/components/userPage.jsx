import React, { Component } from "react";
import {
  CardImg,
  Card,
  CardText,
  CardBody,
  CardHeader,
  Container,
  CardSubtitle,
  Button
} from "reactstrap";
import CardPictureList from "./cardPictureList.jsx";

class UserPage extends Component {
  render() {
    return (
      <div style={{ background: "#e6e6ca", fontFamily: "Georgia, serif" }}>
        <Container>
          <h2 style={{ paddingTop: "20px", textAlign: "center" }}>Cat Lady</h2>
          <h3 style={{ textAlign: "center" }}>Contact info: +441234567890</h3>
          <div key="0" style={{ paddingBottom: "20px" }}>
            <Card>
              <CardHeader tag="h3">Pet 1</CardHeader>
              <CardPictureList pic1="https://pbs.twimg.com/media/D9RL-jHXkAEc1ST.jpg" />
              <CardBody>
                <CardSubtitle>Pet 1 species</CardSubtitle>
                <CardText> Birthday: 2nd May </CardText>
                <CardText>Description:</CardText>
                <CardText>Vaccinations done: hakakksjdsjdjdkw</CardText>
                <Button>Edit</Button>
                {/* lol this shouldnt do anythin its proof of conc */}
              </CardBody>
            </Card>
          </div>
          <div key="1" style={{ paddingBottom: "20px" }}>
            <Card>
              <CardHeader tag="h3">Pet 2</CardHeader>
              <CardPictureList pic1="https://pbs.twimg.com/media/D9RL-jHXkAEc1ST.jpg" />
              <CardBody>
                <CardSubtitle>Pet 2 species</CardSubtitle>
                <CardText> Birthday: 2nd May </CardText>
                <CardText>Description:</CardText>
                <CardText>Vaccinations done: hakakksjdsjdjdkw</CardText>
                <Button>Edit</Button>
                {/* lol this shouldnt do anythin its proof of conc */}
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default UserPage;
