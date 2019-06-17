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
import CardPictureList from "./cardPictureList.jsx"

class UserPage extends Component {
  render () {
    return (
      <Container>
        <div key="0" style={{ marginBottom: "20px" }}>
        <Card style={{ fontFamily: "Georgia, serif" }}>
          <CardHeader tag="h3">Pet 1</CardHeader>
          <CardPictureList pic1="https://pbs.twimg.com/media/D9RL-jHXkAEc1ST.jpg" />
          <CardBody>
            <CardSubtitle>Pet 1 species</CardSubtitle>
            <CardText> Birthday: 2nd May </CardText>
            <CardText>Description..... Vaccinations done: hakakksjdsjdjdkw</CardText>
            <Button>Edit</Button> {/* lol this shouldnt do anythin its proof of conc */}
          </CardBody>
        </Card>
      </div>
      <div key="1" style={{ marginBottom: "20px" }}>
        <Card style={{ fontFamily: "Georgia, serif" }}>
          <CardHeader tag="h3">Pet 2</CardHeader>
          <CardPictureList pic1="https://pbs.twimg.com/media/D9RL-jHXkAEc1ST.jpg" />
          <CardBody>
            <CardSubtitle>Pet 2 species</CardSubtitle>
            <CardText> Birthday: 2nd May </CardText>
            <CardText>Description..... Vaccinations done: hakakksjdsjdjdkw</CardText>
            <Button>Edit</Button> {/* lol this shouldnt do anythin its proof of conc */}
          </CardBody>
        </Card>
      </div>
      </Container>
    )
  }
}

export default UserPage