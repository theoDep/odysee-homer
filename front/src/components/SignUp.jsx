import { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.email}</h1>
        <input
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
