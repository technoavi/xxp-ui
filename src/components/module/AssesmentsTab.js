import assgn from "../../assets/Assignment_grey.svg";
import qz from "../../assets/bell.svg";
import React, { Component, useState } from "react";
import Image from "react-bootstrap/Image";
import "./../College.css";

import add_assgn from "../../assets/add_assignmnt.svg";
import add_qz from "../../assets/add_quiz.svg";

import AddAssignmentModal from './AddAssignmentModal'


export default class AssessmentsTab extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
 isOpen: false,

      show: true,
      //state is by default an object
      students: [
        {
          id: 1,
          title: "Pythagorus Theorem",
          type: "Assignment 1",
          due_date: "21/02/2020",
          status: "open",
          marks: "10",
        },
        {
          id: 2,
          title: "Euclids Theorem",
          type: "Quiz 1",
          due_date: "21/02/2020",
          status: "open",
          marks: "10",
        },
        {
          id: 3,
          title: "Sigmoid Theorem",
          type: "Assignment 2",
          due_date: "21/02/2020",
          status: "open",
          marks: "10",
        },
        {
          id: 4,
          title: "Jacobian Theorem",
          type: "Quiz 2",
          due_date: "21/02/2020",
          status: "closed",
          marks: "10",
        },
        {
          id: 5,
          title: "Pythagorus Theorem",
          type: "Assignment 3",
          due_date: "21/02/2020",
          status: "open",
          marks: "10",
        },
      ],
    };
  }


toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen,
  });
};
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, title, type, due_date, status, marks } = student; 
      return (
        <div>
          <tr key={id} id="asgn-div">
            <td>
              <div id="assgn-vid-div">
                <Image
                  src={type.match(/quiz/i) ? qz : assgn}
                  alt="mqmin"
                  style={{ width: 50, height: 50, padding: "10px" }}
                />
              </div>
            </td>
            <td style={{ verticalAlign: "top", width: "806px" }}>
              <div style={{ width: "606px", marginLeft: "12px" }}>
                <span id="ass-title">
                  {type.match(/quiz/i) ? "Quiz" : "Assignment"}
                </span>
                <br />
                <span id="stu-name">{title}</span>
                <br />
                <span
                  id="cc-lbl"
                  style={{ color: status.match(/open/i) ? "green" : "red" }}
                >
                  {status}&nbsp;
                </span>
                <span id="cc-lbl">
                  |&nbsp; Due &nbsp;{due_date}&nbsp;|&nbsp;
                </span>
                <span id="cc-lbl"> Credits &nbsp;</span>
                <span>{marks}</span>
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "140px" }}>
                {" "}
              </div>
            </td>
          </tr>
          <br />
        </div>
      );
    });
    this.setState({
show: true,
    });
  }
  render() {
    const show = false;
    return (
      <div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div style={{ textAlign: "left", marginLeft: '70px' }}>
              
              <Image
                src={add_qz}
                alt="add_qz"
                onClick={this.toggleModal}
                style={{ width: 50, height: 50, padding: "5px" }}
              />
              <AddAssignmentModal show={this.state.isOpen} onClose={this.toggleModal}></AddAssignmentModal>

              &nbsp;
              <Image
                src={add_assgn}
                alt="add_assgn"
                onClick={this.toggleModal}
                style={{ width: 50, height: 50, padding: "5px" }}
              />
              <AddAssignmentModal show={this.state.isOpen} onClose={this.toggleModal}></AddAssignmentModal>
            </div>
          </div>
        </div>

        <table id="students" style={{ textAlign: "left" }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}


