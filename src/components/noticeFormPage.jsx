import React, { Component } from "react";
import Dog from "../img/peticondog.png";
import Cat from "../img/peticoncat.png";
import Bird from "../img/peticonbird.png";
import Other from "../img/peticonother.png";
import Female from "../img/peticonfemale.png";
import Male from "../img/peticonmale.png";
import Unknown from "../img/peticonunknown.png";
import Lost from "../img/peticonlost.png";
import Found from "../img/peticonfound.png";

import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Alert,
  Row,
  ButtonGroup
} from "reactstrap";

var createReactClass = require("create-react-class");
var LostButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on
    });

    this.setState({
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "lost"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Lost} />
      </Button>
    );
  }
});

var FoundButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "found"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Found} />
      </Button>
    );
  }
});

var DogButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "dog"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Dog} />
      </Button>
    );
  }
});
var CatButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "cat"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Cat} />
      </Button>
    );
  }
});

var BirdButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "bird"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Bird} />
      </Button>
    );
  }
});

var OtherButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "other"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Other} />
      </Button>
    );
  }
});

var FemaleButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "female"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Female} />
      </Button>
    );
  }
});

var MaleButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "male"}
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Male} />
      </Button>
    );
  }
});

var UnknownButton = createReactClass({
  getInitialState: function() {
    return {
      on: false,
      sat: 100,
      borderColor: "transparent"
    };
  },

  handleClick: function() {
    this.setState({
      on: !this.state.on,
      borderColor: this.state.on ? "grey" : "transparent"
    });
  },

  render: function() {
    return (
      <Button
        onClick={this.handleClick}
        active={this.state.found === "male female"} //makes it appear in all searches by gender
        style={{
          borderColor: this.state.borderColor,
          backgroundColor: "#00000000"
        }}
      >
        <img style={{ width: "70%" }} src={Unknown} />
      </Button>
    );
  }
});

