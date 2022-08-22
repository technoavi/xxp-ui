import React from "react";
import PropTypes from "prop-types";
import "./../College.css";
import StarRatings from "react-star-ratings";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import add from "../../assets/dashboard/add.svg";
import Button from "react-bootstrap/Button";
import DropUploader from "./DropUploader";

export default class AddModuleModal extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true,
    };
    
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 22,
      right: 0,
      backgroundColor: "rgba(3, 21, 66, 0.9)",
      padding: 50,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      width: 744,
      height: 401,
      borderRadius: 20,
      boxShadow: "0 2px 20px 0 rgba(158, 226, 242, 0.24)",
      display: "block",
      margin: "101px auto",
      padding: 30,
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <div className="row">
    <div className="col">
    <div>
              <span id="hd-colg-name">Add Modules</span>

            </div>
    </div>
    <div className="col-9">
    <div>
              <span id="hd-colg-name" onClick={this.props.onClose} style={{float: 'right',
    textAlign: 'right', cursor:'pointer'}}>X</span><br/>
    <label id="cc-lbl" style={{ marginTop: "20px" }}>
            Add Module
          </label>
          <input id="cc-inp" type="text" placeholder="Enter Module title" />
          <label id="cc-lbl" style={{ marginTop: "20px" }}>
            Description
          </label>
          <textarea
            id="cc-txtarea"
            type="text"
            placeholder=" Enter Course Description"
          />
          <label
            style={{
              marginTop: "20px",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            id="cc-lbl"
          >
            Choose Instructor
          </label>
          <br />
          <select id="drp" style={{ width: "95%" }}>
            <option value="volvo">Jay</option>
            <option value="saab">Kuldeep</option>
            <option value="mercedes">Avinash</option>
            <option value="audi">Martin</option>
          </select>{" "}
            </div>
          
                  
    </div>
	 
</div>
<hr/>
<div style={{ float:'right', marginRight: '25px'}}>
            <button id="pills-btn">
                    <span id="header-label" >
                      ADD
                    </span>
                  </button></div>
        </div>
      </div>
    );
  }
}

AddModuleModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};
