import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Course } from "./components/course/Course";
import ModuleTab from "./components/module/ModuleTab";
import SignUp from "./components/login/SignUp";
import './App.css';
import { Header } from "./components/header/Header";
import StuModuleTab from "./components/student/StuModuleTab";
import history from './history';
class Home extends Component {
  render() {
      
    return (
      <div>
        <Router history={history}>
          <>
          <Header />
        
      
            <Switch>
            <Route path="/login" component={SignUp} />
            <Route path="/md" exact component={ModuleTab} />
           <Route path="/tc" exact component={Course} />
           <Route path="/st" exact component={StuModuleTab} />
          
            </Switch>
          </>
       
        </Router>
      </div>
    );
  }
}
export default Home;
