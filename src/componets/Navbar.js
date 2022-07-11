import React from 'react';
import './Navbar.css';
import 'react-bootstrap'
import Modal from '@material-ui/core/Modal';
import { useSelector } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarkedAlt, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
function Navbar() {
        let wishlist=useSelector(state=>state.wishlist)
        let shopcart=useSelector(state=>state.shopcart)
        let shopprice=useSelector(state=>state.shopprice)

        const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  
  return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <img className="navbar-brand img1" src='https://play-lh.googleusercontent.com/G7jAks-PRl4d7IkL-s3Ir44nGyPq0Yh872N5UMwZYIJz4wG1Oj0DqoQjsAR5ddKZbQ'></img>
      <FontAwesomeIcon icon={faMapMarkedAlt} className='add' size='2x'></FontAwesomeIcon>
        <div className="input-group mb-3 search" >
    <input type="text" className="form-control" placeholder="Search here..." aria-label="Recipient's username" aria-describedby="basic-addon2" style={{"height":"2.2rem"}}/>
    <span className="input-group-text bg-warning" id="basic-addon2" style={{"height":"2.2rem"}}><FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon></span>
    </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
            <FontAwesomeIcon icon={faUserCircle} size="1x" style={{"color":"whitesmoke","display":"inline"}}/>
          <a className="nav-link active" aria-current="page" href="#" style={{"fontSize":"1.1rem","display":"inline"}}>Account</a>
        </li>
        <li className="nav-item">
            <div>
          <a className="nav-link active" href="#"  style={{"display":"inline"}}><FontAwesomeIcon icon={faHeart} size="2x" style={{"color":"white"}}/></a>
          <h5 className="text-center text-light" style={{"display":"inline"}}>{wishlist.length}</h5></div>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  style={{"display":"inline"}} aria-disabled="true" onClick={handleOpen} ><FontAwesomeIcon icon={faShoppingCart} size="2x" style={{"color":"white"}} /></a>
          <h5 className="text-center text-light" style={{"display":"inline"}}>{shopcart.length}</h5>
          <Modal className=" mod" onClose={handleClose} open={open}>
        <div className='row row-col-3'>
        <h2 className='text-center'>Shopping Cart<FontAwesomeIcon icon={faShoppingCart} size='1x'></FontAwesomeIcon></h2>
        <hr/>
            <div className="col-10">{
            shopcart.map((item, index)=>(<p className='text-center' key={index}>{item}</p>))
             }
            </div>
            <div className="col">{
            shopprice.map((item, index)=>(<p className='text-center' key={index}>{item}<br></br></p>))
            }
            </div>
            <Button className='w-25 mx-auto btn-warning'>Checkout</Button>
        </div>
      </Modal>
          
        </li>
      </ul>
  </div>
</nav>
  </div>;
}

export default Navbar;
