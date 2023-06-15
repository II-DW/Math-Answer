
import '../../One.css';

import { Link } from "react-router-dom";

import Img from '../../Picture/solve/2_23.png';

function Question() {
  return (
    <div className="Main">
        <span className="Next"><Link to="../../../question/2/23"className="Next2">문제 보러가기</Link>  </span>
        <img src = {Img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../solve/2/24"className="Next3">다음문제</Link></span>
    </div>
  );
}

export default Question;
