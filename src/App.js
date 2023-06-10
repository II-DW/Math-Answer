import {  Route, BrowserRouter, Routes  } from "react-router-dom";

import Home from './Home.js';

import Oneq from './Chapter/One/One_q.js';
import Ones from './Chapter/One/One_s.js';

import './App.css';

import Nav from './components/nav.js'
import NotFound from './components/404.js';
import From from './components/from.js'

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
import S1s14 from './Chapter/One/code/solve/S1_14.js';
import S1s15 from './Chapter/One/code/solve/S1_15.js';
import S1s16 from './Chapter/One/code/solve/S1_16.js';
import S1s17 from './Chapter/One/code/solve/S1_17.js';
import S1s18 from './Chapter/One/code/solve/S1_18.js';
import S1s19 from './Chapter/One/code/solve/S1_19.js';
import S1s20 from './Chapter/One/code/solve/S1_20.js';
import S1s21 from './Chapter/One/code/solve/S1_21.js';
import S1s22 from './Chapter/One/code/solve/S1_22.js';
import S1s23 from './Chapter/One/code/solve/S1_23.js';
import S1s24 from './Chapter/One/code/solve/S1_24.js';
import S1s25 from './Chapter/One/code/solve/S1_25.js';
import S1s26 from './Chapter/One/code/solve/S1_26.js';
import S1s27 from './Chapter/One/code/solve/S1_27.js';
import S1s28 from './Chapter/One/code/solve/S1_28.js';
import S1s29 from './Chapter/One/code/solve/S1_29.js';
import S1s30 from './Chapter/One/code/solve/S1_30.js';
import S1s31 from './Chapter/One/code/solve/S1_31.js';
import S1s32 from './Chapter/One/code/solve/S1_32.js';
import S1s33 from './Chapter/One/code/solve/S1_33.js';
import S1s34 from './Chapter/One/code/solve/S1_34.js';
import S1s35 from './Chapter/One/code/solve/S1_35.js';
import S1s36 from './Chapter/One/code/solve/S1_36.js';
import S1s37 from './Chapter/One/code/solve/S1_37.js';
import S1s38 from './Chapter/One/code/solve/S1_38.js';
import S1s39 from './Chapter/One/code/solve/S1_39.js';
import S1s40 from './Chapter/One/code/solve/S1_40.js';
import S1s41 from './Chapter/One/code/solve/S1_41.js';
import S1s42 from './Chapter/One/code/solve/S1_42.js';
import S1s43 from './Chapter/One/code/solve/S1_43.js';
import S1s44 from './Chapter/One/code/solve/S1_44.js';
import S1s45 from './Chapter/One/code/solve/S1_45.js';
import S1s46 from './Chapter/One/code/solve/S1_46.js';
import S1s47 from './Chapter/One/code/solve/S1_47.js';

import Q1q1 from './Chapter/One/code/q/Q1_1.js';
import Q1q2 from './Chapter/One/code/q/Q1_2.js';
import Q1q3 from './Chapter/One/code/q/Q1_3.js';
import Q1q4 from './Chapter/One/code/q/Q1_4.js';
import Q1q5 from './Chapter/One/code/q/Q1_5.js';
import Q1q6 from './Chapter/One/code/q/Q1_6.js';
import Q1q7 from './Chapter/One/code/q/Q1_7.js';
import Q1q8 from './Chapter/One/code/q/Q1_8.js';
import Q1q9 from './Chapter/One/code/q/Q1_9.js';
import Q1q10 from './Chapter/One/code/q/Q1_10.js';
import Q1q11 from './Chapter/One/code/q/Q1_11.js';
import Q1q12 from './Chapter/One/code/q/Q1_12.js';
import Q1q13 from './Chapter/One/code/q/Q1_13.js';
import Q1q14 from './Chapter/One/code/q/Q1_14.js';
import Q1q15 from './Chapter/One/code/q/Q1_15.js';
import Q1q16 from './Chapter/One/code/q/Q1_16.js';
import Q1q17 from './Chapter/One/code/q/Q1_17.js';
import Q1q18 from './Chapter/One/code/q/Q1_18.js';
import Q1q19 from './Chapter/One/code/q/Q1_19.js';
import Q1q20 from './Chapter/One/code/q/Q1_20.js';
import Q1q21 from './Chapter/One/code/q/Q1_21.js';
import Q1q22 from './Chapter/One/code/q/Q1_22.js';
import Q1q23 from './Chapter/One/code/q/Q1_23.js';
import Q1q24 from './Chapter/One/code/q/Q1_24.js';
import Q1q25 from './Chapter/One/code/q/Q1_25.js';
import Q1q26 from './Chapter/One/code/q/Q1_26.js';
import Q1q27 from './Chapter/One/code/q/Q1_27.js';
import Q1q28 from './Chapter/One/code/q/Q1_28.js';
import Q1q29 from './Chapter/One/code/q/Q1_29.js';
import Q1q30 from './Chapter/One/code/q/Q1_30.js';
import Q1q31 from './Chapter/One/code/q/Q1_31.js';
import Q1q32 from './Chapter/One/code/q/Q1_32.js';
import Q1q33 from './Chapter/One/code/q/Q1_33.js';
import Q1q34 from './Chapter/One/code/q/Q1_34.js';
import Q1q35 from './Chapter/One/code/q/Q1_35.js';
import Q1q36 from './Chapter/One/code/q/Q1_36.js';
import Q1q37 from './Chapter/One/code/q/Q1_37.js';
import Q1q38 from './Chapter/One/code/q/Q1_38.js';
import Q1q39 from './Chapter/One/code/q/Q1_39.js';
import Q1q40 from './Chapter/One/code/q/Q1_40.js';
import Q1q41 from './Chapter/One/code/q/Q1_41.js';
import Q1q42 from './Chapter/One/code/q/Q1_42.js';
import Q1q43 from './Chapter/One/code/q/Q1_43.js';
import Q1q44 from './Chapter/One/code/q/Q1_44.js';
import Q1q45 from './Chapter/One/code/q/Q1_45.js';
import Q1q46 from './Chapter/One/code/q/Q1_46.js';
import Q1q47 from './Chapter/One/code/q/Q1_47.js';


