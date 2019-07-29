import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // validate

    // send to database

    // reset form

    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="Your Name" 
            placeholder="Enter Your Name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="Email" 
            placeholder="Enter Your Email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" aria-describedby="Subject" 
            placeholder="Enter Subject" value={this.state.subject} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" aria-describedby="Message" 
            placeholder="Enter Message" rows="10" value={this.state.message} onChange={this.handleChange}></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    )
  }
}