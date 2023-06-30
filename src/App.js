import {  Route, BrowserRouter, Routes  } from "react-router-dom";

import Home from './Home.js';

// home
import Oneq from './Chapter/One/One_q.js';
import Ones from './Chapter/One/One_s.js';
import Twoq from './Chapter/Two/Two_q.js';
import Twos from './Chapter/Two/Two_s.js';
import Thrq from './Chapter/Three/Three_q.js';
import Thrs from './Chapter/Three/Three_s.js';
import './App.css';

// components
import Nav from './components/nav.js'
import NotFound from './components/404.js';
import From from './components/from.js'
import Ad from './components/Ad.js';
import AllNav from './components/AllNav.js';

// solve
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

import S2s1 from './Chapter/Two/code/solve/S2_1.js';
import S2s2 from './Chapter/Two/code/solve/S2_2.js';
import S2s3 from './Chapter/Two/code/solve/S2_3.js';
import S2s4 from './Chapter/Two/code/solve/S2_4.js';
import S2s5 from './Chapter/Two/code/solve/S2_5.js';
import S2s6 from './Chapter/Two/code/solve/S2_6.js';
import S2s7 from './Chapter/Two/code/solve/S2_7.js';
import S2s8 from './Chapter/Two/code/solve/S2_8.js';
import S2s9 from './Chapter/Two/code/solve/S2_9.js';
import S2s10 from './Chapter/Two/code/solve/S2_10.js';
import S2s11 from './Chapter/Two/code/solve/S2_11.js';
import S2s12 from './Chapter/Two/code/solve/S2_12.js';
import S2s13 from './Chapter/Two/code/solve/S2_13.js';
import S2s14 from './Chapter/Two/code/solve/S2_14.js';
import S2s15 from './Chapter/Two/code/solve/S2_15.js';
import S2s16 from './Chapter/Two/code/solve/S2_16.js';
import S2s17 from './Chapter/Two/code/solve/S2_17.js';
import S2s18 from './Chapter/Two/code/solve/S2_18.js';
import S2s19 from './Chapter/Two/code/solve/S2_19.js';
import S2s20 from './Chapter/Two/code/solve/S2_20.js';
import S2s21 from './Chapter/Two/code/solve/S2_21.js';
import S2s22 from './Chapter/Two/code/solve/S2_22.js';
import S2s23 from './Chapter/Two/code/solve/S2_23.js';
import S2s24 from './Chapter/Two/code/solve/S2_24.js';
import S2s25 from './Chapter/Two/code/solve/S2_25.js';
import S2s26 from './Chapter/Two/code/solve/S2_26.js';
import S2s27 from './Chapter/Two/code/solve/S2_27.js';
import S2s28 from './Chapter/Two/code/solve/S2_28.js';
import S2s29 from './Chapter/Two/code/solve/S2_29.js';
import S2s30 from './Chapter/Two/code/solve/S2_30.js';
import S2s31 from './Chapter/Two/code/solve/S2_31.js';
import S2s32 from './Chapter/Two/code/solve/S2_32.js';
import S2s33 from './Chapter/Two/code/solve/S2_33.js';
import S2s34 from './Chapter/Two/code/solve/S2_34.js';
import S2s35 from './Chapter/Two/code/solve/S2_35.js';
import S2s36 from './Chapter/Two/code/solve/S2_36.js';
import S2s37 from './Chapter/Two/code/solve/S2_37.js';
import S2s38 from './Chapter/Two/code/solve/S2_38.js';
import S2s39 from './Chapter/Two/code/solve/S2_39.js';
import S2s40 from './Chapter/Two/code/solve/S2_40.js';
import S2s41 from './Chapter/Two/code/solve/S2_41.js';
import S2s42 from './Chapter/Two/code/solve/S2_42.js';
import S2s43 from './Chapter/Two/code/solve/S2_43.js';
import S2s44 from './Chapter/Two/code/solve/S2_44.js';
import S2s45 from './Chapter/Two/code/solve/S2_45.js';
import S2s46 from './Chapter/Two/code/solve/S2_46.js';
import S2s47 from './Chapter/Two/code/solve/S2_47.js';
import S2s48 from './Chapter/Two/code/solve/S2_48.js';
import S2s49 from './Chapter/Two/code/solve/S2_49.js';
import S2s50 from './Chapter/Two/code/solve/S2_50.js';
import S2s51 from './Chapter/Two/code/solve/S2_51.js';
import S2s52 from './Chapter/Two/code/solve/S2_52.js';
import S2s53 from './Chapter/Two/code/solve/S2_53.js';

