import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle
} from "reactstrap";
import CardPictureList from "./cardPictureList";

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
          <CardPictureList pic1={pic1} pic2={pic2} pic3={pic3} />
          <CardBody>
            <CardSubtitle>{community}</CardSubtitle>
            <CardText> Postcode: {postcode} </CardText>
            <CardText>{description}</CardText>
            <CardText> Last Seen: {lastSeen} </CardText>
            <CardText>Contact Information: {contact} </CardText>
            <CardText className="text-muted">{tags}</CardText>
            {/* <Button>Help!</Button> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Notice;
