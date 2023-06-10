
import '../../One.css';

import { Link } from "react-router-dom";

import img from '../../Pircure/q/4.png';

function Question() {
  return (
    <div className="Main">
        <span className="Next"><Link to="../../../solve/1/4" className="Next2">해설 보러가기</Link> &nbsp; </span>
        <img src = {img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../question/1/5"className="Next3">다음문제</Link></span>
    </div>
  );
}

export default Question;
