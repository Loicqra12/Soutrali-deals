import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Livraison dans le monde entier",
      decs: "Avec une gamme de plus de 100 millions de produits, nous offrons des prix compétitifs pour répondre à tous vos besoins.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Paiement sécurisé",
      decs: "Nous sommes fiers d’offrir des prix compétitifs sur notre vaste sélection de plus de 100 millions de produits.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Magasinez en toute confiance",
      decs: "Explorez notre large gamme de plus de 100 millions de produits, tous proposés à des prix compétitifs.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: " Assistance 24h/24h et 7j/7j",
      decs: "Nous offrons des prix compétitifs sur nos plus de 100 millions de produits n’importe quelle gamme.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
