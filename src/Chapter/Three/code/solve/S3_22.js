
import '../../One.css';

import { Link } from "react-router-dom";

import Img from '../../Pircure/solve/3_22.png';

function Question() {
  return (
    <div className="Main">
        <span className="Next"><Link to="../../../question/3/22"className="Next2">문제 보러가기</Link>  </span>
        <img src = {Img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../solve/3/23"className="Next3">다음문제</Link></span>
    </div>
  );
}

export default Question;
