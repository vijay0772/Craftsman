import React, { useEffect, useState } from 'react';
import './Inventory.css'
import { Chart } from 'react-google-charts';
// import { selectInventory, selectOnSale, selectRebate } from './MySqlDataStoreUtilities';


//AIzaSyBXNhSo8nI8vbgBSRDBTBuwxcNXc1gR8zw

// public static HashMap<String, Product> selectInventory() {
//     HashMap<String, Product> hm = new HashMap<String, Product>();
//     try {
//         getConnection();

//         String selectAcc = "select * from groceryhub";
//         PreparedStatement pst = conn.prepareStatement(selectAcc);
//         ResultSet rs = pst.executeQuery();

//         while (rs.next()) {
//             Product product = new Product(rs.getInt("product_id"),rs.getString("product_name"),rs.getString("product_description"),rs.getDouble("product_currentprice"),rs.getInt("product_discount"),rs.getDouble("product_actualprice"),rs.getString("product_category"),rs.getString("product_image"),rs.getString("product_manufacturer"),rs.getInt("inventory"),rs.getString("store_zipcode"),rs.getInt("rating"),rs.getString("product_condition"));
//             hm.put(rs.getString("product_name"), product);
            
//         }
//     } catch (Exception e) {

//     }

//     return hm;
// }


// public static HashMap<String, Product> selectOnSale() {
//     HashMap<String, Product> hm = new HashMap<String, Product>();
//     try {
//         getConnection();

//         String selectAcc = "select * from groceryhub where product_condition = 'NEW'";
//         PreparedStatement pst = conn.prepareStatement(selectAcc);
//       //  pst.setString(1, "1");
//         ResultSet rs = pst.executeQuery();

//         while (rs.next()) {
//             //Product product = new Product(rs.getString("productName"), rs.getDouble("productPrice"), Integer.parseInt(rs.getString("inventory")));
//             Product product = new Product(rs.getInt("product_id"),rs.getString("product_name"),rs.getString("product_description"),rs.getDouble("product_currentprice"),rs.getInt("product_discount"),rs.getDouble("product_actualprice"),rs.getString("product_category"),rs.getString("product_image"),rs.getString("product_manufacturer"),rs.getInt("inventory"),rs.getString("store_zipcode"),rs.getInt("rating"),rs.getString("product_condition"));
//             hm.put(rs.getString("product_name"), product);
           
//         }
//     } catch (Exception e) {
//     }
//     return hm;
// }

// public static HashMap<String, Product> selectRebate() {
//     HashMap<String, Product> hm = new HashMap<String, Product>();
//     try {
//         getConnection();

//         String selectAcc = "select * from groceryhub where product_discount > 0";
//         PreparedStatement pst = conn.prepareStatement(selectAcc);
//         ResultSet rs = pst.executeQuery();

//         while (rs.next()) {
//             Product product = new Product(rs.getInt("product_id"),rs.getString("product_name"),rs.getString("product_description"),rs.getDouble("product_currentprice"),rs.getInt("product_discount"),rs.getDouble("product_actualprice"),rs.getString("product_category"),rs.getString("product_image"),rs.getString("product_manufacturer"),rs.getInt("inventory"),rs.getString("store_zipcode"),rs.getInt("rating"),rs.getString("product_condition"));
//             hm.put(rs.getString("product_name"), product);
           
//         }
//     } catch (Exception e) {
//     }
//     return hm;
// }

