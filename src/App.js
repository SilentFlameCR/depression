import React, { Component } from 'react';
import './App.css';
import ThreadDisplay from './ThreadDisplay/component/ThreadDisplay';
import Video from './Video/Video';
import firebase from './Firebase/Firebase.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        
            <div className="row masthead">
               
                <div className="col-12 text-center">
                    <h2 className="title">All the kids are depressed.</h2>
                </div>
                
                <div className="col-12 text-center" style={{marginBottom: "1em"}}>
                    <em><h6 className="sub-title">You are not alone!</h6></em>
                </div>
           
          </div> 
          
          <div className="container">
          
          <button id="home-button"><a href="http://www.rahulrodrigues.ca">Home</a></button>
          
          <div className="row">
              
                <div className="col-12 intro">
                    <p>If you feel lonely, like life isn't worth living or just giving up I am glad your here. You are not alone. You will make it through this and how do I know that? Because you have made it through every goddamn thing life has thrown at you till now and your still here. It does get better and you are not in this fight alone. Millions of individuals worldwide have a daily battle with depression. Read the stories of others and be sure to add your own. This world needs you in it. &hearts;</p>
                </div>
            </div>
            
            <ThreadDisplay />
            
            <Video link="https://www.youtube.com/embed/uKxWP56VStM" />
            
        </div>
      </div>
    );
  }
}

export default App;
