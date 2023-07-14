import React from 'react'
import styles from './error.module.scss'
const Error = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Sorry, there was some kind of mistake </h1>
        <br/>
        <p>Try again later</p>
    </div>
  )
}

export default Error;
