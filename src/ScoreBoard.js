import { Component } from "react";
import Logo from "./Images/logo.svg"


class ScoreBoard extends Component{
    render(){
        return(
            <div className="col-sm-12 col-md-8 score-board">

            <div>

              {/*score board logo*/}

              <img src={Logo}/>
                 </div>
                 {/*score */}

                 <div className="score">
              <span>SCORE</span>
              <h1 id="score-plat">{this.props.score}</h1>
              
                 </div>
              </div>
        )
    }
}
export default ScoreBoard