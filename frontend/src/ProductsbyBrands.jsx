// import React, { useEffect, useState } from 'react'
// import GuestCards from './GuestCards'
// import axios from 'axios'
// import { AppRoute } from './App'
// import { useParams } from 'react-router-dom';
// import './Category.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import { Link } from 'react-router-dom';
// import Loader from './Loader'


// export default function ProductsByBrands() {
//     useEffect(()=> {
//         AOS.init({duration:2000});
//       },[]);
//     const [Products, setProducts] = useState([]);
//     const { brand } = useParams();
//     const [loader, setLoader] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {          
//              const response = await  axios.get(`http://localhost:1234/api/productsbybrand/${brand}`)
//                 setProducts(response.data.Products);
//                 setLoader(false);
//             } catch (error) {
//                 console.log(error);
//             }
//         };


//         fetchProducts();
//     }, []);
//     return (
//     <>
//         <div className="container my-5">
//         <div className="text-center" data-aos="fade-up-left">
//             <h2>
//             { brand.replace('-', ' ') }
//             </h2>
//         </div>
//         {loader ? (
//             <Loader />
//         ) : (  
//             <div className='row'>                                                                                                                                                                 
//             <div className="category" data-aos="fade-up"> 
//                 {Products.map((val, key) => (
//                      <Link className='text-decoration-none'  to={`/product/${val.id}`} key={key}>                                                                                                                                                                                          
//                     <GuestCards
//                         key={key}                                                                                         
//                         image={val.thumbnail}
//                         name={val.title.replace('-', ' ')}
//                     />
//                   </Link>
//                 ))}
//             </div>
//             </div>
//         )}
        
//     </div>
          


//     </>
// )
//                 }















import React, { useEffect, useState } from 'react';
import GuestCards from './GuestCards';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';
import './Category.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProductsByBrands() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [Products, setProducts] = useState([]);
  const { brand } = useParams();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:1234/api/productsbybrand/${brand}`);
        setProducts(response.data.Products);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const cardsPerRow = 2; // Number of cards to show per row
  const numRows = Math.ceil(Products.length / cardsPerRow);

  return (
    <>
      <div className="container my-5">
        <div className="text-center" data-aos="fade-up-left">
          <h2>{brand.replace('-', ' ')}</h2>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <div className="row d-flex p-5 justify-content-center">
            {Array.from({ length: numRows }).map((_, rowIndex) => (
              <div className="category col-lg-6 p-5" key={rowIndex} data-aos="fade-up">
                {Products.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow).map((val, key) => (
                  <Link className='text-decoration-none' to={`/product/${val.id}`} key={key}>
                    <GuestCards key={key} image={val.thumbnail} name={val.title.replace('-', ' ')} />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
