import { Link } from "react-router-dom";


import './from.css'

function Nav() {
  return (    
      <div className="MainFrom">
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />


        <a className = 'GitHubContact'href="https://github.com/II-DW">
          <i class="fa-brands fa-github"></i>
        </a>

        <span className=''>Github 코드 보러가기</span>
        <Link className='CharFrom'to='https://github.com/II-DW/Math-Answer'>Repository</Link>
      </div>
    
  )
}


export default Nav;


