import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="social">
            <ul>
            <li>
  <a href="https://www.instagram.com/">
    <i className="i fa-brands fa-instagram"></i>
  </a>
</li>
                <li><a href="https://www.youtube.com/"><i class="y fa-brands fa-youtube"></i></a></li>
                <li><a href="https://twitter.com/"><i class="t fa-brands fa-twitter"></i></a></li>
                <li><a href="https://web.telegram.org/ "><i class="te fa-brands fa-telegram"></i></a></li>
            </ul>
        </div>
        <div className="ex">
            <ul>
                <li>Get The IMDb App<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
                <li>Help<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
                <li>Site Index<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
                <li>IMDbPro<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
                <li>Box Office Mojo<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
                <li>IMDb Developer<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
            </ul>
        </div>

        <div className="ex">
            <ul>
               <li>Press Room</li>
               <li>Advertizing<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
               <li>Jobs<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
               <li>Conditions of Use</li>
               <li>Privacy Policy</li>
               <li>Your Ads Privacy Choices</li>
            </ul>
        </div>

        <div className="ex">
            <ul>
               <li>An<i class="fa-brands fa-amazon"></i>Company</li>
            </ul>
        </div>

        <div className="ex1">
            <ul>
               <li>&#x40; 1990-2023 by IMDb.com, Inc.</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
