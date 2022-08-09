import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <section class="footer">
        <div class="container">
          <div class="footer-wrapper flex-between">
            <div class="copyright-wrapper">
               &#169; 2022 CGF - Human Right Due Diligence (HRDD) Dashboard System
            </div>
            <div className='version-txt'>Version 1.0</div>
          </div>

        </div>
      </section>
    </footer>
  )
}

export default Footer