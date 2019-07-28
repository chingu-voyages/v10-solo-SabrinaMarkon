import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'redux';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Hire a Team!</h1>
      </div>
      {/* not logged in  */}
      <Route exact path="/" component={App} />
      <Route path="/howitworks" component={HowItWorks} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exgitct path="/postjob" component={PostJob} />
      <Route exact path="/contact" component={Contact} />

      {/* logged in  */}
      {/* main members area after login - maybe reputation here? */}
      <Route exact path="/main" component={UserMain} />
      {/* profile should include reputation information (maybe) */}
      <Route exact path="/profile" component={Profile} />
      {/* teams you are a member of, create a new team, invites, invite others */}
      <Route exact path="/teams" component={Teams} />
      {/* jobs your team is working on. jobs you want to hire a team for. job list to bid on. */}
      <Route exact path="/jobs/:type" component={Jobs} />
      {/* your earnings, your teams' earnings per team, owed and by which employer. Payments you owe others you have hired  */}
      <Route exact path="/money/:type" component={Money} />

      {/* custom 404  */}
      <Route component={NotFound} />
    </Router>
  );
}

export default App;
