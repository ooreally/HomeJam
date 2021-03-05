import React , {Component} from "react";
import showsData from "../../assets/DummyData/showsData";
import ticket from '../../assets/images/ticket.svg';
import ticketbooked from '../../assets/images/ticketbooked.svg';
 export default class Upcoming extends Component {
     render(){
         return(
            
            <div class="row" >
                <div className="new">
                  { showsData.map( show => (
                    <div class="col-sm-3">
                      <div className="upcoming" >
                        <img src={show.url}  />
                        <div className="data">
                        
                        <div className="genre">{show.genre}</div>
                          <p>{show.name}</p>
                          <br/>
                          <span className="link">More Info&nbsp;&rarr;</span>
                          <span className="vdash" style={{color:"rgb(162, 170, 184)",marginLeft:"8rem"}}>|</span>
                          {(show.name!=="Shilpa Rao") ?
                          <img src={ticket} style={{ width: "20px", cursor: "pointer",float:"right",marginRight:"2rem" }}/>
                          : <img src={ticketbooked} style={{ width: "20px", cursor: "pointer",float:"right",marginRight:"2rem" }}/>}  
                        </div>
                        </div>
                    </div>
                      ))
                }  
                </div>
              </div> 
         );
     }
 }