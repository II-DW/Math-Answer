import { Link } from "react-router-dom";


import './AllNav.css'

function Nav() {
  return (    
      <div className="MainFrom">
        <div className='Box22'>문제모음</div>
        <div className="divBox2">
          <Link to="/question/1/h" className='linkstyle'><div className='Box11'>2.1 도함수의 활용</div></Link>
          <Link to="/question/2/h" className='linkstyle'><div className='Box11'>3.1 부정적분과 정적분</div></Link>
          <Link to="/question/3/h" className='linkstyle'><div className='Box11'>3.2 정적분의 활용</div></Link>
        </div> <br />

        <div className='Box22'>해설모음</div>
        <div className="divBox2">
          <Link to="/solve/1/h" className='linkstyle'><div className='Box11'>2.1 도함수의 활용</div></Link>
          <Link to="/solve/2/h" className='linkstyle'><div className='Box11'>3.1 부정적분과 정적분</div></Link>
          <Link to="/solve/3/h" className='linkstyle'><div className='Box11'>3.2 정적분의 활용</div></Link>
        </div> <br />
      </div>
    
  )
}


export default Nav;


