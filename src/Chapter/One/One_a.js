import { Link } from "react-router-dom";

import './One.css';



function Home() {
  return (
    <div className="MainPage2">
      <div className='Box2'>2.2 도홤수의 활용 <br/> 정답 </div>
      <div className="BigSize">
            <Link to="/answer/1/1" className='linkstyle'><div className='Box'>1번</div></Link>
            <Link to="/answer/1/6" className='linkstyle'><div className='Box'>6번</div></Link>
            <Link to="/answer/1/11" className='linkstyle'><div className='Box'>11번</div></Link>            
            <Link to="/answer/1/16" className='linkstyle'><div className='Box'>16번</div></Link>
            <Link to="/answer/1/21" className='linkstyle'><div className='Box'>21번</div></Link>
            <Link to="/answer/1/26" className='linkstyle'><div className='Box'>26번</div></Link>
            <Link to="/answer/1/31" className='linkstyle'><div className='Box'>31번</div></Link>
      </div>
      <div className="BigSize">
            <Link to="/answer/1/2" className='linkstyle'><div className='Box'>2번</div></Link>
            <Link to="/answer/1/7" className='linkstyle'><div className='Box'>7번</div></Link>
            <Link to="/answer/1/12" className='linkstyle'><div className='Box'>12번</div></Link>            
            <Link to="/answer/1/17" className='linkstyle'><div className='Box'>17번</div></Link>
            <Link to="/answer/1/22" className='linkstyle'><div className='Box'>22번</div></Link>
            <Link to="/answer/1/27" className='linkstyle'><div className='Box'>27번</div></Link>
            <Link to="/answer/1/32" className='linkstyle'><div className='Box'>32번</div></Link>
      </div>
      
      <div className="BigSize">
            <Link to="/answer/1/3" className='linkstyle'><div className='Box'>3번</div></Link>
            <Link to="/answer/1/8" className='linkstyle'><div className='Box'>8번</div></Link>
            <Link to="/answer/1/13" className='linkstyle'><div className='Box'>13번</div></Link>            
            <Link to="/answer/1/18" className='linkstyle'><div className='Box'>18번</div></Link>
            <Link to="/answer/1/23" className='linkstyle'><div className='Box'>23번</div></Link>
            <Link to="/answer/1/28" className='linkstyle'><div className='Box'>28번</div></Link>
      </div>
      <div className="BigSize">
            <Link to="/answer/1/4" className='linkstyle'><div className='Box'>4번</div></Link>
            <Link to="/answer/1/9" className='linkstyle'><div className='Box'>9번</div></Link>
            <Link to="/answer/1/14" className='linkstyle'><div className='Box'>14번</div></Link>            
            <Link to="/answer/1/19" className='linkstyle'><div className='Box'>19번</div></Link>
            <Link to="/answer/1/24" className='linkstyle'><div className='Box'>24번</div></Link>
            <Link to="/answer/1/29" className='linkstyle'><div className='Box'>29번</div></Link>
      </div>

      <div className="BigSize">
            <Link to="/answer/1/5" className='linkstyle'><div className='Box'>5번</div></Link>
            <Link to="/answer/1/10" className='linkstyle'><div className='Box'>10번</div></Link>
            <Link to="/answer/1/15" className='linkstyle'><div className='Box'>15번</div></Link>            
            <Link to="/answer/1/20" className='linkstyle'><div className='Box'>20번</div></Link>
            <Link to="/answer/1/25" className='linkstyle'><div className='Box'>25번</div></Link>
            <Link to="/answer/1/30" className='linkstyle'><div className='Box'>30번</div></Link>
      </div>
    </div>
  );
}

export default Home;
