import React from "react";
import  ReactDOM  from "react-dom";
import Home from "./components/Home";
import "./css/style.css";



const App =()=>{
    return(
<div>
   <Home/>
</div>


    )

}
ReactDOM.render(<App/>,document.getElementById("root"))