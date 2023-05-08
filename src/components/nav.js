import { Link } from "react-router-dom";

import DaegunImage from '../img/daegun.png';

import './nav.css'

function Nav() {
  return (
   
      
      <div className="NavDiv">
        <Link to="home" className="Nav-Link"><img src ={DaegunImage} alt = 'face' className='Logo'/></Link>
        <li className="Products-Box">
          <Link to="/question" className="Nav-Link"><span className="Nav-Text">문제</span></Link>
          <ul className="Products">
            <li><Link to="/question/1/h" className="Product-text"><span className="Product-text-2"> 1.1 함수의 극한 </span></Link></li>
            <li><Link to="/question/1/h" className="Product-text"><span className="Product-text-2"> 1.2 함수의 연속 </span></Link></li>
            <li><Link to="/question/1/h" className="Product-text"><span className="Product-text-2"> 2.1 미분계수와 도함수 </span></Link></li>
            <li><Link to="/question/1/h" className="Product-text"><span className="Product-text-2"> 2.2 도함수의 활용 </span></Link></li>
          </ul>
        </li>
        
        <li className="Products-Box">
          <Link to="/solve" className="Nav-Link"><span className="Nav-Text">해설</span></Link>
          <ul className="Products">
            <li><Link to="/solve/1/h" className="Product-text"><span className="Product-text-2"> 1.1 함수의 극한 </span></Link></li>
            <li><Link to="/solve/1/h" className="Product-text"><span className="Product-text-2"> 1.2 함수의 연속 </span></Link></li>
            <li><Link to="/solve/1/h" className="Product-text"><span className="Product-text-2"> 2.1 미분계수와 도함수 </span></Link></li>
            <li><Link to="/solve/1/h" className="Product-text"><span className="Product-text-2"> 2.2 도함수의 활용 </span></Link></li>
          </ul>
        </li>

        <li className="Products-Box">
          <Link to="/answer" className="Nav-Link"><span className="Nav-Text">빠른답지</span></Link>
          <ul className="Products">
            <li><Link to="/answer/1/h" className="Product-text"><span className="Product-text-2"> 1.1 함수의 극한 </span></Link></li>
            <li><Link to="/answer/1/h" className="Product-text"><span className="Product-text-2"> 1.2 함수의 연속 </span></Link></li>
            <li><Link to="/answer/1/h" className="Product-text"><span className="Product-text-2"> 2.1 미분계수와 도함수 </span></Link></li>
            <li><Link to="/answer/1/h" className="Product-text"><span className="Product-text-2"> 2.2 도함수의 활용 </span></Link></li>
          </ul>
        </li>
      
        
      </div>
    
  )
}


export default Nav;


