import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Card, CardBody, Button } from "reactstrap";
import ai from "../../assets/ai.jpg";
import pin from "../../assets/pin.png";
import Image from "react-bootstrap/Image";
import DownloadLink from "react-download-link";

class AnnouncementCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      id,
      faculty,
      title,
      department,
      date,
      description,
    } = this.props.person;
    return (
      <div style={{ width: "300px", marginLeft: "8px", marginRight: "8px" }}>
        <Card style={{ width: "290px", height: "290px" }}>
        <div className="row">
    <div className="col-2">
    <Avatar
            roundedcircle="true"
              alt="Professor"
              src={ai}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "white",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            />
         
    </div>
    <div className="col-7">
    
  <div  style={{ textAlign: 'right', marginTop: "-2em",  marginRight: "5px",wordBreak:'break-word'}}>
  <span id="ins-card-lb1">{title}</span>
  
  </div>
    </div>
	 
</div>
          <CardBody style={{
                padding: "10px",marginTop: "2em"
              }}>
            <div>
            
              <span id="ins-card-lb3">{department}</span>
              <br />
              <div
              id="trunc-txt"
              
            >
              {/* <span>{description}</span> */}
              <br />
            </div>
            <a  href={faculty} download>
              <span id="ins-card-lb2" style={{color: 'darkblue'}}>Download Report</span>
              </a>
              <Image
                    src={pin}
                    alt="pin"
                    style={{ height: "35px", width: "35px", padding: "2PX", textAlign: 'right',
                    marginTop: "2px" }}
                  />
              <br />
            </div>

           
         
          </CardBody>
          <div className="row">
    
    <div className="col">
    <div  id="i-tit" style={{
                marginBottom: "10px" ,float: 'right',marginRight: '10px'
              }}>
              <span id="c-tit-text">Posted On &nbsp;{date}</span>

              </div>
    </div>
	
</div>
            
        </Card>
      </div>
    );
  }
}

export default AnnouncementCard;
