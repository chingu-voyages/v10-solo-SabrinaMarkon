import React, { Component } from 'react';

export default class PostJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      userid: '',
      title: '',
      description: '',
      budget: '',
      time_estimate: '',
      categories: [],
      skill_levels: [],
      skill_tags: [],
      posted: null,
      completed: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = event => {
    this.setState({ 
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // check.
    console.log(this.state.title);

    // validation.

    // send to database.

    // reset form.
  }

  render() {
    return (
      <div>
        <h1>Find Your Team!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="Job Title" placeholder="Enter Job Title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Job Description</label>
            <textarea className="form-control" id="description" aria-describedby="Job Description" placeholder="Enter Job Description" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Job Budget</label>
            <input type="text" className="form-control" id="budget" aria-describedby="Budget Range" placeholder="Enter Budget Range" value={this.state.budget} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="time_estimate">Estimated Time</label>
            <input type="text" className="form-control" id="time_estimate" aria-describedby="Expected Time" placeholder="Enter Expected Time" value={this.state.time_estimate} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <div>Select Skill Levels (defaults to all)</div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_levels1" value="Junior" />
              <label className="form-check-label" htmlFor="skill_levels1">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_levels2" value="Intermediate" />
              <label className="form-check-label" htmlFor="skill_levels2">Intermediate</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_levels3" value="Senior" />
              <label className="form-check-label" htmlFor="skill_levels3">Senior</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_levels4" value="Lead" />
              <label className="form-check-label" htmlFor="skill_levels4">Lead</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories</label>
              <select multiple id="categories" className="form-control">
              <option defaultValue disabled>Choose One or More...</option>
              <option>Web</option>
              <option>Game</option>
              <option>WordPress</option>
              <option>Other Categories...</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
