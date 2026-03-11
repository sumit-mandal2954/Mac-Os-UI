import React from 'react'
 import './dock.scss'
const Doks = ({ setwindowstate }) => {
  return (
    <footer className='dock'>
         <div className=' icon cli' onClick={()=>{setwindowstate(prev => ({...prev, cli: true}))}}><img src="/public/docs-icons/cli.svg"/></div>
        <div className=' icon notes' onClick={()=>{setwindowstate(prev => ({...prev, note: true}))}}><img src="/public/docs-icons/note.svg"/></div>
        <div className=' icon spotify' onClick={()=>{setwindowstate(prev => ({...prev, spotify: true}))}}><img src="/public/docs-icons/spotify.svg"/></div>
        <div className=' icon calender' onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r?pli=1")}}><img src="/public/docs-icons/calender.svg"/></div>
        <div className=' icon link' onClick={()=>{
          window.open("https://www.linkedin.com/in/sumit-kumar-56197a246/")
        }}><img src="/public/docs-icons/link.svg"/></div>
        <div className=' icon mail' onClick={()=>{window.open("mailto:sumitmandal2954@gmail.com","_blank")}}><img src="/public/docs-icons/mail.svg"/></div>
        <div className=' icon pdf' onClick={()=>{setwindowstate(prev => ({...prev, resume: true}))}}><img src="/public/docs-icons/pdf.svg"/></div>
        <div className=' icon github' onClick={()=>{setwindowstate(prev => ({...prev, github: true}))}}><img src="/public/docs-icons/github.svg" loading="eager"/></div>
    </footer>
  )
}

export default Doks
