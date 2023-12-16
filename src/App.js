import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Cart from './Cart'
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';
import ViewOrder from './ViewOrder';
import ProductDetails from './ProductDetails'
import ReviewForm from './ReviewForm';
import Addproduct from './Addproduct';
import ViewProduct from './ViewProduct';
import SingleProduct from './SingleProduct';
import Orders from './Orders';
import Trending from './Trending';
import UpdateForm from './UpdateForm';
import AddCustomer from './AddCustomer';
import MapComponent from './MapComponent';
import Inventory from './Inventory';
import SalesReport from './SalesReport';
import SalesTrendsChart from './DataVisualization';
import DataAnalytics from './DataAnalytics';
import Dashboard from './Dashboard';
import Services from './Services';
import HomeMaintenance from './HomeMaintenance';
import BookService from './BookService';
import AppointmentForm from './AppointmentForm';
import Thankyou from './Thankyou';
import Tools from './Tools';
import CleaningServices from './CleaningServices';
import Requests from './Requests';
function App() {
  return (
    <div className="App">
      <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Vieworder" element={<ViewOrder />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/AddCustomer" element={<AddCustomer />} />
          <Route path="/viewProduct/:productName" element={<ViewProduct />} />
          <Route path="/allOrders" element={<Orders />} />
          <Route path="/updateProduct/:productName" element={<UpdateForm />} />
          <Route path="/productview/:ProductName" element={<SingleProduct />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/store" element={<MapComponent />} />
          <Route path="/InventoryReport" element={<Inventory />} />
          <Route path="/SalesReport" element={<SalesReport />} />
          <Route path="/DataVisualization" element={<SalesTrendsChart />} />
          <Route path="/DataAnalytics" element={<DataAnalytics />} />
          <Route path="/ReviewForm/:productModelName" element={<ReviewForm />} />
          <Route path="/checkout/orderConfirmation/:orderId" element={<OrderConfirmation />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/HomeMaintenance" element={<HomeMaintenance />} />
          <Route path="/BookService" element={<BookService />} />
          <Route path="/AppointmentForm" element={<AppointmentForm />} />
          <Route path="/Thankyou" element={<Thankyou />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/CleaningServices" element={<CleaningServices />} />
          <Route path="/Requests" element={<Requests />} />
        </Routes>
        <Footer />
      </CartProvider>
      </Router>
    </div>
  );
}

export default App;