import S3s1 from './Chapter/Three/code/solve/S3_1.js';
import S3s2 from './Chapter/Three/code/solve/S3_2.js';
import S3s3 from './Chapter/Three/code/solve/S3_3.js';
import S3s4 from './Chapter/Three/code/solve/S3_4.js';
import S3s5 from './Chapter/Three/code/solve/S3_5.js';
import S3s6 from './Chapter/Three/code/solve/S3_6.js';
import S3s7 from './Chapter/Three/code/solve/S3_7.js';
import S3s8 from './Chapter/Three/code/solve/S3_8.js';
import S3s9 from './Chapter/Three/code/solve/S3_9.js';
import S3s10 from './Chapter/Three/code/solve/S3_10.js';
import S3s11 from './Chapter/Three/code/solve/S3_11.js';
import S3s12 from './Chapter/Three/code/solve/S3_12.js';
import S3s13 from './Chapter/Three/code/solve/S3_13.js';
import S3s14 from './Chapter/Three/code/solve/S3_14.js';
import S3s15 from './Chapter/Three/code/solve/S3_15.js';
import S3s16 from './Chapter/Three/code/solve/S3_16.js';
import S3s17 from './Chapter/Three/code/solve/S3_17.js';
import S3s18 from './Chapter/Three/code/solve/S3_18.js';
import S3s19 from './Chapter/Three/code/solve/S3_19.js';
import S3s20 from './Chapter/Three/code/solve/S3_20.js';
import S3s21 from './Chapter/Three/code/solve/S3_21.js';
import S3s22 from './Chapter/Three/code/solve/S3_22.js';
import S3s23 from './Chapter/Three/code/solve/S3_23.js';
import S3s24 from './Chapter/Three/code/solve/S3_24.js';
import S3s25 from './Chapter/Three/code/solve/S3_25.js';
import S3s26 from './Chapter/Three/code/solve/S3_26.js';
import S3s27 from './Chapter/Three/code/solve/S3_27.js';
import S3s28 from './Chapter/Three/code/solve/S3_28.js';
import S3s29 from './Chapter/Three/code/solve/S3_29.js';
import S3s30 from './Chapter/Three/code/solve/S3_30.js';
import S3s31 from './Chapter/Three/code/solve/S3_31.js';
import S3s32 from './Chapter/Three/code/solve/S3_32.js';
import S3s33 from './Chapter/Three/code/solve/S3_33.js';
import S3s34 from './Chapter/Three/code/solve/S3_34.js';
import S3s35 from './Chapter/Three/code/solve/S3_35.js';
import S3s36 from './Chapter/Three/code/solve/S3_36.js';
import S3s37 from './Chapter/Three/code/solve/S3_37.js';
import S3s38 from './Chapter/Three/code/solve/S3_38.js';
import S3s39 from './Chapter/Three/code/solve/S3_39.js';
import S3s40 from './Chapter/Three/code/solve/S3_40.js';

// questions
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

