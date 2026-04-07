import React from 'react'
import { Rnd } from 'react-rnd'
import { motion } from 'framer-motion'
import './macwindow.scss'

const Macwindow = ({children,width='40vw', height="60vh",setwindowstate,windowName}) => {
  console.log(windowName)
  return (
    <Rnd default={{
      width: width,
      height: height,
      x:300,
      y:100
    }}>
      <motion.div className="window"
          initial={{ scale: 0.5, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
      >
        <div className="nav">
          <div className="dots">
            <div className="dot red" onClick={() => setwindowstate(prev => ({ ...prev, [windowName]: false }))}></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="text">
            <p>sumitmandal -zsh</p>
          </div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </motion.div>
    </Rnd>
  )
}

export default Macwindow
