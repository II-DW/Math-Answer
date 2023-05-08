
import '../../One.css';

import { Link } from "react-router-dom";

import img from '../../Pircure/q/1.png';

function Question() {
  return (
    <div className="Main">
        <img src = {img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../solve/1/1" className="Next2">해설 보러가기</Link> &nbsp; <br /> <Link to ="../../../answer/1/1" className="Next2">답지 보러가기</Link></span>
    </div>
  );
}

export default Question;
