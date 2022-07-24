import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TourList from './components/TourList';
import About from './components/About';
import Header from './components/Header';
import Mode from './components/Mode';
import {useState} from 'react';

function App() {
	const [mode, setMode] = useState({current: "day"})
  return (
		<BrowserRouter>
			<Header/>
            <Routes>
							<Route path="/" element={<TourList/>} />
          		<Route path="/about" element={<About />} />
							<Route path='/profile' element={<Mode mode={mode} changeMode={setMode}/>}/>
            </Routes>
		</BrowserRouter>
		)
}

export default App;
