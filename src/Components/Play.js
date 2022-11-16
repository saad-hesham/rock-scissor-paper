import { Component } from "react";
import paper from "../Images/icon-paper.svg"
import rock from "../Images/icon-rock.svg"
import scissors from "../Images/icon-scissors.svg"
import rules from "../Images/image-rules.svg"
import close from "../Images/icon-close.svg"
import { Link } from "react-router-dom";
import ScoreBoard from "../ScoreBoard";


class Play extends Component{
componentDidMount(){
    //calling buttons and blocks
    let rulesButton = document.getElementById("RULES");
    let closeButton = document.getElementById("CLOSE");
    let blocks = document.querySelectorAll(".block");
    //this is the array that will computer choose his move from 
    let computer = ["rock","paper","scissor"];
    //this line will generate random num between 0-2 
    let computerChioce = Math.round(Math.random()*2)
    localStorage.setItem("computer",computer[computerChioce])
    switch(localStorage.getItem("computer")) {
        case "rock":
            localStorage.setItem("computerimg",rock)

        break;
        case "paper":
            localStorage.setItem("computerimg",paper)

          break;
          case "scissor":
            localStorage.setItem("computerimg",scissors)

          break;
        default:
            console.log("good")

      }

    /*this loop will add function on all blocks, the funtion will store the id of the block that will be used later to compare with computer choice 
   and based on it decide the winner
    */
 for(let i =0 ; i<= blocks.length-1; i++){
    blocks[i].onclick=function(){
        localStorage.setItem("player",this.id)
        localStorage.setItem("img",this.children[0].children[0].src)

    }
 }

    //THIS FUNCTION WILL OPEN RULES PAGE
rulesButton.onclick = function openRules(){
    document.querySelector(".parent-rule-screen").style.display="block"
}
    //THIS FUNCTION WILL OPEN RULES PAGE
    closeButton.onclick = function openRules(){
        document.querySelector(".parent-rule-screen").style.display="none"
    }
}

    render(){
    
        
        return(
            <div>
                        <div className="parent-rule-screen">
                <div className="black-screen"></div>
                

                    < div className="rules-block">
                    <div className="heading" >RULES</div>

                    <img src={close} className="close-button" id="CLOSE"/>
                    <img src={rules}/>
                </div>
                </div>
                <div className="container">
                    <div className="row" style={{justifyContent:"center"}}>

                        {/*score board parent container*/}

                 <ScoreBoard score={localStorage.getItem("score")}/>
                    </div>
{/* the parent of all blocks  */}
                    <div className="row" style={{justifyContent:"center",marginTop:"64px"}}>
                     <div className="blocks-parent col-sm-8 col-md-6">
                        {/* this row will layout blocks inside it  */}

                        <div className="laying-Out-row">

                            {/*paper block */}
                            <Link to="/result">
                     <div  className="col-sm-4 block paper" id="paper">
                        <div className="block-parent">
                        <img src={paper}/>
                        </div>
                        </div>
                        </Link> 

                                {/*scissor block */}
<Link to="/result">
                        <div  className="col-sm-4 block scissor"  id="scissor">
                        <div  className="block-parent">
                        <img src={scissors}/>
                        </div>
                        </div>  
                        </Link> 
                           
                        
                                       </div>
                                        {/* this row will layout blocks inside it  */}

                                       <div className="laying-Out-row">

                                      {/*rock block */}
                                      <Link to="/result">
                     <div  className="col-sm-4 block rock" id="rock">
                        <div style={{background:"white"}} className="block-parent">
                        <img src={rock}/>
                        </div>
                        </div>
                        </Link> 

                       </div>


                     </div>
                        </div>

                </div>
                <div className="rules-button" id="RULES">RULES</div>

        
            </div>
        )
    }
}
export default Play