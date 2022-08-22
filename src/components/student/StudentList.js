import MUIDataTable from "mui-datatables";
import React, { Component, useState } from "react";
import "./../College.css";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import add from "../../assets/dashboard/add.svg";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../assets/profile.jpg";

export default class StudentList extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        {
          id: 1,
          name: "Avinash Srivastava",
          student_id: 16,
          email_id: "dfgg@email.com",
          department: "CComputer Science Dept",
          course_enrolled: "5 courses",
        },
        {
          id: 2,
          name: "Kuldeepsinh Chavda ",
          student_id: 16,
          email_id: "dfgg@email.com",
          department: "Finance",
          course_enrolled: "5 courses",
        },
        {
          id: 3,
          name: "Surs",
          student_id: 16,
          email_id: "dfgg@email.com",
          department: "Mettalagy and Instrumentation",
          course_enrolled: "5 courses",
        },
        {
          id: 4,
          name: "Sursinh bhai ParmAR ",
          student_id: 16,
          email_id: "dfgg@email.com",
          department: "Biological Science",
          course_enrolled: "5 courses",
        },
        {
          id: 5,
          name: "mITESH Sinh Parmar Rajput",
          student_id: 16,
          email_id: "ddddddddddddddfgg@email.com",
          department: "CSE",
          course_enrolled: "5 courses",
        },
      ],
    };
  }
  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const {
        id,
        name,
        student_id,
        email_id,
        department,
        course_enrolled,
      } = student; //destructuring 4551
      return (
        <div>
          <tr key={id}>
            <td>
              <div id="stu-ava-div">
                {" "}
                <Avatar
                  alt="student pic"
                  src={pic}
                  style={{ backgroundColor: "white", display: "block" }}
                  id="stu-avatar"
                />{" "}
                &nbsp; &nbsp;<span id="stu-name">{name}</span>
              </div>
            </td>
            <td>
              <div id="stu-div" style={{ width: "156px" }}>
                {" "}
                <span id="stu-name">{student_id}</span>
              </div>
            </td>
            <td>
              <div id="stu-div" style={{ width: "319px" }}>
                {" "}
                <span id="stu-name">{email_id}</span>
              </div>
            </td>
            <td>
              <div  style={{ width: "151px" }}>
                {" "}
                <span
                  id="stu-name"
                  style={{
                  
                    height: "20px",
                    backgroundColor: "#d2d5ff",
                    borderRadius: "8.2px",
                    marginTop: "12px",
                    marginLeft: "auto",
                    paddingLeft: "6px",
                    paddingRight: "6px",
                  }}
                >
                  {department}
                </span>
              </div>
            </td>
            <td>
              <div id="stu-div" style={{ width: "140px", marginLeft: '5px' }}>
                {" "}
                <span id="stu-name">{course_enrolled}</span>
              </div>
            </td>
          </tr>
          <hr style={{ marginBottom: " 0.3rem", marginTop: "0rem" }} />
        </div>
      );
    });
  }
  //   renderTableData() {
  //     return this.state.students.map((student, index) => {
  //        let col = Object.keys(student)
  //        return (
  //           <tr key={student.id}>
  //              {col.map((val, index) => {
  //                 return <td key={index}>{student[col[index]]}</td>
  //              })}
  //           </tr>
  //        )
  //     })
  //  }
  render() {
    return (
      <div className="card-container">
        <div id="course-div">
          <div className="row" id="row1">
            <div className="col">
              <span id="course-txt" style={{marginLeft:'80px'}}>Students</span>
            </div>
            <div className="col">
              <div id="course-add">
                <Image
                  id="add-icon"
                  roundedCircle
                  src={add}
                  alt="instructors"
                />

                <p id="create-course-label">Add New Student</p>
              </div>
            </div>
          </div>

          <div className="row" id="row2">
            <div className="col" style={{ marginTop: "-23px" }}>
              <hr></hr>
            </div>
          </div>
          <div className="row" id="row3">
            <div className="col">
              <div id="all-new-div">
                <span id="all-new">ALL</span>
                <span id="all-o">(23)</span> &nbsp;
                <span id="all-new">NEW</span>
                <span id="new-g">(12)</span> &nbsp;
              </div>
            </div>
            <div className="col">
              <div id="c-search-tab">
                <input
                  type="text"
                  name="search"
                  placeholder="Search Courses"
                  style={{ marginTop: "5px", border: "0" }}
                />
              </div>
            </div>
          </div>
          <div className="row" id="row4">
            <div className="col">
              <hr></hr>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginLeft: "64px", textAlign: "left" }}>
          <div className="col-3" id="all-new">
            NAME
          </div>
          <div className="col" id="all-new">
            STUDENT ID
          </div>
          <div className="col-3" id="all-new">
            MAIL ID
          </div>
          <div className="col" id="all-new">
            DEPARTMENT
          </div>
          <div className="col" id="all-new" style={{paddingLeft: '0'}}>
            COURSE ENROLLED
          </div>
          <div className="col" id="all-new">
            SELECT ALL
          </div>
        </div>
        <hr style={{ marginBottom: "0rem", marginBottom: "0.4rem" }} />
        <table id="students" style={{ marginLeft: "44px", textAlign: "left" }}>
          <tbody>
            {/* <tr>{this.renderTableHeader()}</tr> */}
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
