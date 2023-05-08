import '../../One.css';

import { Link } from "react-router-dom";

function Question() {
  return (
    <div className="Main">
        <span className="Answer">5</span>
        <span className="Next"><Link to="../../../question/1/1" className="Next2">문제 보러가기</Link> &nbsp; <br /> <Link to ="../../../solve/1/1" className="Next2">해설 보러가기</Link></span>
    </div>
  );
}

export default Question;
