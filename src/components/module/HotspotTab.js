import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../assets/profile.jpg";
import ai from "../../assets/courses.jpg";
import play from "../../assets/play.svg";
import VideoInput from "../videoUpload/VideoInput";
import share from "../../assets/share.svg"

export default class HotspotTab extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      
              hostspotvideos: [
                {
                  id: 1,
                  url: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
                  title: "Introduction",
                  runtime: "5.0",
                  duration: "5.7 min",
                },
                {
                  id: 2,
                  url: "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg",
                  title: "Magnets & Lights ",
                  runtime: "5.0",
                  duration: "6.1 min",
                },
                {
                  id: 3,
                  url: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
                  title: "Reflections",
                  runtime: "5.0",
                  duration: "2.7 min",
                },
                {
                  id: 4,
                  url: "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg",
                  title: "Forces",
                  runtime: "5.0",
                  duration: "5.1 min",
                },
              ],
             
         
        
    };
  }

  renderTableData() {
    return this.state.hostspotvideos.map((student, index) => {
      const {
        id,
        url,
        title,
        runtime,
        duration,
      } = student; 
      return (
        <div>
          <tr key={id}>
            <td>
              <div id="sess-vid-div">
                <div id="wrapper">
                  <Image
                    src={url}
                    alt="mqmin"
                    style={{ width: 120, height: 90, opacity: 0.53 }}
                  />
                  <Image
                    src={play}
                    alt="pause"
                    style={{ width: 33, height: 33, margin: "26px 0 0 38px" }}
                    id="img2"
                  />
                </div>
              </div>
            </td>
            <td style={{ verticalAlign: "top", width: "806px" }}>
              <div style={{ width: "606px", marginLeft: "12px" }}>
                <span id="mod-title">chapter {id}</span>
                <br />
                <span id="stu-name">{title}</span>
                <br />
                <span id="cc-lbl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elitsasa.
                </span>
                <div id="stu-div" style={{ width: "130px" }}>
                {" "}
                <span id="stu-name"style={{ color: "red" }}>{duration}</span>
                
              </div>
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "130px" }}>
               
                <div style={{textAlign: "right"}}>
                <Image width={30} height={30} src={share} alt="Card image cap" />
                </div>
              </div>
            </td>
          </tr>
          <hr style={{ marginBottom: " 0.7rem", marginTop: "0.5rem" }} />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="row" id="ses-div">
          <div className="row">
        <div className="col">
          <span id="hd-colg-name">Pre watched Content</span>
        </div>
        <hr />
      </div>
        <div className="row" >
          <div className="col-sm-3">
            <div style={{ margin: "15px", width: "180px" }}>
              <Image width={438} height={105} src={ai} alt="Card image cap" />
              <br />
              <span id="dash-lbl">By Mr Avinash Srivastava</span>
            </div>
          </div>
          <div
            className="col-sm-9"
            style={{
              marginLeft: "25px",
              textAlign: "left",
          
              width: "100%"
            }}
          >
            <div>
          
              <span id="mod-title">Module 1</span>
              <br />
              <div>
                {" "}
                <span id="stu-name">
                  Finance methods of 2020 and it Priciples to solve crisis.
                </span>
                <br />
                <span id="cc-lbl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit1.
                </span>
                <br />
                <p id="dash-lbl" style={{ marginTop: "18px" }}>
                  {" "}
                  <u>4 Sessions</u>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div
                    id="add-ses"
                    style={{ float: "right", textAlign: "center" }}
                  >
                    <span id="all-o">Add new Session</span>
                  
                  </div>
                </p>
              </div>
            </div>
            <VideoInput width={100} height={250} />
          </div>
          <hr
            style={{ marginBottom: "1rem", marginTop: "0.5rem", width: "95%" }}
          />
        </div>

        <table id="students" style={{ textAlign: "left" }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
