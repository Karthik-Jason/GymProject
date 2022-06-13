import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./create-trainee-component.css";
import moment from "moment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PaidIcon from "@mui/icons-material/Paid";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Divider } from "@mui/material";

export default class EditTrainee extends Component {
  state = {
    trainee_name: "",
    trainee_address: "",
    trainee_fee: "",
    trainee_aadhar: "",
    trainee_joined: new Date(),
    trainee_paidon: new Date(),
    show: false,
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/trainees/" + this.props.match.params.id)
      .then((response) => {
        console.log("response ", response.data);
        this.setState({
          trainee_name: response.data.trainee_name,
          trainee_address: response.data.trainee_address,
          trainee_fee: response.data.trainee_fee,
          trainee_aadhar: response.data.trainee_aadhar,
          trainee_joined: new Date(response.data.trainee_joined),
          trainee_paidon: new Date(response.data.trainee_paidon),
        });
        // }).catch( (err) => {
        //     console.log(err);
        // })
      });
  }

  handleModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  onChangetraineeName = (e) => {
    this.setState({
      trainee_name: e.target.value,
    });
  };
  onChangetraineeAddress = (e) => {
    this.setState({
      trainee_address: e.target.value,
    });
  };
  onChangetraineeFee = (e) => {
    this.setState({
      trainee_fee: e.target.value,
    });
  };
  onChangetraineeAadhar = (e) => {
    this.setState({
      trainee_aadhar: e.target.value,
    });
  };
  onChangeTraineeJoined = (trainee_joined) => this.setState({ trainee_joined });

  onChangeTraineePaidOn = (trainee_paidon) => this.setState({ trainee_paidon });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(`Form Submitted`);
    console.log(`trainee Name ${this.state.trainee_name}`);
    console.log(`trainee address ${this.state.trainee_address}`);
    console.log(`trainee Fee ${this.state.trainee_fee}`);
    console.log(`trainee Aadhar ${this.state.trainee_aadhar}`);
    console.log(`trainee joined on ${this.state.trainee_joined.toISOString()}`); //2021-10-28T06:58:16.802Z db date format
    console.log(
      `trainee last paid on ${this.state.trainee_paidon.toISOString()}`
    ); //2021-10-28T06:58:16.802Z db date

    let newTrainee = {
      trainee_name: this.state.trainee_name,
      trainee_address: this.state.trainee_address,
      trainee_fee: this.state.trainee_fee,
      trainee_aadhar: this.state.trainee_aadhar,
      trainee_joined: this.state.trainee_joined.toISOString(),
      trainee_paidon: this.state.trainee_paidon.toISOString(),
    };
    axios
      .put(
        "http://localhost:4000/trainees/update/" + this.props.match.params.id,
        newTrainee
      )
      .then((res) => console.log("result data : ", res.data));

    this.setState({
      trainee_name: "",
      trainee_address: "",
      trainee_fee: "",
      trainee_aadhar: "",
      trainee_joined: "",
      trainee_paidon: "",
    });
    this.handleModal();
    this.props.history.push("/trainees");
    this.props.history.go();
  };
  render() {
    return (
      <div className="form-total" style={{ marginTop: 10 }}>
        <form>
          <Card
            bg="info"
            border="dark"
            className="cardform"
            style={{ width: "31rem", height: "85rem" }}
          >
            <h3>
              
              <Card.Header border="dark" className="heading">
                Edit Trainee
              </Card.Header>
            </h3>
            <Card.Body>
              <div className="form-group">
                <AccountCircleIcon />
                <input
                  placeholder="Name"
                  type="text"
                  size="40"
                  className="form-control"
                  value={this.state.trainee_name}
                  onChange={this.onChangetraineeName}
                />
              </div>
              <div className="form-group">
                <AddLocationAltIcon />
                <input
                  placeholder="Address"
                  type="text"
                  className="form-control"
                  value={this.state.trainee_address}
                  onChange={this.onChangetraineeAddress}
                />
              </div>
              <div className="form-group">
                <PaidIcon />
                <input
                  placeholder="Fee Paid"
                  type="text"
                  className="form-control"
                  value={this.state.trainee_fee}
                  onChange={this.onChangetraineeFee}
                />
              </div>
              <div className="form-group">
                <ContactMailIcon />
                <input
                  placeholder="Aadhar Number"
                  type="text"
                  className="form-control"
                  value={this.state.trainee_aadhar}
                  onChange={this.onChangetraineeAadhar}
                />
              </div>
              <br></br>
              <Divider color="black" />
              <br></br>
              <div className="date-calendar">
                <label className="label-bold">                  
                  Please select Date of Join :
                </label>
                <Calendar
                  onChange={this.onChangeTraineeJoined}
                  value={this.state.trainee_joined}
                />
              </div>
              <div className="display-date">
                <span className="date-bold">                  
                  {moment(this.state.trainee_joined).format("LL")}
                </span>
              </div>
              <br></br>
              <Divider color="black" />
              <br></br>
              <div className="date-calendar">
                <label className="label-bold">                  
                  Please select Date of Fee Paid :
                </label>
                <Calendar
                  onChange={this.onChangeTraineePaidOn}
                  value={this.state.trainee_paidon}
                />
              </div>
              <div className="display-date">
                <span className="date-bold">
                  
                  {moment(this.state.trainee_paidon).format("LL")}
                </span>
              </div>
            </Card.Body>
          </Card>
          <div className="modalClass">
            <Button onClick={() => this.handleModal()}>Update Details</Button>
          </div>
          <Modal show={this.state.show} onHide={() => this.handleModal()}>
            <Modal.Header closeButton>Confirm Your Changes</Modal.Header>
            <Modal.Body>Are you sure to Update Trainee Details ?</Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.handleModal()}>Close</Button>
              <Button onClick={(e) => this.onSubmit(e)}> Update</Button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
    );
  }
}
