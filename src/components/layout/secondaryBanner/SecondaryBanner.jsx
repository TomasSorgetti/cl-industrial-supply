import styles from './SecondaryBanner.module.css'
import React from 'react'

const SecondaryBanner = ({title, description, img}) => {

  return (
    <div className={styles.main_container} style={{ backgroundImage: `url(${img})` }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.divider}></div>  
    </div>
  )
}

export default SecondaryBanner


