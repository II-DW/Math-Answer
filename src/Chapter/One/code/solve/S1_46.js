
import '../../One.css';

import { Link } from "react-router-dom";

import Img from '../../Pircure/solve/46.png';

function Question() {
  return (
    <div className="Main">
        <span className="Next"><Link to="../../../question/1/46"className="Next2">문제 보러가기</Link> &nbsp; <br /> <Link to ="../../../answer/1/46" className="Next2">답지 보러가기</Link></span>
        <img src = {Img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../solve/1/47"className="Next3">다음문제</Link></span>
    </div>
  );
}

export default Question;
