import { useNavigate } from "react-router-dom";


import './404.css'

function Nav() {
  let navigate = useNavigate();

  return (    
      <div className="Main404">
        <span className='Char404'>404 Not Found</span> 
        <span className='Char4042'>요청하신 항목을 찾을 수 없습니다 죄송합니다.</span> <br />
        <button className="w-btn w-btn-gra3 w-btn-gra-anim"  type='button' onClick={() => { navigate(-1); }}>뒤로가기</button>
      </div>
    
  )
}


export default Nav;


