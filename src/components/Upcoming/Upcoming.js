import React , {Component} from "react";
import Showtickets from './Showtickets';

 export default class Upcoming extends Component {
     render(){
         return(
             
            <div  className="container-fluid">
            <div className="heads">
              <span class="h2">Upcoming Shows</span> <span class="h4"> View All</span> 
              <div className="hr"></div>
            </div>
            <br/>
            <Showtickets/>
                  
            <br/>
          </div>
          
         );
     }
 }