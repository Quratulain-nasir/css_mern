// import React, { useEffect, useState } from 'react'
// import GuestCards from './GuestCards'
// import axios from 'axios'
// import { AppRoute } from './App'
// import './Category.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import Loader from './Loader'

// export default function Products() {
//     useEffect(()=> {
//         AOS.init({duration:2000});
//       },[]);
//     const [Products, setProducts] = useState([]);
//     const [loader, setLoader] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:1234/api/getAllProducts`);
//                 setProducts(response.data.Products);
//                 setLoader(false);
//             } catch (error) {
//                 console.log(error);
//             }
//         };


//         fetchProducts();
//     }, []);
//     const { id} = Products;
//     return (
//     <>
//         <div className="container ">
//         <div className="text-center" data-aos="fade-up-left">
//             <h2>Products</h2>
//         </div>
//         {loader ? (
//             <Loader />
//         ) : (                                                                                                                                                                   
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
//         )}
//     </div>
//     </>
// )
//     }



















import React, { useEffect, useState } from 'react';
import GuestCards from './GuestCards';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import './Category.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [Products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:1234/api/getAllProducts`);
        setProducts(response.data.Products);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const productsInRows = chunkArray(Products, 3);

  return (
    <>
      <div className="container">
        <div className="text-center" data-aos="fade-up-left">
          <h2 className='productHeading'>Products</h2>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <div className='category' data-aos="fade-up">
            {productsInRows.map((row, rowIndex) => (
              <div className='row' key={rowIndex}>
                {row.map((product, key) => (
                  <div className='col-lg-4' key={key}>
                    <Link className='text-decoration-none' to={`/product/${product.id}`}>
                      <GuestCards
                        key={key}
                        image={product.thumbnail}
                        name={product.title.replace('-', ' ')}
                      />
                    </Link>
                  </div>
                ))}
                {rowIndex < productsInRows.length - 1 && <div className='col-lg-12 mt-2'></div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
