import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ProductPage.css'
import { AppRoute } from './App'



export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
     
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:1234/api/productbyId/${id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);

    const addtocart = () => {
        Swal.fire({
            title: 'LogIn First!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        });
    };

    return (
        <>
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.thumbnail} alt="reload" className='img-fluid h-100' />
                </div>
                <div className="col-md-6 py-5">
                     <h2 className='HeadingtxtClr'>{product.title} - {product.price}$</h2>
                    <p className="text-secondary">{product.description}</p>
                    <div className="row my-5">
                        {product?.images?.map((val, key) => (
                            <div key={key} className='col-md-6 mt-3 h-100'>
                                <img src={val} className='hijabSampleImg' alt={`Image ${key}`} />
                            </div>
                        ))}
                    </div>

                    <div className='d-flex justify-content-evenly align-items-center py-3 rounded '>
                        <button className="btns" disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                        {quantity}
                        <button className="btns" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <div className='d-block d-flex justify-content-center mt-3'>
                        <button className="w-100 cartbtn" onClick={addtocart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        

</>
    );
}
