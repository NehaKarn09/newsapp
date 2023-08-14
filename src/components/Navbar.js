import React from 'react'

export default function Navbar() {

 return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsFusion</a>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" href"/about">About</a>
        </li> */}
        <li className="nav-item"><a className="nav-link active" href="/business" >Business</a></li>
        <li className="nav-item"><a className="nav-link active" href="/entertainment" >Entertainment</a></li>
        <li className="nav-item"><a className="nav-link active" href="/general" >General</a></li>
        <li className="nav-item"><a className="nav-link active" href="/science" >Science</a></li>
        <li className="nav-item"><a className="nav-link active" href="/sports" >Sports</a></li>
        <li className="nav-item"><a className="nav-link active" href="/health" >Health</a></li>
        <li className="nav-item"><a className="nav-link active" href="/technology">Technology</a></li>

      </ul> 

    </div>
  </div>
</nav>
      </div>
    )
  
}

