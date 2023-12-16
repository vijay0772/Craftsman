import React, { useEffect, useState } from 'react';
import './Home.css'; // Import your CSS file for styling
import mainImg from './mainImg.jpg';
import {Link} from 'react-router-dom'
import logo from './logo2.png'
import center from './main.jpeg'

const Home = () => {
    const [usertype,setUserType] = useState('')
    const [products, setProducts] = useState('');
    const [searchText, setSearchText] = useState('');
    const [matchingProducts, setMatchingProducts] = useState([]);

useEffect(()=>{
    let ut = sessionStorage.getItem('usertype');
    setUserType(ut);
    getAllProducts();

},[])

const getAllProducts = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/getAllProducts');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log(result); // Handle the result as needed (e.g., update state)
    setProducts(result)
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};


const productSearch = (e) => {
  const searchText = e.target.value.toLowerCase();
  setSearchText(searchText);

  const matchingProducts = searchText
    ? products.filter(
        (product) =>
          product.productName.toLowerCase().includes(searchText)
      )
    : [];

  setMatchingProducts(matchingProducts);
};

const buttonStyle = {
  // Your button styles here
  color: 'white',
};
const ServiceCard = ({ image, title, description, linkTo }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px', // Set the height of each card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="lg:w-1/3 md:w-1/2 p-12">
      <div
        className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-150"
        style={{ ...cardStyle, flex: '1 0 calc(25% - 2rem)' }}
      >
        <h1 style={{ fontSize: '1.3em', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
          {title}
        </h1>
        <br />
        
      </div>
    </div>
  );
};
const handleProductClick = (productName) => {
  // Empty the search box and matching products list
  setSearchText('');
  setMatchingProducts([]);

  // You can add additional logic here based on the clicked product, if needed
  console.log(`Product clicked: ${productName}`);
};
  return (
    <div id="content" style={{ paddingTop: '100px' }} className="content-container">
      

      <div className="post">
      <div className="entry" style={{ position: 'relative' }}>
  <div>
    <img src={center} alt="Smart Homes Logo" className="" style={{ width: '100%', height: '100%' ,filter: 'grayscale(0%)',opacity: '0.9'}} />
  </div>
  <div id="text-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', background: 'rgba(0, 0, 0, 0.8)',borderRadius: '10px',
  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '10px' }}>
    What you need for Services?  
    <h2 style={{ fontSize: '14px', margin: '0' }}>
    <div style={{ flex: '1', textAlign: 'left',color:'black' }}>
            <input
              type="text"
              placeholder="Search for services"
              onChange={productSearch}
              value={searchText}
              style={{
                width: '500px',
                height: '40px',
                margin: '10px',
                // Adjust padding as needed
              }}
            />
            {matchingProducts.length > 0 && (
              <div className="search-products">
                <ul>
                  {matchingProducts.map((product) => (
                    <a
                      href={`/BookService`}
                      key={product.id}
                      onClick={() => handleProductClick(product.productName)}
                    >
                      <li>{product.productName}</li>
                    </a>
                  ))}
                </ul>
                {/* <ul>
                  {matchingProducts.map((product) => (
                    <a
                      href={`/productview/${product.productName}`}
                      key={product.id}
                      onClick={() => handleProductClick(product.productName)}
                    >
                      <li>{product.productName}</li>
                    </a>
                  ))}
                </ul> */}
              </div>
            )}
          </div>
    </h2>
  </div>
  <div class="container">
    {/* Your other content goes here */}
  </div>
</div>

      </div>



            {/* Fruit Section  */}
     {/* Services Section */}
    
      <section class="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex justify-center items-center flex-wrap w-full mb-20">
  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
    <h1 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-gray-900 text-center hover:text-red-500 transition duration-300 ease-in-out">
      Our Services
    </h1>
    <hr></hr>
  </div>
</div>


          <div class="flex flex-wrap -m-6">
            {/* Add ServiceCard components for each service */}
            <ServiceCard
              image="/images/homeservice.jpg"
              title="Plumbing repairs"
              description="Description for Service 1."
            />
            <ServiceCard
              image="/images/cleaningservice.jpg"
              title="Window cleaning"
              description="Description for Service 2."
            />
            <ServiceCard
              image="/images/gardning.jpg"
              title="Tree trimming"
              description="Description for Service 2."
            />
            <ServiceCard
              image="/images/remodeling.jpg"
              title="Oven and stove repair"
              description="Description for Service 2."
            />
            <ServiceCard
              image="/images/apprepair.jpg"
              title="Storage solutions"
              description="Description for Service 2."
            />
            <ServiceCard
              image="/images/pest.jpg"
              title="Pest prevention"
              description="Description for Service 2."
            />
            {/* Add more ServiceCard components for other services */}
          </div>
          <div className="flex justify-center mt-6">
              <Link to="/Services">
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
                  All Services
                </button>
              </Link>
            </div>
        </div>
      </section>
    

    
{/* Carosoul  */}

          {/* <div class="justify-center mt-24">
          <div
            class="block rounded-lg w-2/3  ml-48 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-indigo-600">
            <div
              class="border-b-2 border-neutral-100 px-6 py-3 text-5xl dark:border-neutral-600 dark:text-neutral-50">
                Tea & coffee
            </div>
            <div class="p-6">
              <h5
                class="mb-2  font-medium leading-tight text-neutral-800 text-3xl dark:text-neutral-50">
                Special title treatment
              </h5>
              <p class="mb-4  text-neutral-600 text-3xl dark:text-neutral-200">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                type="button"
                href="#"
                class="inline-block rounded bg-primary text-3xl px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]  bg-green-300 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Go somewhere
              </button>
            </div>
          </div>

          </div> */}


    </div>
  );
};

export default Home;