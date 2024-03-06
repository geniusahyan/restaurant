import React from 'react'
import { Instagram, LinkedIn, Tag, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer> 
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <Tag className='' />
          <p>Restaurant Ahyan <br/>Providing food by 2028</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href='https://twitter.com/Aslam_Alam_07' target='_blank' >
              <Twitter />
            </a>
            <a href='https://www.linkedin.com/in/aslam-alam-305193286/' target='_blank' >
              <LinkedIn />
            </a>
            <a href='https://www.instagram.com/_a._h.ya.n' target='_blank' >
              <Instagram />
            </a>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer