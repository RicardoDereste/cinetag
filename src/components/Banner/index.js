import styles from './Banner.module.css'

import React from 'react'

function Banner({image}) {
  return (
    <div className={styles.cover} style={{ backgroundImage: `url('/assets/img/banner-${image}.png')` }}></div>
  )
}

export default Banner