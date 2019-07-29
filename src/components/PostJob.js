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
      skill_junior: false,
      skill_intermediate: false,
      skill_senior: false,
      skill_lead: false,
      skill_tags: [],
      posted: null,
      completed: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = event => {
    if (event.target.id === 'categories') {
      this.setState({
        categories: Array.from(event.target.selectedOptions, (item) => item.value)
      });
    } else {
      this.setState({ 
        [event.target.id]: event.target.value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    // check.
    console.log(this.state.categories);

    // validation.

    // send to database endpoint.

    // reset form.
  }

  render() {
    return (
      <div>
        <h1>Find Your Team!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="Job Title" 
            placeholder="Enter Job Title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Job Description</label>
            <textarea className="form-control" id="description" aria-describedby="Job Description" 
            placeholder="Enter Job Description" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Job Budget</label>
            <input type="text" className="form-control" id="budget" aria-describedby="Budget Range" 
            placeholder="Enter Budget Range" value={this.state.budget} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="time_estimate">Estimated Time</label>
            <input type="text" className="form-control" id="time_estimate" aria-describedby="Expected Time" 
            placeholder="Enter Expected Time" value={this.state.time_estimate} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <div>Select Skill Levels (defaults to all)</div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_junior" value="Junior" 
              checked={this.state.skill_junior === 'Junior'} onChange={this.handleChange} />
              <label className="form-check-label" htmlFor="skill_junior">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_intermediate" value="Intermediate" 
              checked={this.state.skill_junior === 'Intermediate'} onChange={this.handleChange} />
              <label className="form-check-label" htmlFor="skill_intermediate">Intermediate</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_senior" value="Senior" 
              checked={this.state.skill_junior === 'Senior'} onChange={this.handleChange} />
              <label className="form-check-label" htmlFor="skill_senior">Senior</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="skill_lead" value="Lead" 
              checked={this.state.skill_junior === 'Lead'} onChange={this.handleChange} />
              <label className="form-check-label" htmlFor="skill_lead">Lead</label>
            </div>
          </div>
          <div className="form-group">
            {/* Get categories from database  */}
            <label htmlFor="categories">Categories</label>
              <select multiple id="categories" className="form-control" onChange={this.handleChange}>
              <option defaultValue disabled>Choose One or More...</option>
              <option>Any</option>
              <option>Web Apps</option>
              <option>Games</option>
              <option>WordPress</option>
              <option>Ecommerce</option>
              <option>Mobile</option>
              <option>Drupal</option>
              <option>2D Graphics</option>
              <option>3D Graphics</option>
              <option>Animation</option>
              <option>Design</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
