import { Component } from "react";
import paper from "../Images/icon-paper.svg"


class PickCompo extends Component{
    render(){
        return(
            <div className="col-sm-3">
            <h4>{this.props.head}</h4>
            <div className={this.props.class}>
                <div>
                    <img src={this.props.img}/>
                </div>

            </div>
        </div>
        )
    }
}

export default PickCompo