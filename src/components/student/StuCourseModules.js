import React, { Component } from "react";
import "./../College.css";
import history from '../History';

import Image from "react-bootstrap/Image";
import quiz from "../../assets/introquiz.svg";
import { Col } from "reactstrap";
import StuModuleCard from "./StuModuleCard";
import {
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    CardSubtitle,
    Button,
    CardFooter,
  } from "reactstrap";
import play from "../../assets/playbtn.svg";
import session_thumb from "../../assets/session_thumb.png";

export default class StuCourseModules extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          category: "BCom",
          rating: 3.7,
          course: "Data Science",
          professor: "Avinash NL Srivastava",
          description: "He has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
          modules: "4",
          session: "40",
          hours: "145",
        },
        {
            id: 2,
            category: "BCom",
            rating: 3.7,
            course: "statistics and Probability",
            professor: "Avinash NL Srivastava",
            description: "He has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
            modules: "4",
            session: "40",
            hours: "145",
          }
          ,
          {
            id: 3,
            category: "BCom",
            rating: 3.7,
            course: "maths and computation",
            professor: "Avinash NL Srivastava",
            description: "",
            modules: "4",
            session: "40",
            hours: "145",
          }
          ,
          {
            id: 4,
            category: "BCom",
            rating: 3.7,
            course: "Data Structure and Algorithm",
            professor: "Avinash NL Srivastava",
            description: "He has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
            modules: "4",
            session: "40",
            hours: "145",
          }
          , {
            id: 5,
            category: "BCom",
            rating: 3.7,
            course: "Data Science",
            professor: "Conversational chat BOt",
            description: "He has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
            modules: "4",
            session: "40",
            hours: "145",
          }
          , {
            id: 6,
            category: "BCom",
            rating: 3.7,
            course: "Artificial Intelligence",
            professor: "Avinash NL Srivastava",
            description: "He has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
            modules: "4",
            session: "40",
            hours: "145",
          }
          , {
            id: 7,
            category: "BCom",
            rating: 3.7,
            course: "Deep Learning",
            professor: "Avinash NL Srivastava",
            description: "He has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
            modules: "4",
            session: "40",
            hours: "145",
          }
          , {
            id: 8,
            category: "BCom",
            rating: 3.7,
            course: "Machine Learning",
            professor: "Avinash NL Srivastava",
            description: "He has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
            modules: "4",
            session: "40",
            hours: "145",
          }
       
      ],
    };
  }

  removePerson(id) {
    this.setState({
      people: this.state.people.filter((person) => person.id !== id),
    });
  }
  render() {
    let peopleCards = this.state.people.map((person) => {
      return (
        <Col md="12" id="cc">
          <StuModuleCard
            key={person.id}
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
        </Col>
      );
    });
    return (
      <div className="card-container">
      <div style={{textAlign: "center", marginTop: '12px'}} >
      <span id="hd-colg-name">Welcome to Machine Learning Program</span>
    <hr/>
    <div className="row">
    <div className="col" style={{textAlign: "center", marginTop: '8px'}}>
    <div className="row" style={{textAlign: "center", marginLeft: '50px'}}>
    <div className="col">
      
    <Card
          style={{
            width: "205px",
            height: "194px",
            
            textAlign: "center",
            
          }}
        >
        <div id="wrapper" style={{padding: '14px'}}>
              <Image
                src={session_thumb}
                alt="seesion image"
                style={{ width: 190, height: 100, }}
              />
              <Image
                src={play}
                alt="pause"
                style={{ width: 33, height: 33, margin: "32px 0px 0px 84px" }}
                id="img2"
              />
            </div>
          <CardBlock style={{textAlign: 'left',
    marginTop: '-31px'}}>
          <span id="blue-font">Machine Learning Intro</span><br/>
          <span id="ins-card-lb2">By&nbsp;Avinash</span>
          </CardBlock>
         
        </Card>
    </div>
	 <div className="col">
     <Card
          style={{
            width: "162px",
            height: "194px",
            marginLeft: '0px',
            textAlign: "center",
            
          }}
        >
         
          <CardBlock>
          <CardImg src={quiz} alt="card img" style={{ padding: "0px" , 
            height: "46px",opacity: '1', marginTop: '10px', marginBottom: '35px'}}>
          
          </CardImg><br/>
          <span id="blue-font"> Total Questions:&nbsp;10</span>
          <div
                id="div-overlay"
                style={{
                  marginBottom: "15px",
                  marginRight: "10px",
                  marginTop: '12px'
                }}
              >
                <div id="elevn-white" style={{textAlign: 'center'}}>
               <span>TAKE TEST</span> 
             </div>
              </div>
          </CardBlock>
        
        </Card>
    </div>
</div>
    </div>
    <div className="col">
      <div>
        
    
        </div>
    </div>
	</div>
</div>

        <div className="row" style={{ marginLeft: "42px" }}>
          {peopleCards}
        </div>
      </div>
    );
  }
}
