import Banner from 'components/Banner'
import styles from './Favorite.module.css'

import React from 'react'
import Title from 'components/Title'
import Card from 'components/Card'
import { useFavoriteContext } from 'context/Favorite'

function Favorite() {
    const {favorite} = useFavoriteContext()
    return (
        <>
            <Banner image="favorite" />
            <Title>
                <h1>My Favorites</h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favorite