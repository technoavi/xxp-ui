import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import Session from "../../assets/session.svg";
import attach from "../../assets/attachmnt.svg";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default class StuSyllabusTab extends Component {
  render() {
    return (
	<div style={{textAlign: "left", marginTop: '12px'}} >
    <span id="hd-colg-name">Welcome to Machine Learning</span>
    <hr/>
    <div className="row">
    <div className="col" style={{textAlign: "left", marginTop: '8px'}}>
<span id="ass-title"> Lead Instructor Name  </span><br/>
<span id="ins-text">Mr. Avinash Sri</span><br/>
<span id="ass-title">  Professor Name  </span><br/>
<span id="ins-text">Mr. Avinash Sri</span><br/>
<span id="ins-text" >Mr. Avinash Sri</span><br/>
    </div>
    <div className="col">
      <div>
        <Image src={attach} alt="attachment" width='30' />
    <Link to="/files/videolist.json" target="_blank" download>Handouts</Link>

        </div>
    </div>
	
</div>
</div>
	
	  );
  }
}