
import '../../One.css';

import { Link } from "react-router-dom";

import Img from '../../Pircure/solve/47.png';

function Question() {
  return (
    <div className="Main">
        <span className="Next"><Link to="../../../question/1/47"className="Next2">문제 보러가기</Link> &nbsp; <br /> <Link to ="../../../answer/1/47" className="Next2">답지 보러가기</Link></span>
        <img src = {Img} alt="face" className="img"/>
    </div>
  );
}

export default Question;
