
import '../../One.css';

import { Link } from "react-router-dom";

import img from '../../Pircure/q/47.png';

function Question() {
  return (
    <div className="Main">
      <span className="Next"><Link to="../../../solve/1/47" className="Next2">해설 보러가기</Link> </span>
        <img src = {img} alt="face" className="img"/>    
    </div>
  );
}

export default Question;
