// import React, { useEffect, useState } from 'react';
// import GuestCards from './GuestCards';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Loader from './Loader'
// import './Category.css'
// import { AppRoute } from './App'



// export default function Category() {
//   const [categories, setCategory] = useState([]);
//   const [loader, setLoader] = useState(true);


  
//   useEffect(() => {
//       const fetchCategories = async () => {
//           try {
//               const response = await axios.get(`http://localhost:1234/api/all-categories`);
              
//               console.log(response.data); // Log the response data
//               setCategory(response.data.categories);
//               setLoader(false);
//           } catch (error) {
//               console.log(error);
//           }
//       };

//       fetchCategories();
//   }, []);

//   return (
//     <div className="container my-5">
//     <div className="text-center my-3 py-3">
//       <h2>Category</h2>
//     </div>
//     {loader ? (
//       <Loader />
//     ) : (
//       <div className='category'>
//         {categories.map((val, key) => (
//           <Link className='text-decoration-none' to={`/product/category/${val.CategoryName}`} key={key}>
//             <GuestCards   image={val.CategoryImage} name={val.CategoryName.replace('-', ' ')} />
//           </Link>
//         ))}
//       </div>
//     )}
//   </div>
//   );
// }












import React, { useEffect, useState } from 'react';
import GuestCards from './GuestCards';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import './Category.css';
import { AppRoute } from './App';

export default function Category() {
  const [categories, setCategory] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:1234/api/all-categories`);
        console.log(response.data); // Log the response data
        setCategory(response.data.categories);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const cardsPerRow = 4; // Number of cards to show per row

  return (
    <div className="container w-100 overflow-hidden">
      <div className="text-center mt-5 mb-5">
        <h2 className='categoryheading'>Category</h2>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className="category d-flex justify-content-center">
          {Array.from({ length: Math.ceil(categories.length / cardsPerRow) }).map((_, rowIndex) => (
            <div className="row mb-3" key={rowIndex}>
              {categories.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow).map((val, key) => (
                <div className="col-lg-3" key={key}>
                  <Link className='text-decoration-none' to={`/product/category/${val.CategoryName}`} key={key}>
                    <GuestCards image={val.CategoryImage} name={val.CategoryName.replace('-', ' ')} />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


















