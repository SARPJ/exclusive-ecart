import React from 'react'
import './file.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function header() {
  return (
    <>
    <div className='UpperHeader' >
      <div className='headerdiv'>
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='/'>ShopNow</a></p>
      <span>English
        

           <FontAwesomeIcon icon={faAngleDown} />     
        
      </span>
      </div>
    </div>
    <div className='LowerHeader ' >
      <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid inner-head">
      <a className="navbar-brand logo" href="/">Exclusive</a>
    
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Signup</a>
            </li>
        </ul>
        <form className="d-flex ">

            <div class="input-group mb-3 search">
              <input type="search" class="form-control p-2" placeholder="What are you looking for?" aria-label="Search"/>
              <span class="input-group-text search-bar"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            </div>
        </form>
      </div>
      <div className='menu'>

      <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
    </nav>
    </div>
     
    
    </>
  )
}

export default header