import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// components
import HowItWorks from '../components/HowItWorks';
import Signup from '../components/Signup';
import Login from '../components/Login';
import PostJob from '../components/PostJob';
import Contact from '../components/Contact';
import UserMain from '../components/UserMain';
import Profile from '../components/Profile';
import Teams from '../components/Teams';
import Jobs from '../components/Jobs';
import Money from '../components/Money';
import NotFound from '../components/NotFound';

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
      <Route path="/login" component={Login} />
      <Route path="/postjob" component={PostJob} />
      <Route path="/contact" component={Contact} />

      {/* logged in  */}
      {/* main members area after login - maybe reputation here? */}
      <Route path="/main" component={UserMain} />
      {/* profile should include reputation information (maybe) */}
      <Route path="/profile" component={Profile} />
      {/* teams you are a member of, create a new team, invites, invite others */}
      <Route path="/teams" component={Teams} />
      {/* jobs your team is working on. jobs you want to hire a team for. job list to bid on. */}
      <Route path="/jobs/:type" component={Jobs} />
      {/* your earnings, your teams' earnings per team, owed and by which employer. Payments you owe others you have hired  */}
      <Route path="/money/:type" component={Money} />

      {/* custom 404  */}
      <Route component={NotFound} />
    </Router>
  );
}

export default App;
