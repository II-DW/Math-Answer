import { Link } from "react-router-dom";

import './Home.css';

import logo from './img/logo_negative.png';
import manga from './img/manga.png';


function Home() {
  return (
    <div >
      
      <div className="MainPage">
        <span className="MainText">수2 기말고사 형성평가 문제지, 해설 정리 사이트</span> <br />
        <span className='MainText2'>이 서비스를 애용해주셔서 감사합니다...<span className='MainText3'> &#10084;</span></span> 
        <span className='MainText2'>7/5 수2 시험 잘치길...<span className='MainText3'> &#10084;</span></span>  <br />
        <span className='MainText2'>Made By. Lee Dowon <img src ={logo} alt = 'face' className='Logo1'/>(<img src ={manga} alt = 'face' className='Logo1'/>)</span>
      </div>
    </div>
  );
}

export default Home;
