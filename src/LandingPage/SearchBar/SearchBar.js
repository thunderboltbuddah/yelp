import React, { useState } from 'react'
import styles from './SearchBar.module.css'
function SearchBar(props) {
  const [term,setterm]=useState(props.term || " ")
  const [location,setlocation]=useState(props.location || " ")
  return (
    <div>

<div class="field has-addons">
  
  <p class="control">
    <a className="button is-static is-medium">
      Search
    </a>
  </p>
  <p class="control">
    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Burgers,Barbers,Spas"/>
  </p>
  
  <p class="control">
    <a className="button is-static is-medium">
      NEAR
    </a>
  </p>
  <p class="control">
    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Where"/>
  </p>
  
  <div className={`button is-medium ${styles['search-button']}`}>
    <span className={`icon is-small ${styles['search-icon']}`}>
    <i className="fa fa-search"></i>
     </span>
  </div>

    </div>
    </div>
  )
}

export default SearchBar