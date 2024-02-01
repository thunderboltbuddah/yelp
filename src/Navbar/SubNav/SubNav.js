import React from 'react'
import SubNavItem from './SubNavItem/SubNavItem'
import styles from './SubNav.module.css'

function SubNav() {
  return (
    <div className={styles['container']}>
        
    <div className={styles['sub-nav']}>
        <div>
        <SubNavItem label="Restaurant" icon='fa-utensils'/>
      <SubNavItem label="Home Services" icon='fa-home'/>
      <SubNavItem label="Auto Services" icon='fa-car-side'/>
      
        <SubNavItem label="More" icon='fa-info-circle'/>
      
        </div>
      
      <div>
      <button className="button is-radiusless">
    <span className="icon is-small">
      <i className="fas fa-pen"></i>
    </span>
    <span>Write a Review</span>
  </button>
  <button className="button is-radiusless">
    <span className="icon is-small">
      <i className="fas fa-hotel"></i>
    </span>
    <span>For Businesses</span>
  </button>
      </div>
        
    </div>
    
    </div>
  )
}

export default SubNav