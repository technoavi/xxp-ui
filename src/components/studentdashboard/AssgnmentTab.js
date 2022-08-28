import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import assignmnt from "../../assets/assignmnt.svg";

export default class AllQuestionTab extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          todos: [
            {
              id: 1,
              type: "Assignment",
              title: "ML Assignmnt 2",
              description: "Cpmplete assignment for session2 of Management of Marketing & Finance",
              date: "21/02/2020",
          },
          {
            id: 2,
            type: "Test",
            title: "ML Assignmnt 2",
            description: "Cpmplete assignment for session2 of Management of Marketing & Finance",
            date: "21/02/2020",
        },
        {
          id: 3,
          type: "Quiz",
          title: "ML Assignmnt 2",
          description: "Cpmplete assignment for session2 of Management of Marketing & Finance",
          date: "21/02/2020",
      },
        ],
      };
    }
    renderToDoData() {
        return this.state.todos.map((todo, index) => {
          const {
            id,
            type,
            title,
            description,
            date,
            
          } = todo; 
          return (
            <div style={{marginLeft: '12px'}}>
              
            <div className="row">
    <div className="col" style={{
                      
                      padding: '0',
                      marginTop: '27px',
    marginLeft: '17px'
                    }}>
    <Image
                      style={{
                      
                        backgroundColor: "#ffd3d7",
                      }}
                      id="top-icons-oval"
                      roundedCircle
                      src={assignmnt}
                      alt="courses"
                    />
    </div>
    <div className="col-8">
    <span id="stu-name">{type}</span> <br/>
                    <span id="dash-lbl">{title}</span><br/>
                    <span id="elevenpx-font">{description}</span><br/>
    </div>
	 <div className="col">
         <div style={{marginTop: '45px',textAlign: 'left',
    marginRight: '10px'}}>
     <span id="elevenpx-font"> Due <span style={{color:'orange'}}>{date}</span></span>
    </div>
    </div>
</div>
               <hr style={{marginBottom: '0',marginTop: '0'}}/>
            </div>
          );
        });
      }
  render() {
    return (
        <div>
            
            {this.renderToDoData()}
           
</div>
	
	  );
  }
}

	
