import React from 'react'
import "../App.css"

const Footer = () => {
  return (
    <>
     <footer>
        <h1>Image carousel</h1>
        <p>Made with ❤️ by Woody</p>
        <div className="linkCont">
        <div className="link1">
            <a href="#"><i class="fa-brands fa-discord"></i></a>
        </div>
        <div className="link2">
            <a href="#" target='blank'><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div className="link3">
            <a href="https://github.com/AdityaKMishra01" target='blank'><i class="fa-brands fa-github"></i></a>
        </div>
     </div>
      </footer>
    </>
  )
}

export default Footer