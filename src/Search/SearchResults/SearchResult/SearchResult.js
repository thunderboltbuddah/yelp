import React from 'react'
import styles from './SearchResult.module.css'
import BusinessRating from '../../../BusinessRating/BusinessRating'
function SearchResult() {
  return (
    <div className={styles['search-result']}>
<img src='https://placehold.co/400' className={styles['business-image']} alt='business image' />
<div className={styles['business-info']}>
    <h2 className="subtitle">
Burger Internation
    </h2>
    <BusinessRating/>
    <p>$ <span className='tag'>
        Burgers
        </span>  <span className='tag'>
        Burgers
        </span></p>
    </div>
    <div className={styles['contact-info']}>
 
<p>Address Data</p>
<p>Example Street</p>
<p>234234</p>
<div/>
        <div/>
    </div>
    </div>
  )
}

export default SearchResult