import React , {Component} from "react";
import ratings from '../../assets/DummyData/ratingsData';

 export default class Ratings extends Component {
     render(){
         return(
             
            <div className="row1">
            <div className = "cards">
              {
              ratings.map(rating => (
                  <div className={rating.class}>
                  <div className="in-text">
                  <img src={rating.url} className={rating.type}/>
                  <div><br/>0 <br></br>Label</div>
                  </div>
                  </div>     
              ))}
            </div>
             </div>

         );
     }
 }