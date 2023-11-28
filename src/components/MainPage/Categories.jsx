import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cintre.png",
      cateName: "Mode",
    },
    {
      cateImg: "./images/category/facture-dachat.png",
      cateName: "Électronique",
    },
    {
      cateImg: "./images/category/auto.png",
      cateName: "Voitures",
    },
    {
      cateImg: "./images/category/maison.png",
      cateName: "Maison et jardin",
    },
    {
      cateImg: "./images/category/cadeau-de-supermarche.png",
      cateName: "Cadeaux",
    },
    {
      cateImg: "./images/category/lecteur-de-musique.png",
      cateName: "Musique",
    },
    {
      cateImg: "./images/category/produits-de-beaute.png",
      cateName: "Santé et Beauté",
    },
    {
      cateImg: "./images/category/animaux-domestiques.png",
      cateName: "Animaux",
    },
    {
      cateImg: "./images/category/jouets-pour-enfants.png",
      cateName: "Jouets pour Bébés",
    },
    {
      cateImg: "./images/category/.png",
      cateName: "Courses",
    },
    {
      cateImg: "./images/category/pile-de-livres-de-trois.png",
      cateName: "Livres",
    },
  ]

  return (
    <>
      <div className='Category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
