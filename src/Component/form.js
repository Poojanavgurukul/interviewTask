import React from 'react';
import { Col, Button, FormGroup, Label} from 'reactstrap';
const initialState = {
    name: "",
    dateOfBirth:"",
    nameError: "",
    dateError: "",
  };
class form extends React.Component{
    state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let dateError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }
    else if(this.state.name.length>=50){
        nameError="name should not more than 50 chars"
    }
    if (this.state.dateOfBirth.includes("1-Jan-2000")) {
        dateError = "not valid date";
    }

    if (dateError || nameError) {
      this.setState({ dateError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };
    render(){
        return <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Name" sm={2}>Name </Label>
          <Col sm={10}>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          </Col>
        </FormGroup>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
        </div>
        <FormGroup>
          <Label for="Date of Birth" sm={2}>Date of Birth </Label>
          <Col sm={10}>
          <input
            name="dateOfBirth"
            placeholder="dateOfBirth"
            value={this.state.dateOfBirth}
            onChange={this.handleChange}
          />
          </Col>
        </FormGroup>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.dateError}
          </div>
        <Button type="submit">submit</Button>
      </form>
    }
}
export default form;