import Q2q1 from './Chapter/Two/code/q/Q2_1.js';
import Q2q2 from './Chapter/Two/code/q/Q2_2.js';
import Q2q3 from './Chapter/Two/code/q/Q2_3.js';
import Q2q4 from './Chapter/Two/code/q/Q2_4.js';
import Q2q5 from './Chapter/Two/code/q/Q2_5.js';
import Q2q6 from './Chapter/Two/code/q/Q2_6.js';
import Q2q7 from './Chapter/Two/code/q/Q2_7.js';
import Q2q8 from './Chapter/Two/code/q/Q2_8.js';
import Q2q9 from './Chapter/Two/code/q/Q2_9.js';
import Q2q10 from './Chapter/Two/code/q/Q2_10.js';
import Q2q11 from './Chapter/Two/code/q/Q2_11.js';
import Q2q12 from './Chapter/Two/code/q/Q2_12.js';
import Q2q13 from './Chapter/Two/code/q/Q2_13.js';
import Q2q14 from './Chapter/Two/code/q/Q2_14.js';
import Q2q15 from './Chapter/Two/code/q/Q2_15.js';
import Q2q16 from './Chapter/Two/code/q/Q2_16.js';
import Q2q17 from './Chapter/Two/code/q/Q2_17.js';
import Q2q18 from './Chapter/Two/code/q/Q2_18.js';
import Q2q19 from './Chapter/Two/code/q/Q2_19.js';
import Q2q20 from './Chapter/Two/code/q/Q2_20.js';
import Q2q21 from './Chapter/Two/code/q/Q2_21.js';
import Q2q22 from './Chapter/Two/code/q/Q2_22.js';
import Q2q23 from './Chapter/Two/code/q/Q2_23.js';
import Q2q24 from './Chapter/Two/code/q/Q2_24.js';
import Q2q25 from './Chapter/Two/code/q/Q2_25.js';
import Q2q26 from './Chapter/Two/code/q/Q2_26.js';
import Q2q27 from './Chapter/Two/code/q/Q2_27.js';
import Q2q28 from './Chapter/Two/code/q/Q2_28.js';
import Q2q29 from './Chapter/Two/code/q/Q2_29.js';
import Q2q30 from './Chapter/Two/code/q/Q2_30.js';
import Q2q31 from './Chapter/Two/code/q/Q2_31.js';
import Q2q32 from './Chapter/Two/code/q/Q2_32.js';
import Q2q33 from './Chapter/Two/code/q/Q2_33.js';
import Q2q34 from './Chapter/Two/code/q/Q2_34.js';
import Q2q35 from './Chapter/Two/code/q/Q2_35.js';
import Q2q36 from './Chapter/Two/code/q/Q2_36.js';
import Q2q37 from './Chapter/Two/code/q/Q2_37.js';
import Q2q38 from './Chapter/Two/code/q/Q2_38.js';
import Q2q39 from './Chapter/Two/code/q/Q2_39.js';
import Q2q40 from './Chapter/Two/code/q/Q2_40.js';
import Q2q41 from './Chapter/Two/code/q/Q2_41.js';
import Q2q42 from './Chapter/Two/code/q/Q2_42.js';
import Q2q43 from './Chapter/Two/code/q/Q2_43.js';
import Q2q44 from './Chapter/Two/code/q/Q2_44.js';
import Q2q45 from './Chapter/Two/code/q/Q2_45.js';
import Q2q46 from './Chapter/Two/code/q/Q2_46.js';
import Q2q47 from './Chapter/Two/code/q/Q2_47.js';
import Q2q48 from './Chapter/Two/code/q/Q2_48.js';
import Q2q49 from './Chapter/Two/code/q/Q2_49.js';
import Q2q50 from './Chapter/Two/code/q/Q2_50.js';
import Q2q51 from './Chapter/Two/code/q/Q2_51.js';
import Q2q52 from './Chapter/Two/code/q/Q2_52.js';
import Q2q53 from './Chapter/Two/code/q/Q2_53.js';

