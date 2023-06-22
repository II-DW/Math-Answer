
import '../../One.css';

import { Link } from "react-router-dom";

import img from '../../Pircure/q/3_39.png';

function Question() {
  return (
    <div className="Main">
        <img src = {img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../solve/3/39" className="Next2">해설 보러가기</Link> </span>
        <span className="Next"><Link to="../../../question/3/40"className="Next3">다음문제</Link></span>
    </div>
  );
}

export default Question;
