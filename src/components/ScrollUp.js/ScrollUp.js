import React from 'react'
import './ScrollUp.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollUP = document.querySelector(".scrollup")
        // when the scroll is highter then 460 viewport height, add the show-scroll class to a tag with the scroll-top class
        if(this.scrollY >= 460 ) scrollUP.classList.add("show-scroll")
        else scrollUP.classList.remove("show-scroll")
    })
  return (
   <a href="#home" className="scrollup">
    <i className="uil uil-arrow-up scrollup__icon"></i>
   </a>
  )
}

export default ScrollUp
