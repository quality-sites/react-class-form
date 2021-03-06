import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <pre>
          {JSON.stringify(this.state.fields, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
