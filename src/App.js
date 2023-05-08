import {  Route, BrowserRouter, Routes  } from "react-router-dom";

import Home from './Home.js';

import One from './Chapter/One/One.js';

import './App.css';

import Nav from './components/nav.js'

import Q1_1 from './Chapter/One/code/q/Q1_1.js'

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
            <Route path="h" element={<One />} />
            <Route path="1" element={<Q1_1 />} />
            <Route path="2" element={<Q1_1 />} />
            <Route path="3" element={<Q1_1 />} />
            <Route path="4" element={<Q1_1 />} />
            <Route path="5" element={<One />} />
            <Route path="6" element={<One />} />
            <Route path="7" element={<One />} />
            <Route path="8" element={<One />} />
            <Route path="9" element={<One />} />
            <Route path="10" element={<One />} />
            <Route path="11" element={<One />} />
            <Route path="12" element={<One />} />
            <Route path="13" element={<One />} />
            <Route path="14" element={<One />} />
            <Route path="15" element={<One />} />
            <Route path="16" element={<One />} />
            <Route path="17" element={<One />} />
            <Route path="18" element={<One />} />
            <Route path="19" element={<One />} />
            <Route path="20" element={<One />} />
            <Route path="21" element={<One />} />
            <Route path="22" element={<One />} />
            <Route path="23" element={<One />} />
            <Route path="24" element={<One />} />
            <Route path="25" element={<One />} />
            <Route path="26" element={<One />} />
            <Route path="27" element={<One />} />
            <Route path="28" element={<One />} />
            <Route path="29" element={<One />} />
            <Route path="30" element={<One />} />
            <Route path="31" element={<One />} />
            <Route path="32" element={<One />} />
          </Route>
        </Route><Route path="question">
          <Route path="1" > 
            <Route path="h" element={<One />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
