import React from 'react'
import './navbar.scss'
import DateTime from './DateTime'

function Navbar() {
 
  return (
    <nav>
        <div className="nav-icons">
            <div className="left">
                <div className="apple">
                    <img src="/public/Nacbar-icon/apple.svg"  />
                </div>
                <div className="name">
                    <p>Sumit Kumar</p>
                </div>
                <div className="file">
                    <p>File</p>
                </div>
                <div className="Window">
                    <p>Window</p>
                </div>
                <div className="terminal">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="wifi">
                    <img src="/public/Nacbar-icon/wifi.svg" />
                </div>
                <div className="date">
                    <DateTime/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
