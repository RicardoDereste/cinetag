import { useFavoriteContext } from 'context/Favorite'
import styles from './Card.module.css'
import iconFavorite from './favorite1.png'
import iconNotFavorite from './favorite2.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  const { favorite, addFavorite } = useFavoriteContext()
  const favorited = favorite.some((fav) => fav.id === id)
  const icon = !favorited ? iconFavorite : iconNotFavorite
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt='Favorite movie'
        className={styles.favorite}
        onClick={() => {
          addFavorite({ id, title, cover })
        }} />
    </div>
  )
}

export default Card