import React, { Component } from "react";
import { Card } from "reactstrap";
import Image from "react-bootstrap/Image";
import Module from "../../assets/modules.svg";
import Session from "../../assets/session.svg";
import Hour from "../../assets/hours.svg";
import StarRatings from "react-star-ratings";


export default  class StudentCourseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      id,
      category,
      rating,
      course,
      modules,

      session,
      hours,
    } = this.props.person;
    return (
      <div style={{ marginLeft: "5px" }}>
        <Card
          style={{
            width: "320px",
            height: "165px",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <div style={{ marginLeft: "14px", marginTop: "14px" }}>
            <div id="ins-crs-cc-tit" style={{}}>
              <span id="c-tit-text">{category}</span>
            </div>
            <br />
            <div>
              <span id="ins-crs-cc-txt">{course}</span>
              <br />
              <StarRatings
                starWidthAndHeight="2.5px"
                starRatedColor="#ffc32e"
                starSelectingHoverColor="rgb(230, 67, 47)"
                rating={rating}
                starDimension="14px"
                starSpacing=".2px"
              />{" "}
              &nbsp; &nbsp;
              <span id="created-date">{rating} </span> &nbsp;&nbsp;
              <span id="created-date">({33} )</span>
            </div>
            <hr />
            <div>
              <Image
                src={Module}
                alt="sessions"
                style={{ height: "16px", width: "16px", padding: "2PX" }}
              />
              &nbsp;
              <span id="crs-card-btm">{modules}</span>&nbsp;
              <span id="crs-card-btm">Modules</span> &nbsp;&nbsp;
              <Image
                src={Session}
                alt="sessions"
                style={{ height: "16px", width: "16px", padding: "2PX" }}
              />
              &nbsp;
              <span id="crs-card-btm">{session}</span>&nbsp;
              <span id="crs-card-btm">Sessions</span> &nbsp;&nbsp;
              <Image
                src={Hour}
                alt="hours"
                style={{ height: "16px", width: "16px", padding: "2PX" }}
              />
              &nbsp;
              <span id="crs-card-btm">{hours}</span>&nbsp;
              <span id="crs-card-btm">Hours</span>&nbsp;&nbsp;
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
