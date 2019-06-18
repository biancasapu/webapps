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
      <div style={{ background: "#e6e6ca" }}>
      <Container>
        <div key="0" style={{ marginBottom: "20px" }}>
        <Card style={{ fontFamily: "Georgia, serif" }}>
          <CardHeader tag="h3">Shaquille</CardHeader>
          <CardPictureList pic1="https://s.hdnux.com/photos/64/37/14/13759240/3/920x920.jpg"
          pic2="https://i2.wp.com/metro.co.uk/wp-content/uploads/2018/01/pri_67398556-e1517293442112.jpg?quality=90&strip=all&zoom=1&resize=644%2C397&ssl=1" />
          <CardBody>
            <CardSubtitle>Black Cat</CardSubtitle>
            <CardText> Age: 14 </CardText>
            <CardText> Neutered </CardText>
            <CardText>My first cat. She has done all vaccinations. Only eats Royal Canin. Very mean with new people,
              her favourite owner is my dad.
            </CardText>
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
      </div>
    )
  }
}

export default UserPage;
