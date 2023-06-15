
import '../../One.css';

import { Link } from "react-router-dom";

import Img from '../../Picture/solve/2_53.png';

function Question() {
  return (
    <div className="Main">
      <span className="Next"><Link to="../../../question/1/53"className="Next2">문제 보러가기</Link>  </span>
        <img src = {Img} alt="face" className="img"/>
    </div>
  );
}

export default Question;
