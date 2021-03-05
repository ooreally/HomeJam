import React , {Component} from "react";
import reviewsData from "../../assets/DummyData/reviewsData";
 export default class Upcoming extends Component {
     render(){
         return(
            
          <div class="row">
          <div className="new">
          { reviewsData.map( review => (
              <div class="col-sm-4 ">
                
                  <div className="reviews" >
                  <img src={review.url} className="person" />
                    <div className="name">
                      {review.name}
                      <div className="location">
                      <img src={review.flag} className="flag"/>
                          <div className="rev">&nbsp;{review.location}</div>
                        </div>
                        <br/> 
                      </div> 
                     <br/>
                     <br/>
                     <br/>
                     <div className="des">{review.description}</div> 
                  </div>
                  
              </div>
              
                ))
              } 
              </div> 
          </div>
         );
     }
 }