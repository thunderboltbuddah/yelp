import React from 'react'
import styles from './SearchSuggestion.module.css'
function SearchSuggestion() {
  return (
    <div
     className={styles.suggestions}
     >
<span className="icon is-small">
<i class="fa fa-utensils"></i>
    
</span>
     <span className={styles.suggestion}>
        Restaurant
     </span>
     
<span className="icon is-small">
    <i className="fas fa-cocktail"></i>
    
</span>
     <span className={styles.suggestion}>
       Nightlife
     </span>

     
<span className="icon is-small">
<i class="fas fa-concierge-bell"></i>
    
</span>
     <span className={styles.suggestion}>
       Services
     </span>
     
<span className="icon is-small">
<i class="fas fa-truck"></i>
    
</span>
     <span className={styles.suggestion}>
      Delivery Services
     </span>

     </div>
  )
}

export default SearchSuggestion