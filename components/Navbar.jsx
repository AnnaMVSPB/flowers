const React = require('react');



function Navbar ({user}){
    return(
       <nav >
        <div className="green darken-3 ">
          <a href="/" className="brand-logo "><i className="material-icons">local_florist</i></a>
          <ul id="nav-mobile" className="">
      {user ?
      <div className='col s3'>
       <li><a href="/flowers">Flowers</a></li>
       <p className='logout'>logout</p>
       </div>
       :
       <li className='col s3'><a href="/auth/registration">Registration</a></li>
    }
           
           
          </ul>
        </div>
        </nav>
            
    )
}

module.exports = Navbar