function App() {
  return (
    <BrowserRouter basename="/Math-Answer">
      <Nav /> 
      <hr />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} component={() => <redirect to='/home' />}/>
        <Route path="from" element={<From />}/>
        <Route path="question">
          <Route path="1"> 
            <Route path="h" element={<Oneq />} />
            <Route path="1" element={<Q1q1 />} />
            <Route path="2" element={<Q1q2 />} />
            <Route path="3" element={<Q1q3 />} />
            <Route path="4" element={<Q1q4 />} />
            <Route path="5" element={<Q1q5 />} />
            <Route path="6" element={<Q1q6 />} />
            <Route path="7" element={<Q1q7 />} />
            <Route path="8" element={<Q1q8 />} />
            <Route path="9" element={<Q1q9 />} />
            <Route path="10" element={<Q1q10 />} />
            <Route path="11" element={<Q1q11 />} />
            <Route path="12" element={<Q1q12 />} />
            <Route path="13" element={<Q1q13 />} />
            <Route path="14" element={<Q1q14 />} />
            <Route path="15" element={<Q1q15 />} />
            <Route path="16" element={<Q1q16 />} />
            <Route path="17" element={<Q1q17 />} />
            <Route path="18" element={<Q1q18 />} />
            <Route path="19" element={<Q1q19 />} />
            <Route path="20" element={<Q1q20 />} />
            <Route path="21" element={<Q1q21 />} />
            <Route path="22" element={<Q1q22 />} />
            <Route path="23" element={<Q1q23 />} />
            <Route path="24" element={<Q1q24 />} />
            <Route path="25" element={<Q1q25 />} />
            <Route path="26" element={<Q1q26 />} />
            <Route path="27" element={<Q1q27 />} />
            <Route path="28" element={<Q1q28 />} />
            <Route path="29" element={<Q1q29 />} />
            <Route path="30" element={<Q1q30 />} />
            <Route path="31" element={<Q1q31 />} />
            <Route path="32" element={<Q1q32 />} />
            <Route path="33" element={<Q1q33 />} />
            <Route path="34" element={<Q1q34 />} />
            <Route path="35" element={<Q1q35 />} />
            <Route path="36" element={<Q1q36 />} />
            <Route path="37" element={<Q1q37 />} />
            <Route path="38" element={<Q1q38 />} />
            <Route path="39" element={<Q1q39 />} />
            <Route path="40" element={<Q1q40 />} />
            <Route path="41" element={<Q1q41 />} />
            <Route path="42" element={<Q1q42 />} />
            <Route path="43" element={<Q1q43 />} />
            <Route path="44" element={<Q1q44 />} />
            <Route path="45" element={<Q1q45 />} />
            <Route path="46" element={<Q1q46 />} />
            <Route path="47" element={<Q1q47 />} />
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
            <Route path="14" element={<S1s14 />} />
            <Route path="15" element={<S1s15 />} />
            <Route path="16" element={<S1s16 />} />
            <Route path="17" element={<S1s17 />} />
            <Route path="18" element={<S1s18 />} />
            <Route path="19" element={<S1s19 />} />
            <Route path="20" element={<S1s20 />} />
            <Route path="21" element={<S1s21 />} />
            <Route path="22" element={<S1s22 />} />
            <Route path="23" element={<S1s23 />} />
            <Route path="24" element={<S1s24 />} />
            <Route path="25" element={<S1s25 />} />
            <Route path="26" element={<S1s26 />} />
            <Route path="27" element={<S1s27 />} />
            <Route path="28" element={<S1s28 />} />
            <Route path="29" element={<S1s29 />} />
            <Route path="30" element={<S1s30 />} />
            <Route path="31" element={<S1s31 />} />
            <Route path="32" element={<S1s32 />} />
            <Route path="33" element={<S1s33 />} />
            <Route path="34" element={<S1s34 />} />
            <Route path="35" element={<S1s35 />} />
            <Route path="36" element={<S1s36 />} />
            <Route path="37" element={<S1s37 />} />
            <Route path="38" element={<S1s38 />} />
            <Route path="39" element={<S1s39 />} />
            <Route path="40" element={<S1s40 />} />
            <Route path="41" element={<S1s41 />} />
            <Route path="42" element={<S1s42 />} />
            <Route path="43" element={<S1s43 />} />
            <Route path="44" element={<S1s44 />} />
            <Route path="45" element={<S1s45 />} />
            <Route path="46" element={<S1s46 />} />
            <Route path="47" element={<S1s47 />} />
          </Route>
        </Route>  
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
