import React from 'react'
import Macwindow from './windows/Macwindow'
import './resume.scss'
const Resume = ({windowName, setwindowstate}) => {
  return (
    <Macwindow windowName={windowName} setwindowstate={setwindowstate}>
        <div className="resume">
            <embed src="/public/resume.pdf.pdf" frameborder="0"></embed>
        </div>
    </Macwindow>
  )
}

export default Resume
