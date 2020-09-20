import React, { Component } from "react";
import "./SplitElectoralVotes.css";

class SmallElectoralVotes extends Component {
  render() {
    return (
      <div className="container2">
        <h5 className="title"></h5>
        <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.NH}`}
            value="NH"
          >
            NH 4
          </button>
        </div>
        <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.VT}`}
            value="VT"
          >
            VT 3
          </button>
        </div>
	    <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.MA}`}
            value="MA"
          >
            MA 11
          </button>
        </div>
        <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.RI}`}
            value="RI"
          >
            RI 4
          </button>

       </div>
       <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.CT}`}
            value="CT"
          >
            CT 7
          </button>
       </div>
       <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.NJ}`}
            value="NJ"
          >
            NJ 14
          </button>
       </div>
       <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.DE}`}
            value="DE"
          >
            DE 3
          </button>
       </div>

       <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.MD}`}
            value="MD"
          >
            MD 10
          </button>
        </div>

        <div class="btn-group2">
          <button
            onClick={this.props.onClick}
            className={`state ${this.props.DC}`}
            value="DC"
          >
            DC 3
          </button>
        </div> 
     </div>
    );
  }
}

export default SmallElectoralVotes;
