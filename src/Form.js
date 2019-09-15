import React from "react";

export default class Form extends React.Component {
  state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formSubmittied: false
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postForm = () => {
    this.setState({
      formSubmittied: true
    });
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      formSubmittied: false
    });
    this.props.onChange({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.postForm();
    setTimeout(()=>{
        this.resetForm();
    }, 3000);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="subject"
            placeholder="Subject"
            value={this.state.subject}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={e => this.change(e)}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
        <div className={`form-submitted ${this.state.formSubmittied ? 'show' : 'hide'}`}>
          Form Submitted
        </div>
      </React.Fragment>
    );
  }
}
