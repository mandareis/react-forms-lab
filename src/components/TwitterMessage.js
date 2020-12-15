import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  handlesMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(event) => this.handlesMessage(event)}
        />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;

// {(event) => {
//   this.setState({ message: event.target.value });
// }}
