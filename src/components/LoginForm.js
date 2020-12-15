import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handlesUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlesPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // const [state, setState] = useState({});
    event.preventDefault();
    if (this.state.username === "") {
      return;
    }
    if (this.state.password === "") {
      return;
    }
    this.props.handleLogin(this.state);
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={(event) => this.handlesUsername(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={(event) => this.handlesPassword(event)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
