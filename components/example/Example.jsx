import React from 'react';
import './Example.css';
import {Link} from "react-router-dom"
/*
  Since this component shows code we include the https://prismjs.com/
  formatter. We invoke it by labelling code blocks with class="language-jsx"
*/
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.js';
import '../../node_modules/prismjs/themes/prism.css';

/* eslint-disable  react/jsx-one-expression-per-line */
/* eslint-disable  react/destructuring-assignment */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

// React Components are subclass of React.Componment.
class Example extends React.Component {


  constructor(props) {
    super(props); // Must run the constructor of React.Component first

    this.state = {
      isShown0: false,
      isShown1: false,
      isShown2: false,
      isShown3: false,
      isShown4: false,
      isShown5: false,
      isShown6: false

    }

  }

  setIsShown0() {
    if (this.state.isShown0) {
      this.setState({isShown0: false});
    } else {
      this.setState({isShown0: true});
    }
  }
  setIsShown1() {
    if (this.state.isShown1) {
      this.setState({isShown1: false});
    } else {
      this.setState({isShown1: true});
    }
  }
  setIsShown2() {
    if (this.state.isShown2) {
      this.setState({isShown2: false});
    } else {
      this.setState({isShown2: true});
    }
  }
  setIsShown3() {
    if (this.state.isShown3) {
      this.setState({isShown3: false});
    } else {
      this.setState({isShown3: true});
    }
  }
  setIsShown4() {
    if (this.state.isShown4) {
      this.setState({isShown4: false});
    } else {
      this.setState({isShown4: true});
    }
  }
  setIsShown5() {
    if (this.state.isShown5) {
      this.setState({isShown5: false});
    } else {
      this.setState({isShown5: true});
    }
  }



  render() {
    return (
     <div>
     <div className="heading">how to be an ally</div>



     <ul className="container">
      <li> <button className="panel"
        onMouseEnter={() => this.setIsShown0()}
        onMouseLeave={() => this.setIsShown0()}>
       {!this.state.isShown0 ? <div className="topleft">places to donate</div> :
         <ul className="list">
           <li> <a href="https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor" target="_blank"> Justice for Breonna Taylor </a> </li>
           <li> <a href="https://secure.actblue.com/donate/ms_blm_homepage_2019" target="_blank"> Black Lives Matter </a></li>
           <li> <a href="https://www.paypal.com/donate/?token=kaeL-u_l-2oQxNhPuDZv4_kwWNOCOQWWtj_RO2k-oK8V8_jOtx2_385UTh93RmKHL-PeAG&country.x=US&locale.x=US" target="_blank"> Campaign Zero </a></li>
           <li> <a href="https://secure.givelively.org/donate/the-bail-project" target="_blank"> The Bail Project </a></li>
           <li> <a href="https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=16304&track=DUXXX1G&utm_source=2020searchgoogle&utm_medium=search&utm_campaign=searchevergreen&gclid=CjwKCAjwt-L2BRA_EiwAacX32bqCVpJqCcfPSacFooGSHAS26QSQZX2KbZCmk8H_X7AVagrwfPXqQxoCEMgQAvD_BwE" target="_blank"> NAACP Legal Defense Fund</a> </li>
          <li> <a href="#"> Learn More </a></li>
         </ul>

       }
      </button> </li>
      <li><button className="panel"
        onMouseEnter={() => this.setIsShown1()}
        onMouseLeave={() => this.setIsShown1()}>
           {!this.state.isShown1 ?     <div className="topleft">protests near me</div> :
           <ul className="list">
           <li> Guidelines for protesting </li>
           <li> Protests in my city </li>
           <li> How to be an ally at a rally </li>
           <li> <a href="#"> Learn More </a></li>

         </ul>}

      </button> </li>
      <li> <button className="panel"
        onMouseEnter={() => this.setIsShown2()}
        onMouseLeave={() => this.setIsShown2()}>
        {!this.state.isShown2 ? <div className="topleft">reading material</div> :
        <ul className="list">
        <li> Are Prisons Obsolete? </li>
        <li> Between the World and Me </li>
        <li> The Bluest Eye </li>
        <li> Becoming </li>
        <li> Invisible Man </li>
        <li> Born a Crime </li>

        </ul>
      }
        </button></li>

      <li><button className="panel"
        onMouseEnter={() => this.setIsShown3()}
        onMouseLeave={() => this.setIsShown3()}>
        {!this.state.isShown3 ? <div className="topleft">voting info</div> :
        <ul className="list">
        <li> Have you <a href="https://www.usa.gov/register-to-vote" target="_blank">registered</a> to vote? </li>
        <li> Why should I vote? </li>
        <li> Voting Resources </li>
        <li> <a href="#"> Learn More </a></li>

        </ul>}

      </button></li>
      <li><button className="panel"
        onMouseEnter={() => this.setIsShown4()}
        onMouseLeave={() => this.setIsShown4()}>
                <div className="topleft">people to contact</div>

      </button></li>
      <li><button className="panel"
        onMouseEnter={() => this.setIsShown5()}
        onMouseLeave={() => this.setIsShown5()}>
        {!this.state.isShown5 ? <div className="topleft">topics to discuss</div> :
        <ul className="list">
        <li> When were you taught about race and culture? </li>
        <li> What are your local politicians' policy on ending police bruality? </li>
        <li> What can you do to support POC in your community? </li>
        <li> <a href="#"> Learn More </a></li>

        </ul>}
      </button></li>

      </ul>
</div>

    );
  }
}

export default Example;
