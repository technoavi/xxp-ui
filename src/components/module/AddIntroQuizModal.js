import React from "react";
import PropTypes from "prop-types";
import "./../College.css";
import StarRatings from "react-star-ratings";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import Radio from '@material-ui/core/Radio';
import Button from "react-bootstrap/Button";
import DropUploader from "./DropUploader";
import OptionCreator from './OptionCreator'


export default class AddIntroQuizModal extends React.Component {

    constructor(props){
        super(props);
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
      width: 960,
      height: 450,
      borderRadius: 20,
      boxShadow: "0 2px 20px 0 rgba(158, 226, 242, 0.24)",
      display: "block",
      margin: "80px auto",
      padding: 30,
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <div>
              <span id="hd-colg-name">Questions</span><br/>
<div style={{ overflowY: "scroll",    height: '320px' }}>
{/* <label id="cc-lbl" style={{ marginTop: "20px" }}>
           Question
          </label>
          <input id="cc-inp" type="text" placeholder="Enter Question"  />
          <label id="cc-lbl" style={{ marginTop: "20px" }}>
            Add Answer
          </label><br/>  */}
          <OptionCreator/>
           
          {/* <button id="pills-btn" style={{cursor : 'pointer' ,marginTop: '12px',
    marginLeft: '45px', width: '14%'}}>ADD &nbsp;
          <i className="icon-done"></i></button>  */}
          </div>
            <hr/>
            <div style={{textAlign: 'right'}}>
             <button id="pills-btn" onClick={this.props.onClose}  style={{background:'grey',cursor : 'pointer'}}>
               <span id='header-label'>CANCEL</span></button> &nbsp;&nbsp;
             <button id="pills-btn"><span id='header-label' style={{cursor : 'pointer'}}>SUBMIT</span></button> 
              </div></div>
        </div>
      </div>
    );
  }
}

AddIntroQuizModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};
