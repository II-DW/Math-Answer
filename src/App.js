import {  Route, BrowserRouter, Routes  } from "react-router-dom";

import Home from './Home.js';

import Oneq from './Chapter/One/One_q.js';
import Ones from './Chapter/One/One_s.js';
import Onea from './Chapter/One/One_a.js';


import './App.css';

import Nav from './components/nav.js'

import Q1q1 from './Chapter/One/code/q/Q1_1.js';

import S1s1 from './Chapter/One/code/solve/S1_1.js';
import S1s2 from './Chapter/One/code/solve/S1_2.js';
import S1s3 from './Chapter/One/code/solve/S1_3.js';
import S1s4 from './Chapter/One/code/solve/S1_4.js';
import S1s5 from './Chapter/One/code/solve/S1_5.js';
import S1s6 from './Chapter/One/code/solve/S1_6.js';
import S1s7 from './Chapter/One/code/solve/S1_7.js';
import S1s8 from './Chapter/One/code/solve/S1_8.js';
import S1s9 from './Chapter/One/code/solve/S1_9.js';
import S1s10 from './Chapter/One/code/solve/S1_10.js';
import S1s11 from './Chapter/One/code/solve/S1_11.js';
import S1s12 from './Chapter/One/code/solve/S1_12.js';
import S1s13 from './Chapter/One/code/solve/S1_13.js';


import A1a1 from './Chapter/One/code/a/A1_1.js';

function App() {
  return (
    <BrowserRouter basename="/Math-Answer">
      <Nav />
      <hr />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} component={() => <redirect to='/home' />}/>
        <Route path="question">
          <Route path="1" > 
            <Route path="h" element={<Oneq />} />
            <Route path="1" element={<Q1q1 />} />
            <Route path="2" element={<Q1q1 />} />
            <Route path="3" element={<Q1q1 />} />
            <Route path="4" element={<Q1q1 />} />
            <Route path="5" element={<Oneq />} />
            <Route path="6" element={<Oneq />} />
            <Route path="7" element={<Oneq />} />
            <Route path="8" element={<Oneq />} />
            <Route path="9" element={<Oneq />} />
            <Route path="10" element={<Oneq />} />
            <Route path="11" element={<Oneq />} />
            <Route path="12" element={<Oneq />} />
            <Route path="13" element={<Oneq />} />
            <Route path="14" element={<Oneq />} />
            <Route path="15" element={<Oneq />} />
            <Route path="16" element={<Oneq />} />
            <Route path="17" element={<Oneq />} />
            <Route path="18" element={<Oneq />} />
            <Route path="19" element={<Oneq />} />
            <Route path="20" element={<Oneq />} />
            <Route path="21" element={<Oneq />} />
            <Route path="22" element={<Oneq />} />
            <Route path="23" element={<Oneq />} />
            <Route path="24" element={<Oneq />} />
            <Route path="25" element={<Oneq />} />
            <Route path="26" element={<Oneq />} />
            <Route path="27" element={<Oneq />} />
            <Route path="28" element={<Oneq />} />
            <Route path="29" element={<Oneq />} />
            <Route path="30" element={<Oneq />} />
            <Route path="31" element={<Oneq />} />
            <Route path="32" element={<Oneq />} />
          </Route>
        </Route>
        <Route path="solve">
          <Route path="1" > 
            <Route path="h" element={<Ones />} />
            <Route path="1" element={<S1s1 />} />
            <Route path="2" element={<S1s2 />} />
            <Route path="3" element={<S1s3 />} />
            <Route path="4" element={<S1s4 />} />
            <Route path="5" element={<S1s5 />} />
            <Route path="6" element={<S1s6 />} />
            <Route path="7" element={<S1s7 />} />
            <Route path="8" element={<S1s8 />} />
            <Route path="9" element={<S1s9 />} />
            <Route path="10" element={<S1s10 />} />
            <Route path="11" element={<S1s11 />} />
            <Route path="12" element={<S1s12 />} />
            <Route path="13" element={<S1s13 />} />
            <Route path="14" element={<Ones />} />
            <Route path="15" element={<Ones />} />
            <Route path="16" element={<Ones />} />
            <Route path="17" element={<Ones />} />
            <Route path="18" element={<Ones />} />
            <Route path="19" element={<Ones />} />
            <Route path="20" element={<Ones />} />
            <Route path="21" element={<Ones />} />
            <Route path="22" element={<Ones />} />
            <Route path="23" element={<Ones />} />
            <Route path="24" element={<Ones />} />
            <Route path="25" element={<Ones />} />
          </Route>
        </Route>
        <Route path="answer">
          <Route path="1" > 
            <Route path="h" element={<Onea />} />
            <Route path="1" element={<A1a1 />} />
            <Route path="2" element={<A1a1 />} />
            <Route path="3" element={<A1a1 />} />
            <Route path="4" element={<Onea />} />
            <Route path="5" element={<Onea />} />
            <Route path="6" element={<Onea />} />
            <Route path="7" element={<Onea />} />
            <Route path="8" element={<Onea />} />
            <Route path="9" element={<Onea />} />
            <Route path="10" element={<Onea />} />
            <Route path="11" element={<Onea />} />
            <Route path="12" element={<Onea />} />
            <Route path="13" element={<Onea />} />
            <Route path="14" element={<Onea />} />
            <Route path="15" element={<Onea />} />
            <Route path="16" element={<Onea />} />
            <Route path="17" element={<Onea />} />
            <Route path="18" element={<Onea />} />
            <Route path="19" element={<Onea />} />
            <Route path="20" element={<Onea />} />
            <Route path="21" element={<Onea />} />
            <Route path="22" element={<Onea />} />
            <Route path="23" element={<Onea />} />
            <Route path="24" element={<Onea />} />
            <Route path="25" element={<Onea />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
