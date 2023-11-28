import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>SOUTRALI DEALS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Qui sommes-nous</h2>
            <ul>
              <li>Carrières</li>
              <li>Nos magasins</li>
              <li>Nos soins</li>
              <li>Termes et Conditions</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Service à la clientèle</h2>
            <ul>
              <li>Centre d’aide </li>
              <li>Comment acheter </li>
              <li>Suivre votre commande </li>
              <li>Achats corporatifs et en gros </li>
              <li>Retours et Remboursements </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>Cocody Angre commissariat 22 eme, Abidjan, AB 20012, cote d ivoire </li>
              <li>Email: jordymelyer15@gmail.com</li>
              <li>Phone: +225 0748001042</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
