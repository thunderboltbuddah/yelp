import React from 'react'
import logo from '../assets/logo.png'
import styles from './Navbar.module.css'
import SearchBar from '../LandingPage/SearchBar/SearchBar'
function Navbar() {
  return (
    <div className={styles['nav-bar']}>

      <img src={logo} alt="logo
      " className={styles.logo}>
      </img>
<SearchBar/>
<button className={`button ${styles['nav-button']}`}>
Sign In
</button>
<button className={`button ${styles['nav-button']}`}>
Register
</button>
    </div>
  )
}

export default Navbar