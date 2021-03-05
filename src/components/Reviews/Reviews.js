import React , {Component} from "react";
import CreateReview from './CreateReview';

 export default class Reviews extends Component {
     render()
     {
         return(
          
          <div  className="container-fluid">
                <div className="heads">
                  <span class="h2">Reviews</span> 
                  <span class="h4" style={{color:"whitesmoke", fontSize:"small"}}>
                  <strong>1</strong>
                  <>&nbsp;/&nbsp;12 &nbsp; &nbsp; &larr; &nbsp;&nbsp; &rarr; &nbsp;</>
                  </span> 
                  <div className="hr">

                  </div>
                </div>
            <br/>
            <CreateReview/>
            <br/>
          </div>
          
         );
     }
  }