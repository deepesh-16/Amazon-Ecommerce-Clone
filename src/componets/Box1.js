import React from 'react';
import './Box1.css';
function Box1(props)
{
  return <div>
      <div className="main">
        <p className="card-title heading">{props.title}</p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card cardmain border-0">
      <img src={props.image1} className="card-img-top" alt="..." style={{"height":"7rem","width":"11rem"}}/>
      {/* <div className="card-body"> */}
        <p className="card-text">{props.stitle1}</p>
      {/* </div> */}
    </div>
  </div>
  <div className="col">
    <div className="card cardmain border-0">
      <img src={props.image2} className="card-img-top" alt="..." style={{"height":"7rem","width":"11rem"}}/>
      {/* <div className="card-body"> */}
        <p className="card-text">{props.stitle2}</p>
      {/* </div> */}
    </div>
  </div>
  <div className="col">
    <div className="card cardmain border-0">
      <img src={props.image3} className="card-img-top" alt="..." style={{"height":"7rem","width":"11rem"}}/>
      {/* <div className="card-body"> */}
        <p className="card-text">{props.stitle3}</p>
      {/* </div> */}
    </div>
  </div>
  <div className="col">
    <div className="card cardmain border-0">
      <img src={props.image4} className="card-img-top" alt="..." style={{"height":"7rem","width":"11rem"}}/>
      {/* <div className="card-body"> */}
        <p className="card-text">{props.stitle4}</p>
      {/* </div> */}
    </div>
  </div>
</div>
      </div>
  </div>;
}

export default Box1;
