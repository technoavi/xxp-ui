import React from "react";
import PropTypes from "prop-types";
import "./../College.css";
import StarRatings from "react-star-ratings";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import add from "../../assets/dashboard/add.svg";
import Button from "react-bootstrap/Button";
import DropUploader from "./DropUploader";
import { Slider } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

const componentConfig = {
  iconFiletypes: [".pdf", ".zip"],
  showFiletypeIcon: true,
  postUrl: "https://honeysuckle-snowstorm.glitch.me/uploadHandler",
};
export default class AddHotspotModal extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true,
      value:'',
    };
  }

 handleSliderChange = (event, newValue) => {
    this.state.value=newValue;
  };

 handleInputChange = (event) => {
    this.state.value(event.target.value === '' ? '' : Number(event.target.value));
  };

   handleBlur = () => {
    if (this.state.value < 0) {
        this.state.value(0);
    } else if (this.state.value > 100) {
        this.state.value(100);
    }
  };
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
          <div>
            <div>
              <span id="hd-colg-name">Upload Attachments</span>
            </div>
            <br />
            <label id="ins-text">Add Attachment Title</label>
            <div
              style={{ borderRadius: "22.5px", border: "solid 1px #cbd4db" }}
            >
              <input
                type="text"
                name="assgn"
                placeholder="Add title to Attachment"
                style={{
                  marginTop: "6px",
                  marginBottom: "6px",
                  marginLeft: "12px",
                  width: "95%",
                  border: "none",
                  outline: "none",
                }}
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              {/* <DropUploader
                config={componentConfig}
                maxSize={500}
                onUpload={(file) => console.log(file)}
                onRemove={(file) => console.log(file)}
              /> */}

              <br/>
           <div>
           <Grid container spacing={2} alignItems="center">
       
       <Grid item xs>
       <Slider
             value={typeof this.state.value === 'number' ? this.state.value : 0}
            onChange={this.handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
          
          max="200"

          />
       </Grid>
       <Grid item>
       <Input
            value={this.state.value}
            margin="dense"
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
       </Grid>
     </Grid>
               </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <Image
                  id="add-icon"
                  roundedCircle
                  src={add}
                  alt="instructors"
                />{" "}
                &nbsp;&nbsp;
                <span id="cc-label">Add Files</span>
              </div>
              <div className="col">
                <div style={{ textAlign: "right" }}>
                  <button
                    id="pills-btn"
                    onClick={this.props.onClose}
                    style={{ background: "grey", cursor: "pointer" }}
                  >
                    <span id="header-label">CANCEL</span>
                  </button>{" "}
                  &nbsp;&nbsp;
                  <button id="pills-btn">
                    <span id="header-label" style={{ cursor: "pointer" }}>
                      SUBMIT
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddHotspotModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};
