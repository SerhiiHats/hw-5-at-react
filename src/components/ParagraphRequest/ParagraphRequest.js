import { connect } from "react-redux";
import "./ParagraphRequest.css"
import {Component} from "react";

class ParagraphRequest extends Component {
 

  render() {   
    const {dataRequest} = this.props; 
    return (
      <div className={"ParagraphRequest"}>
        <p>{dataRequest === false ? "No request" : JSON.stringify(dataRequest.request)}</p>
      </div>
    )
  }
}


const mapStateToProps = (store) => {
  return {
    dataRequest: store.dataRequest,
  }
}

export default connect(mapStateToProps)(ParagraphRequest);