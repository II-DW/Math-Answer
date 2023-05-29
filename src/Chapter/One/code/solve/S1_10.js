
import '../../One.css';

import { Link } from "react-router-dom";

import Img from '../../Pircure/solve/10.png';

function Question() {
  return (
    <div className="Main">
        <img src = {Img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../question/1/10"className="Next2">문제 보러가기</Link> &nbsp; <br /> <Link to ="../../../answer/1/10" className="Next2">답지 보러가기</Link></span>
    </div>
  );
}

export default Question;
