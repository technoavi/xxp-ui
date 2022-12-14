import React, { Component, useState } from "react";

import Image from "react-bootstrap/Image";
import "./../College.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import add_syllab from "../../assets/add_syllabus.svg";
import attach from "../../assets/attachmnt.svg";
import AddSyllabusModal from "./AddSyllabusModal";
import Mycalendar from "../calendar/Mycalendar";
import moment from "moment";
export default class SyllabusTab extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let dt = moment();

    return (
      <div style={{ textAlign: "left", marginTop: "12px" }}>
      <div className="row">
        <div className="col">
        <span id="hd-colg-name">Current Time {dt.format("hh:mm a") }</span>
        </div>
       
      

          {/* <AddSyllabusModal show={this.state.isOpen} onClose={this.toggleModal}></AddSyllabusModal> */}
        
      </div>

      <hr />
      <div className="row">
     <Mycalendar/>
      </div>
    </div>
   
        
    );
  }
}
