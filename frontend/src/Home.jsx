import React from 'react'
import Brand from './Brands'
import Category from './Category'
import Header from './Header';
// import Carousel from 'react-bootstrap/Carousel';
// import Header from './Header';


export default function Home() {
  return (
    <>
       <Header />
            <Category />
            <Brand />

            <section className="dart-no-padding">
  <div className="container-fluid img-fluid">
    <div className="row no-gutter">
      <div className="col-lg-6 col-md-6">
        <a href="#">
          <img
            src="https://www.modestforever.com/pub/media/wysiwyg/Embroiderd_hijabs_first_banner_4.jpg"
            width={"100%"}
            className='img-fluid'
            alt="Promo"/>
 
        </a>
      </div>
      <div className="col-lg-6 col-md-6">
        <a href="#">
          <img
            src="https://hijabi.pk/cdn/shop/articles/Choose_an_abaya_style_that_best_suit_the_occasion.jpg?v=1662539611"
             width={"100%"}
             className='img-fluid'
            alt="Promo"/>
 
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
};



