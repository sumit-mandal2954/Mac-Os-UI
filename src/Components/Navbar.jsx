import React from 'react'
import './navbar.scss'
import DateTime from './DateTime'
import appleSvg from '../../../public/Nacbar-icon/apple.svg'
import wifiSvg from '../../public/Nacbar-icon/wifi.svg'

function Navbar() {
 
  return (
    <nav>
        <div className="nav-icons">
            <div className="left">
                <div className="apple">
                    <img src={appleSvg}  />
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
                    <img src={wifiSvg} />
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
