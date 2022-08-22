import React from "react";
import "./../College.css";
import { Container } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import colg from "../../assets/uni.jpg";
import Image from "react-bootstrap/Image";
import dashboard from "../../assets/dashboard/dashboard.svg";
import course from "../../assets/dashboard/course.svg";
import Instructors from "../../assets/dashboard/Instructors.svg";
import profile from "../../assets/dashboard/profile.svg";
import assesment from "../../assets/dashboard/assesment.svg";
import noticeboard from "../../assets/dashboard/noticeboard.svg";
import bell from "../../assets/notification.svg";
import bookmark from "../../assets/bookmark-fill.svg";
import arrow from "../../assets/arrow.svg";
import Divider from "@material-ui/core/Divider";
import Instructor from "./Instructor";
import { notification } from "antd";

export default class StudentHeader extends React.Component {
  render() {
    return (
      <Container  fluid={true}>
        <div className="row" id="header-row">
          <div className="col">
            <div>
              <Avatar
                alt="University Logo"
                src={colg}
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "white",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "7.5px",
                }}
              />
            </div>
          </div>
          <div className="col">
            <div>
              <Image
                src={dashboard}
                alt="dashboard"
                style={{
                  height: "30px",
                  width: "21px",
                  padding: "2PX",
                  marginTop: "13px",
                  float: "left",
                }}
              />
              {/* <Divider/> */}
              <span
                id="header-label"
                style={{
                  margin: "18px 0 0 2px",

                  float: "left",
                }}
              >
                Dashboard
              </span>
            </div>
          </div>
          <div className="col">
            <div>
              <Image
                src={course}
                alt="dashboard"
                style={{
                  height: "30px",
                  width: "21px",
                  padding: "2PX",
                  marginTop: "13px",
                  float: "left",
                }}
              />
              {/* <Divider/> */}
              <div>
                {" "}
                <span
                  id="header-label"
                  style={{
                    margin: "18px 0 0 2px",

                    float: "left",
                  }}
                >
                  Course
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <Image
                src={Instructors}
                alt="dashboard"
                style={{
                  height: "30px",
                  width: "21px",
                  padding: "2PX",
                  marginTop: "13px",
                  float: "left",
                }}
              />
              {/* <Divider/> */}
              <span
                id="header-label"
                style={{
                  margin: "18px 0 0 2px",

                  float: "left",
                }}
              >
                Instructors
              </span>
            </div>
          </div>
          <div className="col">
            <div>
              <Image
                src={assesment}
                alt="dashboard"
                style={{
                  height: "30px",
                  width: "21px",
                  padding: "2PX",
                  marginTop: "13px",
                  float: "left",
                }}
              />
              {/* <Divider/> */}
              <span
                id="header-label"
                style={{
                  margin: "-24px 0px 0px 22px",

                  float: "left",
                }}
              >
                Assessment
              </span>
            </div>
          </div>
          <div className="col">
            <div>
              <Image
                src={noticeboard}
                alt="dashboard"
                style={{
                  height: "30px",
                  width: "21px",
                  padding: "2PX",
                  marginTop: "14px",
                  float: "left",
                }}
              />
              {/* <Divider/> */}
              <span
                id="header-label"
                style={{
                  margin: "-25px 0px 0px 20px",

                  float: "left",
                }}
              >
                NoticeBoard
              </span>
            </div>
          </div>
          <div className="col">7</div>
          <div className="col">
            <Image
              src={bookmark}
              alt="dashboard"
              style={{
                height: "30px",
                width: "21px",
                padding: "2PX",
                marginTop: "13px",
                float: "left",
                marginRight: "40px",
              }}
            />
            <Image
              src={bell}
              alt="dashboard"
              style={{
                height: "30px",
                width: "21px",
                padding: "2PX",
                marginTop: "13px",
                float: "left",
              }}
            />
          </div>
          <div className="col">
            <div>
              <Avatar
                alt="profile"
                src={profile}
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#010101",
                  display: "block",
                  marginRight: "auto",
                  marginTop: "7.5px",
                }}
              />
              <span
                id="header-label"
                style={{
                  margin: "-34px 0px 0px 48px",
                  fontWeight: "600",
                  float: "left",
                }}
              >
                Rahul
              </span>
              <Image
                src={arrow}
                alt="dashboard"
                style={{
                  height: "30px",
                  width: "21px",
                  padding: "2PX",
                  marginTop: "-38px",

                  float: "right",

                  marginLeft: "79px",

                  marginRight: "-14px",
                }}
              />
            </div>
          </div>
          <div className="col">10</div>
        </div>
      </Container>
    );
  }
}
