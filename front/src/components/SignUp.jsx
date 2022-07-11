import { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      verifyPassword: "",
      name: "",
      lastname: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createInput = this.createInput.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  createInput = (name, type, placeholder = "") => {
    return (
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={this.state[name]}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <>
        <h1>{JSON.stringify(this.state)}</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.createInput("email", "email", "Email")}
          {this.createInput("password", "password", "Password")}
          {this.createInput("verifyPassword", "password", "Verify Password")}
          {this.createInput("name", "text", "Name")}
          {this.createInput("lastname", "text", "Lastname")}
          <button type="submit">Sign Up</button>
        </form>
      </>
    );
  }
}
