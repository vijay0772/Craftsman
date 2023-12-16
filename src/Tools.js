import React, { useEffect, useState } from 'react';
import "./style.css";
import { useCart } from './CartContext';
import {Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import UpdateForm from './UpdateForm';


function Tools() {
  const [productDetails, setProductDetails] = useState([]);
  const { addToCart } = useCart();
  const [usertype, setUserType] = useState('');
  const [notification, setNotification] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);


  useEffect(() => {
    let ut = sessionStorage.getItem('usertype');
    setUserType(ut);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () =>{
    fetch('http://localhost:8000/api/getProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ProductType: 'tool', 
      }),
    })
      .then((response) => response.json())
      // console.log(response)
      .then((data) => {
        console.log('data', data)
        setProductDetails(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  const handleWriteReview = (product) => {
    setSelectedProduct(product);
    setShowReviewForm(true);
  };

  const closeReviewForm = () => {
    setShowReviewForm(false);
  };

  const handleBuyNow = (product) => {
    addToCart({ ...product, quantity: 1 });
    setNotification(`"${product.productName}" added to cart!`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleDelete = async ({...product}) =>{
    try{
      let prd = {...product}
      let productName = prd.productName;
      console.log(productName)
      const response = fetch('http://localhost:8000/api/deleteProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productName
      }),
      
    }).then(getProducts());
    
    if (!response.ok) {
      // const errorMessage = await response.text();
      throw new Error('error');
    }

    setProductDetails((prevProducts) =>
      prevProducts.filter((p) => p.productName !== productName)
    );

  }catch(error){
    console.error('Error logging user:', error.message);
  }
  }

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdateForm(true);
  };
  // const handleUpdate = async ({...product}) =>{
  //   setSelectedProduct(product);
  //   setShowUpdateForm(true);
  //   try{
  //     let prd = {...product}
  //     let productName = prd.productName;
  //     console.log(productName)
  //     const response = fetch('http://localhost:8000/api/updateProduct', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       productName
  //     }),
      
  //   }).then(getProducts());
    
  //   if (!response.ok) {
  //     // const errorMessage = await response.text();
  //     throw new Error('error');
  //   }

  //   setProductDetails((prevProducts) =>
  //     prevProducts.filter((p) => p.productName !== productName)
  //   );

  // }catch(error){
  //   console.error('Error logging user:', error.message);
  // }
  // }


  // const handleUpdate = (product) => {
  //   setSelectedProduct(product);
  //   setShowUpdateForm(true);
    
  // };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  };
  const containerStyle = {
    paddingTop: '180px',
  };
  
  const cardStyle = {
    maxWidth: '300px',
    margin: '0 10px 20px 10px',
    backgroundColor: '#f5f5f5', // Gray background color
    borderRadius: '8px', // Optional: Add border-radius for rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  };

  return (
    
    <div  style={containerStyle} className='bg-white mt-6'>
        <div className="flex justify-center items-center flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-gray-900 text-center hover:text-red-500 transition duration-300 ease-in-out">
          Tools
        </h1>
        <hr></hr>
      </div>
    </div>
      <div className="text-gray-600 body-font">
        <ul className="flex flex-wrap justify-center">
          {productDetails.map((product, index) => (
            <div key={index} style={cardStyle} className="p-4 md:w-1/1 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Link to={`/viewProduct/${product.productName}`}>
                  <img
                    src={`./images/${product.productImage}`}
                    alt="Product Image"
                    className="object-scale-down h-full w-full"
                    onError={() => console.log(`Error loading image for ${product.productName}`)}
                  />
                </Link>
              </div>
              <h2 className="text-2xl font-medium title-font text-gray-900 mt-3">{product.productName}</h2>
              <h4 className="text-lg font-medium title-font text-gray-900 mt-1">Price: ${product.productPrice}</h4>
              <h4 className="text-lg font-medium title-font text-gray-900 mt-1">Discount: ${product.productDiscount}</h4>
              <p className="text-md leading-relaxed mt-2  font-medium">{product.productDescription}</p>
              <Link to={`/viewProduct/${product.productName}`}>
                <a className="text-indigo-500 inline-flex items-center mt-3">More Info
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
             <div style={buttonContainerStyle} className="flex justify-between mt-6">
  <div className="flex">
    <button
      className="text-white text-lg font-medium title-font bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-700 rounded-full shadow-md transition duration-300 ease-in-out"
      onClick={() => handleBuyNow(product)}
    >
      Add to Cart
    </button>
    <Link to={`/ReviewForm/${product.productName}`}>
      <button
        className="text-white text-lg font-medium title-font bg-purple-500 border-0 py-3 px-6 focus:outline-none hover:bg-purple-700 rounded-full shadow-md transition duration-300 ease-in-out ml-4"
        onClick={() => handleWriteReview(product)}
      >
        Write Review
      </button>
    </Link>
  </div>
  <br></br>
  {usertype === 'manager' && (
    <div className="flex">
      <button
        className="text-white text-lg font-medium title-font bg-red-500 border-0 py-3 px-6 focus:outline-none hover:bg-red-700 rounded-full shadow-md transition duration-300 ease-in-out"
        onClick={() => handleDelete(product)}
      >
        Delete
      </button>
      <Link to={`/updateProduct/${product.productName}`}>
        <button
          className="btn-update text-lg font-medium title-font bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-700 rounded-full shadow-md transition duration-300 ease-in-out ml-4"
          onClick={() => handleUpdate(product)}
        >
          Update
        </button>
      </Link>
    </div>
  )}
</div>


            </div>
          ))}
        </ul>

        {notification && (
          <div className="notification-container">
            <div className="notification">
              <p>{notification}</p>
            </div>
          </div>
        )}

        {showReviewForm && (
          <ReviewForm
            productModelName={selectedProduct.productName}
            onClose={closeReviewForm}
          />
        )}

        {showUpdateForm && (
          <UpdateForm
            product={selectedProduct}
            onClose={() => setShowUpdateForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Tools;