import React, {Component} from 'react';
import classes from './Controls.module.css';
import {Featured} from './Featured/Featured';
import ProjectsSection from "./ProjectsSection/ProjectsSection";

class Controls extends Component {
  state = {
    home : true,
    projects : false,
    tech: false,
    pricing:false,
    about:false
  }
  clickHandler = (colorMyDiv) => {
    if(colorMyDiv) {
      let upcomingVar = Object.keys(this.state);
      let arrayCheck = upcomingVar.includes(colorMyDiv);
      // console.log(arrayCheck);
      if(arrayCheck) {
        upcomingVar.map(key => {
          if(key === colorMyDiv) {
            this.setState({[colorMyDiv]:!this.state.[colorMyDiv]});
          } else {
            this.setState({[key]:false});
          }
        })
      }
    }

 }
  render(){

    return (
      <div className={classes.ControlBox}>
        <Featured clickIcon={(props) => this.clickHandler(props)}/>
          <ProjectsSection isActive={this.state.home}/>
          <div className={this.state.projects ? classes.ProjectsBox : classes.Invisible}>Project Section</div>
          <div className={this.state.tech ? classes.TechBox : classes.Invisible}>Technology Section</div>
          <div className={this.state.pricing ? classes.PricingBox : classes.Invisible}>Pricing Section</div>
          <div className={this.state.about ? classes.ContactBox : classes.Invisible}>AboutUs Section</div>
      </div>
    );
  }
}


export default Controls;
