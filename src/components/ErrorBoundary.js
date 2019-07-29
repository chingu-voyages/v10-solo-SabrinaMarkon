import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    }
  }  

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops!!! Something went wrong!</h1>
          <p>The error: {this.state.error.toString()}</p>
          <p>Where it occurred: {this.state.info.componentStack}</p>          
        </div>
      );
    }
    return this.props.children;
  }
}