import Q3q1 from './Chapter/Three/code/q/Q3_1.js';
import Q3q2 from './Chapter/Three/code/q/Q3_2.js';
import Q3q3 from './Chapter/Three/code/q/Q3_3.js';
import Q3q4 from './Chapter/Three/code/q/Q3_4.js';
import Q3q5 from './Chapter/Three/code/q/Q3_5.js';
import Q3q6 from './Chapter/Three/code/q/Q3_6.js';
import Q3q7 from './Chapter/Three/code/q/Q3_7.js';
import Q3q8 from './Chapter/Three/code/q/Q3_8.js';
import Q3q9 from './Chapter/Three/code/q/Q3_9.js';
import Q3q10 from './Chapter/Three/code/q/Q3_10.js';
import Q3q11 from './Chapter/Three/code/q/Q3_11.js';
import Q3q12 from './Chapter/Three/code/q/Q3_12.js';
import Q3q13 from './Chapter/Three/code/q/Q3_13.js';
import Q3q14 from './Chapter/Three/code/q/Q3_14.js';
import Q3q15 from './Chapter/Three/code/q/Q3_15.js';
import Q3q16 from './Chapter/Three/code/q/Q3_16.js';
import Q3q17 from './Chapter/Three/code/q/Q3_17.js';
import Q3q18 from './Chapter/Three/code/q/Q3_18.js';
import Q3q19 from './Chapter/Three/code/q/Q3_19.js';
import Q3q20 from './Chapter/Three/code/q/Q3_20.js';
import Q3q21 from './Chapter/Three/code/q/Q3_21.js';
import Q3q22 from './Chapter/Three/code/q/Q3_22.js';
import Q3q23 from './Chapter/Three/code/q/Q3_23.js';
import Q3q24 from './Chapter/Three/code/q/Q3_24.js';
import Q3q25 from './Chapter/Three/code/q/Q3_25.js';
import Q3q26 from './Chapter/Three/code/q/Q3_26.js';
import Q3q27 from './Chapter/Three/code/q/Q3_27.js';
import Q3q28 from './Chapter/Three/code/q/Q3_28.js';
import Q3q29 from './Chapter/Three/code/q/Q3_29.js';
import Q3q30 from './Chapter/Three/code/q/Q3_30.js';
import Q3q31 from './Chapter/Three/code/q/Q3_31.js';
import Q3q32 from './Chapter/Three/code/q/Q3_32.js';
import Q3q33 from './Chapter/Three/code/q/Q3_33.js';
import Q3q34 from './Chapter/Three/code/q/Q3_34.js';
import Q3q35 from './Chapter/Three/code/q/Q3_35.js';
import Q3q36 from './Chapter/Three/code/q/Q3_36.js';
import Q3q37 from './Chapter/Three/code/q/Q3_37.js';
import Q3q38 from './Chapter/Three/code/q/Q3_38.js';
import Q3q39 from './Chapter/Three/code/q/Q3_39.js';
import Q3q40 from './Chapter/Three/code/q/Q3_40.js';

import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId);

const history = createBrowserHistory();
history.listen((response) => {
  console.log(response.location.pathname);
  ReactGA.set({ page: response.location.pathname });
  ReactGA.pageview(response.location.pathname);
});

