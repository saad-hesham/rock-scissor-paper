import { Component } from "react";
import ScoreBoard from "../ScoreBoard";
import paper from "../Images/icon-paper.svg"
import rock from "../Images/icon-rock.svg"
import scissors from "../Images/icon-scissors.svg"
import PickCompo from "./PickCompo";
import { Link } from "react-router-dom";
class Result extends Component{
    componentDidMount(){
        let declariton = document.getElementById("declaration");
       let player = localStorage.getItem("player");
        let computer = localStorage.getItem("computer");
        let score = 0;
        if(player==computer){
            declariton.innerHTML = "DRAW"
            localStorage.setItem("score",Number(localStorage.getItem("score"))+0);

        }
        if(player=="rock"&&computer=="paper"){
            declariton.innerHTML = "YOU LOSE"
            localStorage.setItem("score",Number(localStorage.getItem("score"))-1);

      
        
        }
        if(player=="paper"&&computer=="rock"){
            declariton.innerHTML = "YOU WIN"
            localStorage.setItem("score",Number(localStorage.getItem("score"))+1);

           
      
    
         }
        

        if(player=="paper"&&computer=="scissor"){
            declariton.innerHTML = "YOU LOSE"
            localStorage.setItem("score",Number(localStorage.getItem("score"))-1);

           
        
        }
        if(player=="scissor"&&computer=="paper"){
            declariton.innerHTML = "YOU WIN"
            localStorage.setItem("score",Number(localStorage.getItem("score"))+1);

       
        }
        if(player=="scissor"&&computer=="rock"){
            declariton.innerHTML = "YOU LOSE"
            localStorage.setItem("score",Number(localStorage.getItem("score"))-1);

           
       
        }
        if(player=="rock"&&computer=="scissor"){
            declariton.innerHTML = "YOU WIN"
            localStorage.setItem("score",Number(localStorage.getItem("score"))+1);

          
            
        }

    }
    constructor(){
        super()
        this.state={
            paper:localStorage.getItem("player")
        }


    }
    render(){
        return(
            <div>
                <div className="container">
                <div className="row" style={{justifyContent:"center"}}>
                <ScoreBoard 
                score={localStorage.getItem("score")}/>
                <div className="row row-win" style={{justifyContent:"space-around",marginTop:"15vh"}}>
          <PickCompo 
          class={"pick-parent"+" "+localStorage.getItem("player")}
          img = {localStorage.getItem("img") }
          head = {"YOU PICKED"}
          />


<PickCompo 
          class={"pick-parent"+" "+localStorage.getItem("computer")}
          img = {localStorage.getItem("computerimg") }
          head = {"THE HOUSE PICKED"}
          />
                </div>
                <div className="row" style={{justifyContent:"center",textAlign:"center",marginTop:"4em"}}>
                    <h1 id="declaration">YOU WIN</h1>
                    <Link to="/"><button>PLAY AGAIN</button></Link> 
                </div>

     

            </div>
            </div>
            </div>
        )
    }
}
export default Result