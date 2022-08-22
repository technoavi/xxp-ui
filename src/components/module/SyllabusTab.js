import React, { Component, useState } from "react";

import Image from "react-bootstrap/Image";
import "./../College.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import add_syllab from "../../assets/add_syllabus.svg";
import attach from "../../assets/attachmnt.svg";
import AddSyllabusModal from "./AddSyllabusModal";

export default class SyllabusTab extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div style={{ textAlign: "left", marginTop: "12px" }}>
        <div className="row">
          <div className="col">
            <span id="hd-colg-name">Welcome to Machine Learning</span>
          </div>
          <div className="col"></div>
          <div className="col">
            <Image
              src={add_syllab}
              onClick={this.toggleModal}
              alt="add attachments"
              style={{
                width: 33,
                height: 33,
                margin: "0 0 0 15px",
                display: "block",
                cursor: "pointer",
              }}
            />

            <AddSyllabusModal show={this.state.isOpen} onClose={this.toggleModal}></AddSyllabusModal>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col" style={{ textAlign: "left", marginTop: "8px" }}>
            <span id="ass-title"> Lead Instructor Name </span>
            <br />
            <span id="ins-text">Mr. Avinash Sri</span>
            <br />
            <span id="ass-title"> Professor Name </span>
            <br />
            <span id="ins-text">Mr. Avinash Sri</span>
            <br />
            <span id="ins-text">Mr. Avinash Sri</span>
            <br />
          </div>
          <div className="col">
            <div>
              <Image src={attach} alt="attachment" width="30" />
              <Link to="/files/videolist.json" target="_blank" download>
                Handouts
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
