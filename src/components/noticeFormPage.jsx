import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col
} from "reactstrap";
import Header from "./header";

class NoticeFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      community: "",
      description: "",
      species: "",
      colour: "",
      picture1: "",
      picture2: "",
      picture3: "",
      tags: ""
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCommunityChange = this.handleCommunityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    this.handleColourChange = this.handleColourChange.bind(this);
    this.handlePicture1Change = this.handlePicture1Change.bind(this);
    this.handlePicture2Change = this.handlePicture2Change.bind(this);
    this.handlePicture3Change = this.handlePicture3Change.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
    console.log(this.state);
  }

  handleCommunityChange(event) {
    this.setState({ community: event.target.value });
    console.log(this.state);
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
    console.log(this.state);
  }

  handleSpeciesChange(event) {
    this.setState({ species: event.target.value });
    console.log(this.state);
  }

  handleColourChange(event) {
    this.setState({ colour: event.target.value });
    console.log(this.state);
  }

  handlePicture1Change(event) {
    this.setState({ picture1: event.target.value });
    console.log(this.state);
  }
  handlePicture2Change(event) {
    this.setState({ picture2: event.target.value });
    console.log(this.state);
  }

  handlePicture3Change(event) {
    this.setState({ picture3: event.target.value });
    console.log(this.state);
  }

  handleTagsChange(event) {
    this.setState({ tags: event.target.value });
    console.log(this.state);
  }

  handleSubmit() {
    var maxId;
    fetch("http://webapps05backend.herokuapp.com/notice/max(id)")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        console.log(response);
        maxId = parseInt(response.DATA[0].max ? response.DATA[0].max : "0") + 1;
        console.log(maxId);
        return maxId;
      })
      .then(maxId => {
        fetch("http://webapps05backend.herokuapp.com/submit", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: maxId,
            title: this.state.title,
            community: this.state.community,
            description: this.state.description,
            tags:
              this.state.tags +
              " " +
              this.state.species +
              " " +
              this.state.colour
          })
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Container style={{ marginTop: "20px" }}>
          <Form>
            <FormGroup row>
              <Label sm={2}> Title </Label>
              <Col sm={10}>
                <Input
                  name="title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Community</Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="community"
                  value={this.state.community}
                  onChange={this.handleCommunityChange}
                >
                  <option>London</option>
                  <option>Nottingham</option>
                  <option>Brighton</option>
                  <option>Birmingham</option>
                  <option>Liverpool</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Description </Label>
              <Col sm={10}>
                <Input
                  name="description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Species </Label>
              <Col sm={4}>
                <Input
                  type="select"
                  name="species"
                  value={this.state.species}
                  onChange={this.handleSpeciesChange}
                >
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Other</option>
                </Input>
              </Col>
              <Label sm={2}> Colour </Label>
              <Col sm={4}>
                <Input
                  type="select"
                  name="colour"
                  value={this.state.colour}
                  onChange={this.handleColourChange}
                >
                  <option>Black</option>
                  <option>White</option>
                  <option>Orange</option>
                  <option>Brown</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Image</Label>
              <Col sm={3}>
                <Input
                  type="file"
                  name="pic1"
                  style={{ marginBottom: "5px" }}
                />

                <Input
                  type="file"
                  name="pic1"
                  style={{ marginBottom: "5px" }}
                />

                <Input
                  type="file"
                  name="pic1"
                  style={{ marginBottom: "5px" }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="exampleFile">
                Tags
              </Label>
              <Col>
                <Input
                  type="text"
                  name="tags"
                  style={{ marginBottom: "5px" }}
                  onChange={this.handleTagsChange}
                />
                <FormText color="muted">
                  Enter your tags, separatds by a comma
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup>
              <Button onClick={this.handleSubmit}> Submit </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NoticeFormPage;
