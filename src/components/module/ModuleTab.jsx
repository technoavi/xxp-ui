import React, { Component, useState } from "react";
import Image from "react-bootstrap/Image";
import "./../College.css";
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import CustomTab from './CustomTab'
import SyllabusTab from './SyllabusTab'
import SessionTab from './SessionTab'
import HotspotTab from './HotspotTab'
import AssesmentsTab from './AssesmentsTab'
import AttachmentsTab from './AttachmentsTab'
import AnnouncementTab from './AnnouncementTab'
import banner from "../../assets/banner_course.png";
import Module from "../../assets/modules.svg";
import Session from "../../assets/session.svg";
import Hours from "../../assets/hours.svg";

export default class ModuleTab extends Component {
  render() {
    const courseData = {
      modules: 4,
      session: 41,
      hours: 67,
      course: "Data Science Engineering",
      faculty: "Avinash Srivastava",
    };
    return (
 <div>
 <div style={{ position: "relative", textAlign: "left" }}>
          <Image
            src={banner}
            alt="banner"
            height={160}
            style={{
              width: "100%",
              zIndex: "1",
              backgroundImage: "linear-gradient(to bottom, #626262, #001144)",
            }}
          />
          <div id="text-over">
            <span style={{ fontFamily: "Poppins", fontSize: "32px" }}>
              {courseData.course}
            </span>
            <br />

            <span style={{ fontFamily: "Poppins", fontSize: "20px" }}>
              {courseData.faculty}
            </span>
            <br />
            <div style={{ display: "flex", marginTop: "12px" }}>
              <div style={{ marginRight: "12px" }}>
                <Image
                  src={Module}
                  alt="Module"
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.modules}</span>&nbsp;
                <span id="crs-card-btm">Modules</span>
              </div>
              <div style={{ marginRight: "12px" }}>
                <Image
                  src={Session}
                  alt="Session"
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.session}</span>&nbsp;
                <span id="crs-card-btm">Session</span>
              </div>
              <div style={{ marginRight: "12px" }}>
                <Image
                  src={Hours}
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.hours}</span>&nbsp;
                <span id="crs-card-btm">Hours</span>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
     <div style={{backgroundColor: 'white',textAlign: 'left', marginLeft: '125px'}}>
    <Tabs activeTab='session'>
      <TabList>
      <Tab component={CustomTab} label='Syllabus' id='syllabus' />
        <Tab component={CustomTab} label='Session' id='session' />
        <Tab component={CustomTab} label='Add Session' id='hotspot' />
        <Tab component={CustomTab} label='Assesments' id='assessment' />
        <Tab component={CustomTab} label='Attachments' id='attachment' />
        <Tab component={CustomTab} label='Announcement' id='announcement' />

      </TabList>
      <TabList>
      <TabPanel component={SyllabusTab} id='syllabus' />
        <TabPanel component={SessionTab} id='session' />
        <TabPanel component={HotspotTab} id='hotspot' />
        <TabPanel component={AssesmentsTab} id='assessment' />
        <TabPanel component={AttachmentsTab} id='attachment' />
        <TabPanel component={AnnouncementTab} id='announcement' />
      </TabList>
    </Tabs>
    </div>
  </div>
	  );
  }
}