const ITEMS_PER_PAGE = 8;
const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inventory, setInventory] = useState([]);
  const [onSaleProducts, setOnSaleProducts] = useState([]);
  const [rebateProducts, setRebateProducts] = useState([]);


  const getAllProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/getAllProducts');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log(result); // Handle the result as needed (e.g., update state)
      setInventory(result)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const selectOnSale = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/onSale');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log(result); // Handle the result as needed (e.g., update state)
      setOnSaleProducts(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const selectRebate = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/onRebate');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log(result); // Handle the result as needed (e.g., update state)
      setRebateProducts(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inventoryData = await getAllProducts();
        // setInventory(inventoryData);

        const onSaleData = await selectOnSale();
        // setOnSaleProducts(onSaleData);

        const rebateData = await selectRebate();
        // setRebateProducts(rebateData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



  // const renderTable = (data, title) => {
  //   return (
  //     <div className="post">
  //       <u>
  //         <h3 className="title">{title}</h3>
  //       </u>
  //       <div className="entry">
  //         <table style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }} className="gridtable" border="1">
  //           {renderTableHeader(data)}
  //           {renderTableRows(data)}
  //         </table>
  //       </div>
  //     </div>
  //   );
  // };

  const renderTable = (data, title) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentData = data.slice(startIndex, endIndex);

    return (
      <div className="post">
        <u>
          <h1 className="title" style={{fontSize:'24px',paddingBottom:'2%'}}>{title}</h1>
        </u>
        <div className="entry">
          <table style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }} className="gridtable" border="1" width = '95%'>
            {renderTableHeader(data)}
            {renderTableRows(currentData)}
          </table>
          {renderPagination(data)}
        </div>
      </div>
    );
  };

  const renderPagination = (data) => {
    
  };


//   const renderTableHeader = (data) => {
//     return (
//       <tr>
//         {Object.keys(data[0]).map((key) => (
//           <th key={key}>{key}</th>
//         ))}
//       </tr>
//     );
//   };

// const renderTableHeader = (data) => {
//     if (!data || data.length === 0) {
//       return null; // Return null or any fallback content if data is undefined or empty
//     }
  
//     return (
//       <tr>
//         {Object.keys(data[0]).map((key) => (
//           <th key={key}>{key}</th>
//         ))}
//       </tr>
//     );
//   };

// const renderTableHeader = (data) => {
//   if (!data || data.length === 0) {
//     return null;
//   }

//   return (
//     <tr>
//       <th>Product Type</th>
//       <th>Product Name</th>
//       <th>Product Price</th>
//       <th>Product Image</th>
//       <th>Product Manufacturer</th>
//       <th>Product Condition</th>
//       <th>Product Inventory</th>
//     </tr>
//   );
// };

// const renderTableRows = (data) => {
//   return data.map((item, index) => (
//     <tr key={index} style={{}}>
//       <td>{item.ProductType}</td>
//       <td>{item.productName}</td>
//       <td>{item.productPrice}</td>
//       <td>{<img src={`./images/${item.productImage}`} style={{width:'100px'}}></img>}</td>
//       <td>{item.productManufacturer}</td>
//       <td>{item.productCondition}</td>
//       <td>{item.inventory}</td>
//     </tr>
//   ));
// };

const renderTableHeader = (data) => {
  
};

const renderTableRows = (data) => {
  
};



  // const renderTableRows = (data) => {
  //   return data.map((item, index) => (
  //     <tr key={index}>
  //       {Object.values(item).map((value, index) => (
  //         <td key={index}>{value}</td>
  //       ))}
  //     </tr>
  //   ));
  // };

  const renderBarChart = (data, title) => {
    return (
      <div style={{paddingTop: '180px'}} className="post">
  <u>
    <h3 className="title" style={{ fontSize: '24px', paddingBottom: '2%' }}>{title}</h3>
  </u>
  <div className="entry">
  <div className="chart-container">
    <Chart
      width={'45vw'}  // Adjust the width as needed
      height={'500px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={prepareChartData(data)}
      options={{
        title: 'Stock',
        curveType: 'function',
        legend: { position: 'bottom' },
      }}
    />
    <Chart
      width={'45vw'}  // Adjust the width as needed
      height={'500px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={prepareChartData(data)}
      options={{
        title: 'Inventory Stock',
        pieHole: 0.4,
      }}
    />
  </div>
</div>
  </div>

    );
  };

  const prepareChartData = (data) => {
    const chartData = [['Product Name', 'Inventory']];
    data.forEach((product) => {
      chartData.push([product.productName, product.inventory]);
    });
    return chartData;
  };

  return (
    <div style={{ backgroundColor: 'white',paddingTop: '180px', textAlign: 'center', padding: '20px', paddingBottom: '20px', width:'95%'}} id="content">
      {renderTable(inventory, '')}
      {renderBarChart(inventory, 'Charts of Inventory')}
      {renderTable(onSaleProducts, '')}
      {renderTable(rebateProducts, '')}
    </div>
  );
};

export default Inventory;
