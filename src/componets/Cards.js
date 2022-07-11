import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import './Cards.css'
function Cards() {
    const cat1={
        title:"Styles for Women | Up to 70% off",
        image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg",
        stitle1:"Women's Clothing",
        image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg",
        stitle2:"Footwear + Handbags",
        image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg",
        stitle3:"Watches",
        image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg",
        stitle4:"Fashion Jwellery",
    }
    const cat2={
        title:"Styles for Men | Up to 70% off",
        image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg",
        stitle1:"Clothing",
        image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg",
        stitle2:"Footwear",
        image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg",
        stitle3:"Watches",
        image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg",
        stitle4:"Bags and Luggage",
    }
    const cat3={
        title:"Upgrade your home | Amazon Brands",
        image1:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg",
        stitle1:"Smart LED Tv's",
        image2:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_186x116_186x116_in-en._SY116_CB663888095_.jpg",
        stitle2:"Appliances",
        image3:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg",
        stitle3:"Furniture",
        image4:"https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_186x116_186x116_in-en._SY116_CB663888093_.jpg",
        stitle4:"Kitchen Products",
    }
    const pro1={
        image:"https://m.media-amazon.com/images/I/61cCf94xIEL._AC_UY327_FMwebp_QL65_.jpg",
        title:"2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver",
        price:"1949$",
    }
    const pro2={
        image:"https://m.media-amazon.com/images/I/51EPd38RHQL._AC_UY327_FMwebp_QL65_.jpg",
        title:"Introducing Amazon Fire TV 43' 4-Series 4K UHD smart TV | Builtin Alexa | 2021 Version (Amazon Exclusive)",
        price:"299$",
    }
    const pro3={
        image:"https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
        title:"Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB,Adjustable Weights. ",
        price:"25$",
    }
  return <div>
        <div className='row row-col-md-3 row-col-sm-2 row-col-1' style={{"marginTop":"-16rem"}}>
       <div className='col'><Box1 {...cat1}/></div>
       <div className='col'><Box1 {...cat2}/></div>
       <div className='col'><Box2 {...pro1}/></div>
       </div>
       <div className='row row-col-3' style={{"marginTop":"24rem"}}>
       <div className='col'><Box2 {...pro2}/></div>
       <div className='col'><Box2 {...pro3}/></div>
       <div className='col'><Box1 {...cat3}/></div>
     </div>
  </div>;
}

export default Cards;
