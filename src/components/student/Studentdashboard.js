import React from "react";
import profile from "../../assets/profile.jpg";
import Image from "react-bootstrap/Image";
import colg from "../../assets/uni.jpg";
import vdwatched from "../../assets/vdwatched.svg";
import Avatar from "@material-ui/core/Avatar";
import { Container } from "reactstrap";
import GaugeChart from "react-gauge-chart";
import SpiderChart from "./SpiderChart";
import rank from "../../assets/rank.svg";
import overallrank from "../../assets/overallrank.svg";
import quiz from "../../assets/quiz.svg";
import assignmnt from "../../assets/assignmnt.svg";
import RadialbarChart from "./RadialbarChart";
import LineChart from "react-linechart";
import ai from "../../assets/courses.jpg";
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import AllQuestionTab from './AllQuestionTab'
import MyQuestTab from './MyQuestTab'
import MyAnswerTab from './MyAnswerTab'
import AssgnmentTab from './AssgnmentTab'
import TestTab from './TestTab'

import play from "../../assets/playbtn.svg";
import CustomTab from './CustomTab'

export default class StudentDashboard extends React.Component {
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
          
                <span id="stu-name">{type}</span> <br/>
                <span id="dash-lbl">{title}</span><br/>
                <span id="elevenpx-font">{description}</span><br/>
                <span id="elevenpx-font"> Due <span style={{color:'orange'}}>{date}</span></span>
           <hr style={{marginBottom: '0',marginTop: '0'}}/>
        </div>
      );
    });
  }
  render() {
    const data = [
      {
        color: "steelblue",
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 5 },
          { x: 3, y: 0 },
          { x: 4, y: 10 },
          { x: 5, y: 3 },
          { x: 6, y: 0 },
          { x: 7, y: 3 },
        ],
      },
    ];
    return (
      <Container>
        <div className="row" id="dash-left">
          <div className="col-6">
            <div>
              <span id="stu-dash-lb">Hello rahul</span>
              <br />
              <p
                id="ins-card-lb2"
                style={{
                  marginTop: "-4px",
                  textAlign: "left",
                }}
              >
                Welcome to your Dashboard
              </p>
            </div>
          </div>
        </div>
        <div className="row" id="dash-left">
          <div className="col" id="stu-dash-col">
            <div id="dash-box">
              <div className="row">
                <div className="col-8">
                  <div>
                    <LineChart
                      width={120}
                      height={90}
                      hideXAxis={true}
                      hideYAxis={true}
                      pointRadius={0.5}
                      data={data}
                      margin={(10, 0, 5, -5)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <Image
                      style={{
                        padding: "2px",
                        marginTop: "-24px",
                        backgroundColor: "#f7e3ff",
                      }}
                      id="top-icons-oval"
                      roundedCircle
                      src={rank}
                      alt="courses"
                    />
                    <span id="ins-num">75</span>
                    <br />
                    <span id="ins-text">Rank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" id="stu-dash-col">
            <div id="dash-box">
              <div className="row">
                <div className="col-8" style={{ zIndex: "0" }}>
                  <GaugeChart
                    style={{
                      marginTop: "20px",
                      width: "200",
                      padding: "0",
                      zIndex: "1",
                    }}
                    id="gauge-chart5"
                    nrOfLevels={20}
                    arcsLength={[5.0]}
                    arcWidth={0.4}
                    colors={["#58e0eb", "white"]}
                    percent={0.77}
                    textColor={"red"}
                    arcPadding={0.02}
                    hideText={true}
                    needleBaseColor={"#f3f3f3"}
                  />
                </div>
                <div className="col" style={{ zIndex: "12" }}>
                  <div>
                    <Image
                      style={{
                        padding: "2px",
                        marginTop: "-24px",
                        backgroundColor: "#d9ffdb",
                      }}
                      id="top-icons-oval"
                      roundedCircle
                      src={overallrank}
                      alt="courses"
                    />
                    <span id="ins-num">75</span>
                    <br />
                    <span id="ins-text" style={{ marginLeft: "-40px" }}>
                      Overall Rank
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" id="stu-dash-col">
            <div id="dash-box">
              <div className="row">
                <div className="col">1</div>
                <div className="col">
                  <div style={{ textAlign: "center" }}>
                    <Image
                      style={{
                        padding: "2px",
                        marginTop: "-24px",
                        backgroundColor: "#ffd3d7",
                      }}
                      id="top-icons-oval"
                      roundedCircle
                      src={assignmnt}
                      alt="courses"
                    />
                    <br />
                    <br />

                    <span id="ins-text">
                      Out Of 10 <br />
                      Assignment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" id="stu-dash-col">
            <div id="dash-box">
              <div className="row">
                <div className="col">1</div>
                <div className="col">
                  <div style={{ textAlign: "center" }}>
                    <Image
                      style={{
                        padding: "2px",
                        marginTop: "-24px",
                        backgroundColor: "#cfffb6",
                      }}
                      id="top-icons-oval"
                      roundedCircle
                      src={quiz}
                      alt="courses"
                    />
                    <br />
                    <br />

                    <span id="ins-text">
                      Out Of 10 <br />
                      Quiz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" id="stu-dash-col">
            <div id="dash-box" style={{ width: "225px" }}>
              <div className="row">
                <div className="col-8" id="stu-dash-col">
                  <Image
                    src={vdwatched}
                    alt="vdwatched"
                    style={{
                      marginTop: "10px",
                      zIndex: "12",
                      marginLeft: "10px",
                    }}
                  />
                </div>
                <div
                  className="col"
                  id="stu-dash-col"
                  style={{
                    textAlign: "start",
                    zIndex: "0",
                  }}
                >
                  <span id="ins-num">5</span>
                  <br />
                  <span id="ins-text">
                    Videos
                    <br />
                    Watched
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="dash-left">
          <div className="col" id="stu-dash-col">
            <div id="dash-chart">
              <span id="dash-lbl" style={{ marginLeft: "12px" }}>
                CURRENTLY LEARNING
              </span>
              <RadialbarChart  style={{ marginLeft: "12px", marginTop: '-15px' }} /><br/>
              <div id="dash-lbl" style={{ marginLeft: "12px", marginTop: '-37px' }}>
                Marketing and Finnace Management
              </div>
            </div>
            </div>
          <div className="col" id="stu-dash-col">
            <div id="dash-chart">
              <span id="dash-lbl" style={{ marginLeft: "12px" }}>
                MODULE REPORT
              </span>
              <SpiderChart style={{ marginTop: "-6px" }} />
            </div>
          </div>
          <div className="col" style={{ marginLeft: "-10px" }}>
            <div id="dash-chart">
              <div
                style={{
                  marginTop: "12px",
                }}
              >
                <span id="dash-lbl" style={{ marginLeft: "12px" }}>
                  CURIOSITY METER
                </span>
                <br />
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <span id="ins-num">50 %</span>
                  <br />
                </div>
                <GaugeChart
                  style={{ marginTop: "10px" }}
                  id="gauge-chart1"
                  nrOfLevels={20}
                  arcsLength={[5.0]}
                  arcWidth={0.4}
                  colors={["#6269cf", "white"]}
                  percent={0.5}
                  textColor={"red"}
                  arcPadding={0.02}
                  hideText={true}
                  needleBaseColor={"#f3f3f3"}
                />
              </div>
            </div>
          </div>
          <div
            className="col"
            id="stu-dash-col"
            style={{ width: "282px", marginLeft: "-10px" }}
          >
            <div id="dash-chart">
              <span id="dash-lbl" style={{ marginLeft: "12px" }}>
                LAST VIEWED VIDEOS
              </span>
              <div className="col" style={{ height: "50px", marginTop: "5px" }}>
                <div>
                  <div
                    id="wrapper"
                    style={{ float: "left", position: "absolute" }}
                  >
                    <Image
                      src={ai}
                      alt="mqmin"
                      style={{ width: 85, height: 50 }}
                    />
                    <Image
                      src={play}
                      alt="pause"
                      style={{
                        width: 33,
                        height: 33,
                        margin: "10px 0px 0px 30px",
                      }}
                      id="img2"
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "90px",
                      position: "absolute",
                      textAlign: "left",
                    }}
                  >
                    <span
                      id="c-tit-text"
                      style={{ color: "silver", marginLeft: "0px" }}
                    >
                      Session 1
                    </span>
                    <span id="dash-text">Pythagorus theorem</span>
                  </div>
                </div>
              </div>
              <div className="col" style={{ height: "50px" }}>
                <hr />
                <div>
                  <div
                    id="wrapper"
                    style={{ float: "left", position: "absolute" }}
                  >
                    <Image
                      src={ai}
                      alt="mqmin"
                      style={{ width: 85, height: 50 }}
                    />
                    <Image
                      src={play}
                      alt="pause"
                      style={{
                        width: 33,
                        height: 33,
                        margin: "10px 0px 0px 30px",
                      }}
                      id="img2"
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "90px",
                      position: "absolute",
                      textAlign: "left",
                    }}
                  >
                    <span
                      id="c-tit-text"
                      style={{ color: "silver", marginLeft: "0px" }}
                    >
                      Session 2
                    </span>
                    <span id="dash-text">Pythagorus theorem</span>
                  </div>
                </div>
              </div>
              <div
                className="col"
                style={{ height: "50px", marginTop: "30px" }}
              >
                <hr />

                <div>
                  <div
                    id="wrapper"
                    style={{ float: "left", position: "absolute" }}
                  >
                    <Image
                      src={ai}
                      alt="mqmin"
                      style={{ width: 85, height: 50 }}
                    />
                    <Image
                      src={play}
                      alt="pause"
                      style={{
                        width: 33,
                        height: 33,
                        margin: "10px 0px 0px 30px",
                      }}
                      id="img2"
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "90px",
                      position: "absolute",
                      textAlign: "left",
                    }}
                  >
                    <span
                      id="c-tit-text"
                      style={{ color: "silver", marginLeft: "0px" }}
                    >
                      Session 3
                    </span>
                    <span id="dash-text">Pythagorus theorem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "12px", marginLeft: "-10px" }}>
          <div id="stu-dash-box">
            <span id="dash-lbl" style={{ marginLeft: "12px" }}>
              ASSESSMENT
            </span>
            <br />
            <div
              style={{
                backgroundColor: "white",
                textAlign: "left",
              }}
            >
              <Tabs activeTab="assgnmnt">
                <TabList>
                  <Tab component={CustomTab} label="Assignment" id="assgnmnt" />
                  <Tab component={CustomTab} label="Test" id="test" />
                </TabList>
                <TabList>
                  <TabPanel component={AssgnmentTab} id="assgnmnt" />
                  <TabPanel component={TestTab} id="test" />
                </TabList>
              </Tabs>
            </div>
          </div>

          <div id="stu-dash-box-2">
            <span id="dash-lbl" style={{ marginLeft: "12px" }}>
              NEMITOR
            </span>
            <br />
            <div style={{backgroundColor: 'white',textAlign: 'left'}}>
    <Tabs activeTab='myquest'>
      <TabList>
      <Tab component={CustomTab} label='All Questions' id='allquest' />
        <Tab component={CustomTab} label='My Questions' id='myquest' />
        <Tab component={CustomTab} label='My Answers' id='myans' />
     

      </TabList>
      <TabList>
      <TabPanel component={AllQuestionTab} id='allquest' />
        <TabPanel component={MyQuestTab} id='myquest' />
        <TabPanel component={MyAnswerTab} id='myans' />
      
      </TabList>
    </Tabs>
    </div>
          </div>

          <div id="stu-dash-box-3">
            <div id="dash-lbl" style={{ marginLeft: "12px",marginTop: '3px' }}>
              TO-DO ACTIVITY
            </div>
           
            <div>
            
              {this.renderToDoData()}
             
            </div>

          </div>
        </div>
      
      </Container>
    );
  }
}
