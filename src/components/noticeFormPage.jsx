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
      description: ""
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Container fullHeight>
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
              <Label sm={2} for="exampleFile">
                Image
              </Label>
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
          </Form>
        </Container>
      </div>
    );
  }
}

export default NoticeFormPage;
