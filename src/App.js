// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';
import LoadingBar from 'react-top-loading-bar'



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default function App () { 
  const pageSize=5;
  const apiKey =process.env.REACT_APP_NEWS_API;
  
  const [progress,setProgress] = useState(0)
  
  

  
    return(
      <div>
        <Router>

        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />

        <Routes>
          <Route exact path="/" key="general" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="general" country="in" />}></Route>
          <Route exact path="/business" key="business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="business" country="in" />}></Route>
          <Route exact path="/entertainment" key="entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="entertainment" country="in" />}></Route>
          <Route exact path="/general" key="general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="general" country="in" />}></Route>
          <Route exact path="/science" key="science" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="science" country="in" />}></Route>
          <Route exact path="/sports" key="sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="sports" country="in"  />}></Route>
          <Route exact path="/health" key="health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="health" country="in" />}></Route>
          <Route exact path="/technology" key="technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="technology" country="in" />}></Route>
          
        

        </Routes>

        </Router>
      </div>
    )
  
}
