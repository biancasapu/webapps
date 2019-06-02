import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Alert
} from "reactstrap";
//import Header from "./header";
class NoticeFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      community: "",
      description: "",
      species: "",
      colour: "",
      pic1: "",
      pic2: "",
      pic3: "",
      tags: "",
      visible: false
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCommunityChange = this.handleCommunityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    this.handleColourChange = this.handleColourChange.bind(this);
    this.handlePic1Change = this.handlePic1Change.bind(this);
    this.handlePic2Change = this.handlePic2Change.bind(this);
    this.handlePic3Change = this.handlePic3Change.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  async uploadImage(picNo, e) {
    const r = new XMLHttpRequest();
    const d = new FormData();
    var u;

    d.append("image", e);

    r.open("POST", "https://api.imgur.com/3/image", false);
    r.setRequestHeader("Authorization", "Client-ID 3bfb02e2365a65e");
    r.onreadystatechange = () => {
      if (r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText);
        u = "https://i.imgur.com/" + res.data.id + ".png";
        if (picNo === 1) {
          this.setState({ pic1: u });
          console.log(this.state.pic1);
        }
        if (picNo === 2) {
          this.setState({ pic2: u });
        }

        if (picNo === 3) {
          this.setState({ pic3: u });
        }

        // const d = document.createElement("div");
        // d.className = "image";
        // document.getElementsByTagName("body")[0].appendChild(d);

        // const i = document.createElement("img");
        // i.className = "image-src";
        // i.src = u;
        // document.getElementsByClassName("image")[0].appendChild(i);

        // const a = document.createElement("a");
        // a.className = "image-link";
        // a.href = u;
        // document.getElementsByClassName("image")[0].appendChild(a);

        // const p = document.createElement("p");
        // p.className = "image-url";
        // p.innerHTML = u;
        // document.getElementsByClassName("image-link")[0].appendChild(p);
      }
    };

    r.send(d);
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

  handlePic1Change(event) {
    this.setState({ pic1: event.target.files[0] });
    console.log(this.state);
  }
  handlePic2Change(event) {
    this.setState({ pic2: event.target.files[0] });
    console.log(this.state);
  }

  handlePic3Change(event) {
    this.setState({ pic3: event.target.files[0] });
    console.log(this.state);
  }

  handleTagsChange(event) {
    this.setState({ tags: event.target.value });
    console.log(this.state);
  }

  handleSubmit() {
    var maxId;
    fetch("https://webapps05backend.herokuapp.com/notice/max/id")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        console.log("response about maxid from backend");
        console.log(response);
        var curMax = response.DATA[0].id;
        console.log("current max is" + curMax);
        maxId = parseInt(curMax ? curMax : "0") + 1;
        console.log("new maxid is " + maxId);
        this.uploadImage(1, this.state.pic1);
        this.uploadImage(2, this.state.pic2);
        this.uploadImage(3, this.state.pic3);
        return maxId;
      })
      .then(maxId => {
        fetch("https://webapps05backend.herokuapp.com/submit", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: maxId,
            title: this.state.title,
            community: this.state.community,
            description: this.state.description,
            tags:
              String.prototype.toLowerCase.apply(this.state.species) +
              " " +
              String.prototype.toLowerCase.apply(this.state.colour) +
              " " +
              String.prototype.toLowerCase.apply(this.state.tags),
            pic1: this.state.pic1,
            pic2: this.state.pic2,
            pic3: this.state.pic3
          })
        });

        this.setState({
          title: "",
          community: "",
          description: "",
          species: "",
          colour: "",
          pic3: "",
          pic2: "",
          pic1: "",
          tags: "",
          visible: true
        });

        setTimeout(() => {
          this.setState({
            visible: false
          });
        }, 3000);
      });
  }

  render() {
    return (
      <div>
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
                  placeholder="choose"
                  value={this.state.community}
                  onChange={this.handleCommunityChange}
                >
                  <option />
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
                  <option />
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
                  <option />
                  <option>Black</option>
                  <option>White</option>
                  <option>Orange</option>
                  <option>Brown</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Image</Label>
              <Col sm={5}>
                <Input
                  type="file"
                  name="pic1"
                  className="fileInput"
                  onChange={this.handlePic1Change}
                  style={{ marginBottom: "5px" }}
                />

                <Input
                  type="file"
                  name="pic2"
                  className="fileInput"
                  onChange={this.handlePic2Change}
                  style={{ marginBottom: "5px" }}
                />

                <Input
                  type="file"
                  name="pic3"
                  className="fileInput"
                  onChange={this.handlePic3Change}
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
                  value={this.state.tags}
                  style={{ marginBottom: "5px" }}
                  onChange={this.handleTagsChange}
                />
                <FormText color="muted">
                  Enter your tags, separated by a comma
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup>
              <Button onClick={this.handleSubmit}> Submit </Button>
            </FormGroup>
          </Form>
          <Alert
            color="success"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            Submitting your notice...
          </Alert>
        </Container>
      </div>
    );
  }
}

export default NoticeFormPage;
