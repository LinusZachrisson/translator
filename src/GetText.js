import React, { Component } from "react";

class GetText extends Component {
  state = {
    text: "...",
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.textToTranslate(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.text} onChange={this.onChange} />
          <button type="submit">Spara</button>
        </form>
      </div>
    );
  }
}

export default GetText;
