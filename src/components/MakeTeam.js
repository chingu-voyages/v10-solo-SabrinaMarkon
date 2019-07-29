import React, { Component } from 'react';

export default class MakeTeam {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      description: '',
      categories: [], // should be in its own table with teamid<->categoryid
      members: [
        {userid: '', job_title: '', skills: [{skill: 'adsfdfdf', level: 'Beginner'}, {skill: 'ffffff', level: 'Lead'}]}, 
        {userid: '', job_title: '', skills: [{skill: 'hhhhh', level: 'Beginner'}, {skill: 'jjjjj', level: 'Senior'}]}  //..... job_title can be different for each team a person is a member of.
      ],
      active: true  // change to false to go on vacation.
      // total earnings, jobs done, reputation, team_portfolio (job ids completed), should be other tables.
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
        <h1>Build a Dev Team!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Team Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="Team Name" 
            placeholder="Enter Team Name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">About Your Dev Team</label>
            <textarea className="form-control" id="description" aria-describedby="Dev Team Description" 
            placeholder="Enter Dev Team Description" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
          </div>
          
          {/* Add part of form to add users and each of their skills/levels. */}

          <div className="form-group">
            {/* Get categories from database  */}
            <label htmlFor="categories">Preferred Job Categories</label>
              <select multiple id="categories" className="form-control" onChange={this.handleChange}>
              <option defaultValue disabled>Choose One or More...</option>
              <option>All</option>
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

          {/* Add "active" switch to make team immediately discoverable or not */}

          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}