import "./ParagraphRequest.css"
import {Component} from "react";

class ParagraphRequest extends Component {

  render() {
    const {requestForm} = this.props;
    // console.log(requestForm)
    return (
      <div className={"ParagraphRequest"}>
        <p>{JSON.stringify(requestForm) === "false" ? "No request" : JSON.stringify(requestForm)}</p>
      </div>
    )
  }
}

export default ParagraphRequest;