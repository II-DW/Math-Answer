
import '../../One.css';

import { Link } from "react-router-dom";

import img from '../../Pircure/q/13.png';

function Question() {
  return (
    <div className="Main">
        <span className="Next"><Link to="../../../solve/1/13" className="Next2">해설 보러가기</Link> </span>
        <img src = {img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../question/1/14"className="Next3">다음문제</Link></span>
    </div>
  );
}

export default Question;
