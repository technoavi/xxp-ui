import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
// import  ReactApexChart  from "react-apexcharts";

export default class SpiderChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: [
            {
              name: "Total marks scored ",
              data: [80, 50, 30, 40, 100, 20],
            },
          ],
          options: {
            chart: {
              toolbar: {
                show: false
              },
              height: 250,
              type: "radar",
            },
            
            xaxis: {
              categories: ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6"],
            },
          },
        };
      }
      
  render() {
    return (
		<div >
        <div>
            {/* <ReactApexChart
            style={{
              marginTop: '-6px'
            }}
          options={this.state.options}
          series={this.state.series}
          type="radar"
          height={250}
        /> */}
        </div>
</div>
	
	  );
  }
}

	
