
import '../../One.css';

import { Link } from "react-router-dom";

import img from '../../Picture/q/2_27.png';

function Question() {
  return (
    <div className="Main">
        <span className="Next"><Link to="../../../solve/2/27" className="Next2">해설 보러가기</Link> </span>
        <img src = {img} alt="face" className="img"/>
        <span className="Next"><Link to="../../../question/2/28"className="Next3">다음문제</Link></span>
    </div>
  );
}

export default Question;
