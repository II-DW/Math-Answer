import { Link } from "react-router-dom";

import DaegunImage from '../img/daegun.png';

import './nav.css'

function Nav() {
  return (
   
      
      <div className="NavDiv">
        <Link to="home" className="Nav-Link"><img src ={DaegunImage} alt = 'face' className='Logo'/></Link>
        <li className="Products-Box">
          <Link to="/AllNav" className="Nav-Link"><span className="Nav-Text">문제</span></Link>
          <ul className="Products">
            <li><Link to="/question/1/h" className="Product-text"><span className="Product-text-2"> 2.1 도함수의 활용 </span></Link></li>
            <li><Link to="/question/2/h" className="Product-text"><span className="Product-text-2"> 3.1 부정적분과 정적분 </span></Link></li>
            <li><Link to="/question/3/h" className="Product-text"><span className="Product-text-2"> 3.2 정적분의 활용 </span></Link></li>
          </ul>
        </li>
          
        <li className="Products-Box">
          <Link to="/AllNav" className="Nav-Link"><span className="Nav-Text">해설</span></Link>
          <ul className="Products">
            <li><Link to="/solve/1/h" className="Product-text"><span className="Product-text-2"> 2.1 도함수의 활용 </span></Link></li>
            <li><Link to="/solve/2/h" className="Product-text"><span className="Product-text-2"> 3.1 부정적분과 정적분 </span></Link></li>
            <li><Link to="/solve/3/h" className="Product-text"><span className="Product-text-2"> 3.2 정적분의 활용 </span></Link></li>
          </ul>
        </li>

        <li className="Products-Box">
          <Link to="/from" className="Nav-Link"><span className="Nav-Text">From.</span></Link>
        </li>

        <li className="Products-Box">
          <Link to="/ad" className="Nav-Link"><span className="Nav-Text">Ad.</span></Link>
        </li>
        
      </div>
    
  )
}


export default Nav;


