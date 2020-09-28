import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import Calendar from './Components/Dashboard/Calendar/ReactCalendar';
import Boards from './Components/Dashboard/Boards/Boards';
import Login from './Components/Login/Login'
import Inbox from './Components/Dashboard/Inbox/Inbox'
import Profile from './Components/Dashboard/Profile/Profile';

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/calendar" component={Calendar} />
    <Route path="/dashboard/reports" component={Inbox} />
    <Route path="/dashboard/boards" component={Boards} />
    <Route path="/dashboard/boards/:id" component={()=><Boards index={Math.random()} key={Math.random()}/>}  />
    <Route path="/dashboard/profile" component={Profile} />
    <Route path="/login" component={Login} />
  </Switch>
);
