import React from 'react';
import {transition} from './transition_util'
import {translation} from './translation_util'
import {fader} from './fader_util'

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

  class App extends React.Component{
    constructor(props) {
      super(props);

      this.handleTransitionClick = this.handleTransitionClick.bind(this);
      this.i = 0
      this.mode = [transition, translation, fader]
      let method = this.mode[this.i]
    }

  handleTransitionClick(){
      this.i += 1

      if (this.i > this.mode.length){
          this.i = 0
      }
      
      let method = this.mode[this.i]
      method()
  }   


  componentDidMount(){
    this.images = document.getElementsByClassName("slideshow-div-img")
  }



render(){

    return(
        <div className='jsx-wrapper'>
               
              <section class="slideshow-header">
                    <h1>Just a few of Our Happy Workday Customers:</h1>
              </section>
              
              <section class="slideshow-wrapper">
                     <h1>Slide Show</h1>
                    <img src="https://www.workday.com/content/dam/web/en-us/images/logos/customers/logo_Abbott_450x225.png/_jcr_content/renditions/cq5dam.logomd.300.150.png" alt="abbott" class="slideshow-div-img" style="display: block"></img>
                    <img src="https://www.workday.com/content/dam/web/en-us/images/logos/customers/logo-amazon.png/_jcr_content/renditions/cq5dam.logomd.300.101.png" alt="amazon" class="slideshow-div-img" style="display: none"></img>
                    <img src="https://www.workday.com/content/dam/web/en-us/images/logos/logo-audible-inc.png/_jcr_content/renditions/cq5dam.logomd.300.135.png" alt="audible" class="slideshow-div-img" style="display: none"></img>
                    <img src="https://www.workday.com/content/dam/web/en-us/images/logos/customers/logo-bank-of-america.png/_jcr_content/renditions/cq5dam.logomd.300.38.png" alt="bank of america" class="slideshow-div-img" style="display: none"></img>
                    <img src="https://www.workday.com/content/dam/web/en-us/images/logos/customers/logo-target-corporation.png/_jcr_content/renditions/cq5dam.logomd.300.300.png" alt="target" class="slideshow-div-img" style="display: none"></img>
              </section>
              <button onClick={this.handleTransitionClick}></button>    

            </div>    
        )

    
    }
};