function App() {
  return (
    <BrowserRouter basename="/Math-Answer">
      <Nav /> 
      <hr />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} component={() => <redirect to='/home' />}/>
        <Route path="from" element={<From />}/>
        <Route path="ad" element={<Ad />}/>
        <Route path="AllNav" element={<AllNav />}/>
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
          <Route path="2">
            <Route path="h" element={<Twoq />} />
            <Route path="1" element={<Q2q1 />} />
            <Route path="2" element={<Q2q2 />} />
            <Route path="3" element={<Q2q3 />} />
            <Route path="4" element={<Q2q4 />} />
            <Route path="5" element={<Q2q5 />} />
            <Route path="6" element={<Q2q6 />} />
            <Route path="7" element={<Q2q7 />} />
            <Route path="8" element={<Q2q8 />} />
            <Route path="9" element={<Q2q9 />} />
            <Route path="10" element={<Q2q10 />} />
            <Route path="11" element={<Q2q11 />} />
            <Route path="12" element={<Q2q12 />} />
            <Route path="13" element={<Q2q13 />} />
            <Route path="14" element={<Q2q14 />} />
            <Route path="15" element={<Q2q15 />} />
            <Route path="16" element={<Q2q16 />} />
            <Route path="17" element={<Q2q17 />} />
            <Route path="18" element={<Q2q18 />} />
            <Route path="19" element={<Q2q19 />} />
            <Route path="20" element={<Q2q20 />} />
            <Route path="21" element={<Q2q21 />} />
            <Route path="22" element={<Q2q22 />} />
            <Route path="23" element={<Q2q23 />} />
            <Route path="24" element={<Q2q24 />} />
            <Route path="25" element={<Q2q25 />} />
            <Route path="26" element={<Q2q26 />} />
            <Route path="27" element={<Q2q27 />} />
            <Route path="28" element={<Q2q28 />} />
            <Route path="29" element={<Q2q29 />} />
            <Route path="30" element={<Q2q30 />} />
            <Route path="31" element={<Q2q31 />} />
            <Route path="32" element={<Q2q32 />} />
            <Route path="33" element={<Q2q33 />} />
            <Route path="34" element={<Q2q34 />} />
            <Route path="35" element={<Q2q35 />} />
            <Route path="36" element={<Q2q36 />} />
            <Route path="37" element={<Q2q37 />} />
            <Route path="38" element={<Q2q38 />} />
            <Route path="39" element={<Q2q39 />} />
            <Route path="40" element={<Q2q40 />} />
            <Route path="41" element={<Q2q41 />} />
            <Route path="42" element={<Q2q42 />} />
            <Route path="43" element={<Q2q43 />} />
            <Route path="44" element={<Q2q44 />} />
            <Route path="45" element={<Q2q45 />} />
            <Route path="46" element={<Q2q46 />} />
            <Route path="47" element={<Q2q47 />} />
            <Route path="48" element={<Q2q48 />} />
            <Route path="49" element={<Q2q49 />} />
            <Route path="50" element={<Q2q50 />} />
            <Route path="51" element={<Q2q51 />} />
            <Route path="52" element={<Q2q52 />} />
            <Route path="53" element={<Q2q53 />} />
          </Route> 
          <Route path="3">
            <Route path="h" element={<Thrq />} />
            <Route path="1" element={<Q3q1 />} />
            <Route path="2" element={<Q3q2 />} />
            <Route path="3" element={<Q3q3 />} />
            <Route path="4" element={<Q3q4 />} />
            <Route path="5" element={<Q3q5 />} />
            <Route path="6" element={<Q3q6 />} />
            <Route path="7" element={<Q3q7 />} />
            <Route path="8" element={<Q3q8 />} />
            <Route path="9" element={<Q3q9 />} />
            <Route path="10" element={<Q3q10 />} />
            <Route path="11" element={<Q3q11 />} />
            <Route path="12" element={<Q3q12 />} />
            <Route path="13" element={<Q3q13 />} />
            <Route path="14" element={<Q3q14 />} />
            <Route path="15" element={<Q3q15 />} />
            <Route path="16" element={<Q3q16 />} />
            <Route path="17" element={<Q3q17 />} />
            <Route path="18" element={<Q3q18 />} />
            <Route path="19" element={<Q3q19 />} />
            <Route path="20" element={<Q3q20 />} />
            <Route path="21" element={<Q3q21 />} />
            <Route path="22" element={<Q3q22 />} />
            <Route path="23" element={<Q3q23 />} />
            <Route path="24" element={<Q3q24 />} />
            <Route path="25" element={<Q3q25 />} />
            <Route path="26" element={<Q3q26 />} />
            <Route path="27" element={<Q3q27 />} />
            <Route path="28" element={<Q3q28 />} />
            <Route path="29" element={<Q3q29 />} />
            <Route path="30" element={<Q3q30 />} />
            <Route path="31" element={<Q3q31 />} />
            <Route path="32" element={<Q3q32 />} />
            <Route path="33" element={<Q3q33 />} />
            <Route path="34" element={<Q3q34 />} />
            <Route path="35" element={<Q3q35 />} />
            <Route path="36" element={<Q3q36 />} />
            <Route path="37" element={<Q3q37 />} />
            <Route path="38" element={<Q3q38 />} />
            <Route path="39" element={<Q3q39 />} />
            <Route path="40" element={<Q3q40 />} />
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
          <Route path="2">
            <Route path="h" element={<Twos />} />
            <Route path="1" element={<S2s1 />} />
            <Route path="2" element={<S2s2 />} />
            <Route path="3" element={<S2s3 />} />
            <Route path="4" element={<S2s4 />} />
            <Route path="5" element={<S2s5 />} />
            <Route path="6" element={<S2s6 />} />
            <Route path="7" element={<S2s7 />} />
            <Route path="8" element={<S2s8 />} />
            <Route path="9" element={<S2s9 />} />
            <Route path="10" element={<S2s10 />} />
            <Route path="11" element={<S2s11 />} />
            <Route path="12" element={<S2s12 />} />
            <Route path="13" element={<S2s13 />} />
            <Route path="14" element={<S2s14 />} />
            <Route path="15" element={<S2s15 />} />
            <Route path="16" element={<S2s16 />} />
            <Route path="17" element={<S2s17 />} />
            <Route path="18" element={<S2s18 />} />
            <Route path="19" element={<S2s19 />} />
            <Route path="20" element={<S2s20 />} />
            <Route path="21" element={<S2s21 />} />
            <Route path="22" element={<S2s22 />} />
            <Route path="23" element={<S2s23 />} />
            <Route path="24" element={<S2s24 />} />
            <Route path="25" element={<S2s25 />} />
            <Route path="26" element={<S2s26 />} />
            <Route path="27" element={<S2s27 />} />
            <Route path="28" element={<S2s28 />} />
            <Route path="29" element={<S2s29 />} />
            <Route path="30" element={<S2s30 />} />
            <Route path="31" element={<S2s31 />} />
            <Route path="32" element={<S2s32 />} />
            <Route path="33" element={<S2s33 />} />
            <Route path="34" element={<S2s34 />} />
            <Route path="35" element={<S2s35 />} />
            <Route path="36" element={<S2s36 />} />
            <Route path="37" element={<S2s37 />} />
            <Route path="38" element={<S2s38 />} />
            <Route path="39" element={<S2s39 />} />
            <Route path="40" element={<S2s40 />} />
            <Route path="41" element={<S2s41 />} />
            <Route path="42" element={<S2s42 />} />
            <Route path="43" element={<S2s43 />} />
            <Route path="44" element={<S2s44 />} />
            <Route path="45" element={<S2s45 />} />
            <Route path="46" element={<S2s46 />} />
            <Route path="47" element={<S2s47 />} />
            <Route path="48" element={<S2s48 />} />
            <Route path="49" element={<S2s49 />} />
            <Route path="50" element={<S2s50 />} />
            <Route path="51" element={<S2s51 />} />
            <Route path="52" element={<S2s52 />} />
            <Route path="53" element={<S2s53 />} />
          </Route> 
          <Route path="3">
            <Route path="h" element={<Thrs />} />
            <Route path="1" element={<S3s1 />} />
            <Route path="2" element={<S3s2 />} />
            <Route path="3" element={<S3s3 />} />
            <Route path="4" element={<S3s4 />} />
            <Route path="5" element={<S3s5 />} />
            <Route path="6" element={<S3s6 />} />
            <Route path="7" element={<S3s7 />} />
            <Route path="8" element={<S3s8 />} />
            <Route path="9" element={<S3s9 />} />
            <Route path="10" element={<S3s10 />} />
            <Route path="11" element={<S3s11 />} />
            <Route path="12" element={<S3s12 />} />
            <Route path="13" element={<S3s13 />} />
            <Route path="14" element={<S3s14 />} />
            <Route path="15" element={<S3s15 />} />
            <Route path="16" element={<S3s16 />} />
            <Route path="17" element={<S3s17 />} />
            <Route path="18" element={<S3s18 />} />
            <Route path="19" element={<S3s19 />} />
            <Route path="20" element={<S3s20 />} />
            <Route path="21" element={<S3s21 />} />
            <Route path="22" element={<S3s22 />} />
            <Route path="23" element={<S3s23 />} />
            <Route path="24" element={<S3s24 />} />
            <Route path="25" element={<S3s25 />} />
            <Route path="26" element={<S3s26 />} />
            <Route path="27" element={<S3s27 />} />
            <Route path="28" element={<S3s28 />} />
            <Route path="29" element={<S3s29 />} />
            <Route path="30" element={<S3s30 />} />
            <Route path="31" element={<S3s31 />} />
            <Route path="32" element={<S3s32 />} />
            <Route path="33" element={<S3s33 />} />
            <Route path="34" element={<S3s34 />} />
            <Route path="35" element={<S3s35 />} />
            <Route path="36" element={<S3s36 />} />
            <Route path="37" element={<S3s37 />} />
            <Route path="38" element={<S3s38 />} />
            <Route path="39" element={<S3s39 />} />
            <Route path="40" element={<S3s40 />} />
          </Route>
        </Route>  
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