class NoticeFormPage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      community: "",
      description: "",
      lastSeen: "",
      contact: "",
      species: "",
      colour: "",
      gender: "",
      neutered: "",
      pic1: "",
      pic2: "",
      pic3: "",
      tags: "",
      found: "",
      visible: false,
      notices: [],
      suggestions: []
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCommunityChange = this.handleCommunityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    this.handleColourChange = this.handleColourChange.bind(this);
    this.handleLastSeenChange = this.handleLastSeenChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleNeuteredChange = this.handleNeuteredChange.bind(this);
    this.handlePic1Change = this.handlePic1Change.bind(this);
    this.handlePic2Change = this.handlePic2Change.bind(this);
    this.handlePic3Change = this.handlePic3Change.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.handleFoundChange = this.handleFoundChange.bind(this);
    this.loadPage = this.loadPage.bind(this);
  }
  async uploadImage(picNo, e) {
    const r = new XMLHttpRequest();
    const d = new FormData();
    var u;

    d.append("image", e);

    r.open("POST", "https://api.imgur.com/3/image", false);
    r.setRequestHeader("Authorization", "Client-ID c6782e7ec6ba599");
    r.onreadystatechange = () => {
      if (r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText);
        u = "https://i.imgur.com/" + res.data.id + ".png";
        if (picNo === 1) {
          this.setState({ pic1: u });
        }
        if (picNo === 2) {
          this.setState({ pic2: u });
        }

        if (picNo === 3) {
          this.setState({ pic3: u });
        }
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

    var s = this.state.notices.filter(notice => {
      return notice.community === this.state.community;
    });
    console.log(s);
    if (s.length != 0) {
      this.setState({ notices: s });
    }
    console.log(this.state);
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
    console.log(this.state);
  }

  handlePostCodeChange(event) {
    this.setState({ postcode: event.target.value });
    console.log(this.state);
  }
  handleSpeciesChange(name) {
    this.setState({ species: name });
    var s = this.state.notices.filter(notice => {
      return notice.tags.includes(this.state.species);
    });
    if (s.length != 0) {
      this.setState({ notices: s });
    }
    console.log(this.state);
  }

  handleColourChange(event) {
    this.setState({ colour: event.target.value });
    var s = this.state.notices.filter(notice => {
      return notice.tags.includes(this.state.colour);
    });
    if (s.length != 0) {
      this.setState({ notices: s });
    }
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

  handleContactChange(event) {
    this.setState({ contact: event.target.value });
    console.log(this.state);
  }

  handleGenderChange(value) {
    this.setState({ gender: value });
    var s = this.state.notices.filter(notice => {
      return notice.tags.includes(this.state.gender);
    });
    if (s.length != 0) {
      this.setState({ notices: s });
    }
    console.log(this.state);
  }

  handleLastSeenChange(event) {
    this.setState({ lastSeen: event.target.value });
    console.log(this.state);
  }

  handleNeuteredChange(event) {
    this.setState({ neutered: event.target.value });
    var s = this.state.notices.filter(notice => {
      return notice.tags.includes(this.state.neutered);
    });
    if (s.length != 0) {
      this.setState({ notices: s });
    }
    console.log(this.state);
  }

  handleFoundChange(value) {
    this.setState({ found: value });
    var s = this.state.notices.filter(notice => {
      // If the person lost the dog, we're looking for found notices and vice versa
      return !notice.tags.includes(this.state.found);
    });
    if (s.length != 0) {
      this.setState({ notices: s });
    }
    console.log(this.state);
  }

  handleSubmit() {
    var maxId;
    fetch("http://webapps05backend.herokuapp.com/notice/max/id")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        console.log("response about maxid from backend");
        console.log(response);
        maxId = parseInt(response[0] ? response[0].id : "0") + 1;
        console.log("new maxid is " + maxId);
        this.uploadImage(1, this.state.pic1);
        this.uploadImage(2, this.state.pic2);
        this.uploadImage(3, this.state.pic3);
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
            postcode: this.state.postcode,
            contact: this.state.contact,
            lastSeen: this.state.lastSeen,
            tags:
              String.prototype.toLowerCase.apply(this.state.species) +
              " " +
              String.prototype.toLowerCase.apply(this.state.colour) +
              " " +
              String.prototype.toLowerCase.apply(this.state.tags) +
              " " +
              String.prototype.toLowerCase.apply(this.state.gender) +
              " " +
              String.prototype.toLowerCase.apply(this.state.neutered) +
              " " +
              String.prototype.toLowerCase.apply(this.state.found) +
              " " +
              String.prototype.toLowerCase.apply(this.state.community),
            pic1: this.state.pic1,
            pic2: this.state.pic2,
            pic3: this.state.pic3
          })
        });

        this.setState({
          title: "",
          community: "",
          description: "",
          postcode: "",
          species: "",
          colour: "",
          contact: "",
          gender: "",
          neutered: "",
          lastSeen: "",
          pic3: "",
          pic2: "",
          pic1: "",
          tags: "",
          visible: true,
          found: ""
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
      <div style={{ background: "#e6e6ca", fontSize: "20px" }}>
        <Container style={{ paddingTop: "20px" }}>
          <Form>
            <FormGroup row>
              <Label sm={2}> Title of Notice </Label>
              <Col sm={10}>
                <Input
                  placeholder="What is this notice called?"
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
            <Container style={{ paddingBottom: "15px" }}>
              <Row>
                <Col sm={12} md={5} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "30px" }}>This pet is</Label>
                </Col>

                <Col sm={12} md={4}>
                  <ButtonGroup>
                    <LostButton
                      onClick={() => this.handleFoundChange("lost")}
                      active={this.state.found === "lost"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                    />
                    {/* // >
                    //   <img style={{ width: "70%" }} src={Lost} />
                    // </Button> */}
                    <FoundButton
                      active={this.state.found === "found"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                      onClick={() => this.handleFoundChange("found")}
                    />
                  </ButtonGroup>
                </Col>

                <Col sm={12} md={3} />
              </Row>
            </Container>
            <Container style={{ padding: "10px" }}>
              <Row>
                <Col sm={12} md={5} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "30px" }}>Species</Label>
                </Col>
                <Col sm={12} md={4}>
                  <ButtonGroup>
                    <DogButton
                      onClick={() => this.handleSpeciesChange("dog")}
                      active={this.state.species === "dog"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                    />
                    {/* <img style={{ width: "100%" }} src={Dog} />
                    </Button> */}
                    <CatButton
                      active={this.state.species === "cat"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                      onClick={() => this.handleSpeciesChange("cat")}
                    />
                    {/* <img style={{ width: "100%" }} src={Cat} />
                    </Button> */}
                    <BirdButton
                      active={this.state.species === "bird"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                      onClick={() => this.handleSpeciesChange("bird")}
                    />
                    {/* <img style={{ width: "100%" }} src={Bird} />
                    </Button> */}
                    <OtherButton
                      onClick={() => this.handleSpeciesChange("other")}
                      active={this.state.species === "other"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                    />
                    {/* <img style={{ width: "100%" }} src={Other} />
                    </Button> */}
                  </ButtonGroup>
                </Col>
                <Col sm={12} md={3} />
              </Row>
            </Container>

            <Container style={{ paddingBottom: "15px" }}>
              <Row>
                <Col sm={12} md={5} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "20px" }}>Gender</Label>
                </Col>
                <Col sm={12} md={4}>
                  <ButtonGroup>
                    <FemaleButton
                      onClick={() => this.handleGenderChange("female")}
                      active={this.state.gender === "female"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                    />
                    {/* <img style={{ width: "60%" }} src={Female} />
                    </Button> */}
                    <MaleButton
                      active={this.state.gender === "male"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                      onClick={() => this.handleGenderChange("male")}
                    />
                    {/* <img style={{ width: "60%" }} src={Male} />
                    </Button> */}
                    <UnknownButton
                      active={this.state.gender === "unknown"}
                      style={{
                        borderColor: "transparent",
                        backgroundColor: "#00000000"
                      }}
                      onClick={() => this.handleGenderChange("unknown")}
                    />
                    {/* <img style={{ width: "60%" }} src={Unknown} />
                    </Button> */}
                  </ButtonGroup>
                </Col>

                <Col sm={12} md={5} />
              </Row>
            </Container>

            <FormGroup row>
              <Label sm={2}> Description of pet</Label>

              <Col sm={10}>
                <Input
                  placeholder="What name it responds to, any defining physical features etc."
                  name="description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Post Code </Label>
              <Col sm={10}>
                <Input
                  placeholder="Your postcode, e.g. NG8 2JN"
                  name="postcode"
                  value={this.state.postcode}
                  onChange={this.handlePostCodeChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Last Seen </Label>
              <Col sm={10}>
                <Input
                  placeholder="Date/ time you last saw your pet"
                  value={this.state.lastSeen}
                  onChange={this.handleLastSeenChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Contact info </Label>
              <Col sm={10}>
                <Input
                  placeholder="Contact details such as address/ phone number etc"
                  value={this.state.contact}
                  onChange={this.handleContactChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
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
                  <option>Grey</option>
                </Input>
              </Col>
              <Label sm={2}> Neutered </Label>
              <Col sm={4}>
                <Input
                  type="select"
                  name="neutered"
                  value={this.state.neutered}
                  onChange={this.handleNeuteredChange}
                >
                  <option className="text-muted" />
                  <option>Neutered</option>
                  <option>Intact</option>
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
                  placeholder="Enter your tags here (microchipped, breed etc...)"
                  type="text"
                  name="tags"
                  value={this.state.tags}
                  style={{ marginBottom: "5px" }}
                  onChange={this.handleTagsChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Button onClick={this.handleSubmit}>Submit</Button>
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

  loadPage() {
    fetch("http://webapps05backend.herokuapp.com/notice/*")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ notices: response });
      });
  }

  componentDidMount() {
    this._isMounted = true;
    this.loadPage();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default NoticeFormPage;
