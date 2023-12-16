// import React, { useEffect, useState } from 'react';
// import './MapContainer.css';

// const StoreMap = () => {
//   const [map, setMap] = useState(null);
//   const [storeMarkers, setStoreMarkers] = useState([]);
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [initialLoc, setInitialLoc] = useState({ lat: 0, long: 0 });
//   const [address, setAddress] = useState(''); // Added state for address

//   useEffect(() => {
//     getLocation();
//     const script1 = document.createElement('script');
//     script1.src =
//       'https://maps.googleapis.com/maps/api/js?key=AIzaSyCzX6Bj4xArtu8k9zUDFs2DlQRWM-nlZ4w&callback=initMap&libraries=places,geometry';

//     script1.async = true;
//     script1.defer = true;
//     document.head.appendChild(script1);

//     script1.onload = () => {
//       setMap(new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 41.8781, lng: -87.6298 }, // Chicago as default center
//         zoom: 12,
//       }));
//       setMapLoaded(true);
//     };
    

//     return () => {
//       document.head.removeChild(script1);
//     };
//   }, []);

//   useEffect(() => {
//     if (initialLoc.lat !== 0 && initialLoc.long !== 0) {
//       fetchNearbyStores(initialLoc.lat, initialLoc.long);
//     }
//   }, [initialLoc.lat, initialLoc.long, mapLoaded]);

//   const fetchNearbyStores = async (latitude, longitude) => {
//     try {
//       const location = new window.google.maps.LatLng(latitude, longitude);
//       const service = new window.google.maps.places.PlacesService(map);

//       const request = {
//         location: location,
//         radius: 5000,
//         types: ['grocery_or_supermarket'],
//       };

//       service.nearbySearch(request, (results, status) => {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//           updateMapWithMarkers(results);
//         } else {
//           console.error('Error fetching nearby stores:', status);
//         }
//       });
//     } catch (error) {
//       console.error('Error fetching nearby stores:', error);
//     }
//   };

//   const updateMapWithMarkers = (storeLocations) => {
//     // Clear existing markers
//     storeMarkers.forEach((marker) => marker.setMap(null));

//     // Create new markers for each store
//     const newMarkers = storeLocations.map((store) => {
//       const marker = new window.google.maps.Marker({
//         position: store.geometry.location,
//         map: map,
//         title: store.name,
//       });

//       marker.addListener('click', () => {
//         const infowindow = new window.google.maps.InfoWindow({
//           content: `<strong>${store.name}</strong>`,
//         });
//         infowindow.open(map, marker);
//       });

//       return marker;
//     });

//     // Update the state with new markers
//     setStoreMarkers(newMarkers);
//   };

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       alert('Geolocation is not supported by the browser.');
//     }
//   };

//   const showPosition = (position) => {
//     setInitialLoc({
//       lat: position.coords.latitude,
//       long: position.coords.longitude,
//     });
//   };

//   const showError = (error) => {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         alert('User denied the request for Geolocation.');
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert('Location information is unavailable.');
//         break;
//       case error.UNKNOWN_ERROR:
//         alert('An unknown error occurred.');
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSelectStore = (storeAddress) => {
//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ address: storeAddress }, (results, status) => {
//       if (status === 'OK' && results[0]) {
//         const location = results[0].geometry.location;
//         map.setCenter(location);
//         map.setZoom(15);
//         fetchNearbyStores(location.lat(), location.lng());
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   };

//   const handleSearch = () => {
//     if (address && map) {
//       const geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode({ address: address }, (results, status) => {
//         if (status === 'OK' && results[0]) {
//           const location = results[0].geometry.location;
//           map.setCenter(location);
//           map.setZoom(15);
//           fetchNearbyStores(location.lat(), location.lng());
//         } else {
//           alert('Geocode was not successful for the following reason: ' + status);
//         }
//       });
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-2">
//           <form>
//             <label htmlFor="fname">Select Store:</label>
//             <br />
//             <button
//               id="marianos"
//               type="button"
//               className="btn btn-success"
//               onClick={() => handleSelectStore('1615 S Clark St, Chicago, IL')}
//             >
//               Mariano's
//             </button>
//             <br />
//             <button
//               id="southLoopMarket"
//               type="button"
//               className="btn btn-success"
//               onClick={() => handleSelectStore('1720 S Michigan Ave, Chicago, IL')}
//             >
//               South Loop Market
//             </button>
//           </form>
//           <br />
//           <form>
//             <label htmlFor="fname">Stores Near Me</label>
//             <br />
//             <button
//               id="store"
//               type="button"
//               className="btn btn-success"
//               value="0"
//               onClick={() => fetchNearbyStores(initialLoc.lat, initialLoc.long)}
//             >
//               Stores Near Me
//             </button>
//           </form>
//         </div>
//         <div className="col-sm-8">
//           <div
//             className="row mb-2"
//             style={{
//               display: 'flex',
//               textAlign: 'center',
//               justifyContent: 'flex-end',
//               flexDirection: 'row',
//               alignItems: 'center',
//               flexWrap: 'nowrap',
//             }}
//           >
//             <div className="col-sm-7 text-center">
//               <input
//                 className="form-control"
//                 id="ciudad"
//                 type="text"
//                 placeholder="Enter your address to locate stores near you..."
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
//             <div className="col-sm-3">
//               <button className="btn btn-primary" onClick={handleSearch}>
//                 Locate
//               </button>
//             </div>
//           </div>
//           <div id="map" style={{ height: '500px', width: '100%' }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoreMap;


// // import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// // import { useMemo } from "react";
// // import "./App.css";

// // const StoreMap = () => {
// //   const { isLoaded } = useLoadScript({
// //     googleMapsApiKey: "pAIzaSyCadQsj-cs0NsgCP13Kk0cUS6wF1We6XUQ"
// //   });
// //   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

// //   return (
// //     <div className="App">
// //       {!isLoaded ? (
// //         <h1>Loading...</h1>
// //       ) : (
// //         <GoogleMap
// //           mapContainerClassName="map-container"
// //           center={center}
// //           zoom={10}
// //         >
// //           <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
// //         </GoogleMap>
// //       )}
// //     </div>
// //   );
// // };

// // export default StoreMap;


// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import './MapContainer.css';

// const StoreMap = () => {
//   const [map, setMap] = useState(null);
//   const [storeMarkers, setStoreMarkers] = useState([]);
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [initialLoc, setInitialLoc] = useState({ lat: 0, long: 0 });
//   const [address, setAddress] = useState('');

//   useEffect(() => {
//     getLocation();
//   }, []);

//   useEffect(() => {
//     if (initialLoc.lat !== 0 && initialLoc.long !== 0) {
//       fetchNearbyStores(initialLoc.lat, initialLoc.long);
//     }
//   }, [initialLoc.lat, initialLoc.long, mapLoaded]);

//   const fetchNearbyStores = async (latitude, longitude) => {
//     // Existing code remains unchanged
//         try {
//       const location = new window.google.maps.LatLng(latitude, longitude);
//       const service = new window.google.maps.places.PlacesService(map);

//       const request = {
//         location: location,
//         radius: 5000,
//         types: ['grocery_or_supermarket'],
//       };

//       service.nearbySearch(request, (results, status) => {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//           updateMapWithMarkers(results);
//         } else {
//           console.error('Error fetching nearby stores:', status);
//         }
//       });
//     } catch (error) {
//       console.error('Error fetching nearby stores:', error);
//     }
//   };

//   // const updateMapWithMarkers = (storeLocations) => {
//   //   // Existing code remains unchanged
//   // };

//   // const getLocation = () => {
//   //   // Existing code remains unchanged
//   // };

//   // const handleSelectStore = (storeAddress) => {
//   //   // Existing code remains unchanged
//   // };

//   // const handleSearch = () => {
//   //   // Existing code remains unchanged
//   // };

//     const updateMapWithMarkers = (storeLocations) => {
//     // Clear existing markers
//     storeMarkers.forEach((marker) => marker.setMap(null));

//     // Create new markers for each store
//     const newMarkers = storeLocations.map((store) => {
//       const marker = new window.google.maps.Marker({
//         position: store.geometry.location,
//         map: map,
//         title: store.name,
//       });

//       marker.addListener('click', () => {
//         const infowindow = new window.google.maps.InfoWindow({
//           content: `<strong>${store.name}</strong>`,
//         });
//         infowindow.open(map, marker);
//       });

//       return marker;
//     });

//     // Update the state with new markers
//     setStoreMarkers(newMarkers);
//   };

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       alert('Geolocation is not supported by the browser.');
//     }
//   };

//   const showPosition = (position) => {
//     setInitialLoc({
//       lat: position.coords.latitude,
//       long: position.coords.longitude,
//     });
//   };

//   const showError = (error) => {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         alert('User denied the request for Geolocation.');
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert('Location information is unavailable.');
//         break;
//       case error.UNKNOWN_ERROR:
//         alert('An unknown error occurred.');
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSelectStore = (storeAddress) => {
//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ address: storeAddress }, (results, status) => {
//       if (status === 'OK' && results[0]) {
//         const location = results[0].geometry.location;
//         map.setCenter(location);
//         map.setZoom(15);
//         fetchNearbyStores(location.lat(), location.lng());
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   };

//   const handleSearch = () => {
//     if (address && map) {
//       const geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode({ address: address }, (results, status) => {
//         if (status === 'OK' && results[0]) {
//           const location = results[0].geometry.location;
//           map.setCenter(location);
//           map.setZoom(15);
//           fetchNearbyStores(location.lat(), location.lng());
//         } else {
//           alert('Geocode was not successful for the following reason: ' + status);
//         }
//       });
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-2">
//           {/* Existing code remains unchanged */}
//         </div>
//         <div className="col-sm-8">
//           <div
//             className="row mb-2"
//             style={{
//               display: 'flex',
//               textAlign: 'center',
//               justifyContent: 'flex-end',
//               flexDirection: 'row',
//               alignItems: 'center',
//               flexWrap: 'nowrap',
//             }}
//           >
//             <div className="col-sm-7 text-center">
//               <input
//                 className="form-control"
//                 id="ciudad"
//                 type="text"
//                 placeholder="Enter your address to locate stores near you..."
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
//             <div className="col-sm-3">
//               <button className="btn btn-primary" onClick={handleSearch}>
//                 Locate
//               </button>
//             </div>
//           </div>
//           <LoadScript googleMapsApiKey="AIzaSyCzX6Bj4xArtu8k9zUDFs2DlQRWM-nlZ4w">
//             <GoogleMap
//               center={initialLoc}
//               zoom={12}
//               mapContainerStyle={{ height: '500px', width: '100%' }}
//               onLoad={(map) => setMap(map)}
//             >
//               {storeMarkers.map((marker) => (
//                 <Marker
//                   key={marker.title}
//                   position={marker.position}
//                   onClick={() => {
//                     // Handle marker click if needed
//                   }}
//                 >
//                   { /* Add any additional marker content here if needed */}
//                 </Marker>
//               ))}
//             </GoogleMap>
//           </LoadScript>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoreMap;


// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import './MapContainer.css';

// const StoreMap = () => {
//   const [map, setMap] = useState(null);
//   const [marianosMarker, setMarianosMarker] = useState(null);

//   useEffect(() => {
//     // Initialize the map
//     const marianosLocation = { lat: 41.9445, lng: -87.6547 };
//     setMap(
//       new window.google.maps.Map(document.getElementById('map'), {
//         center: marianosLocation,
//         zoom: 15,
//       })
//     );

//     // Initialize the marker
//     setMarianosMarker(
//       new window.google.maps.Marker({
//         position: marianosLocation,
//         map: map,
//         title: "Mariano's - Chicago",
//       })
//     );

//     // Add click event listener for the marker
//     marianosMarker.addListener('click', () => {
//       const infowindow = new window.google.maps.InfoWindow({
//         content: '<strong>Mariano\'s - Chicago</strong>',
//       });
//       infowindow.open(map, marianosMarker);
//     });

//     // Initialize a geocoder
//     const geocoder = new window.google.maps.Geocoder();

//     // Function to change the map's center and zoom
//     const change = (address) => {
//       geocodeAddress(address, (location) => {
//         map.setCenter(location);
//         map.setZoom(15);
//         // Place the marker at the new location
//         marianosMarker.setPosition(location);
//       });
//     };

//     // Function to geocode an address
//     const geocodeAddress = (address, callback) => {
//       geocoder.geocode({ address: address }, (results, status) => {
//         if (status === 'OK' && results[0]) {
//           const location = results[0].geometry.location;
//           callback(location);
//         } else {
//           alert('Geocode was not successful for the following reason: ' + status);
//         }
//       });
//     };

//     // Load the map
//     const loadMapScript = () => {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCzX6Bj4xArtu8k9zUDFs2DlQRWM-nlZ4w&callback=initMap&libraries=places,geometry`;
//       script.async = true;
//       script.defer = true;
//       document.head.appendChild(script);

//       script.onload = () => {
//         initMap();
//       };
//     };

//     // Load the map script when the component mounts
//     loadMapScript();

//     // Cleanup function to remove the script when the component unmounts
//     return () => {
//       document.head.removeChild(document.getElementById('map-script'));
//     };

//   }, [map, marianosMarker]);

//   return (
//     <div>
//       {/* Your JSP code here */}
//       <h1>Stores</h1>
//       {/* ... Other HTML content ... */}
//       <div id="map" style={{ height: '100vh' }}></div>
//       {/* ... Other HTML content ... */}
//     </div>
//   );
// };

// export default StoreMap;


// MyReactComponent.js
import React, { useEffect, useState } from 'react';
import './StoreMap.css';
const StoreMap = () => {
  const [stores, setStores] = useState([]);

  const handleSearch = async () => {
    try {
      // Directly use the coordinates for the specified ZIP codes
      const chicagoZipCodes = [
        { zipCode: '60601', coordinates: { lat: 41.8869, lng: -87.6225 } },
        { zipCode: '60602', coordinates: { lat: 41.8837, lng: -87.6315 } },
        { zipCode: '60603', coordinates: { lat: 41.8796, lng: -87.6306 } },
        { zipCode: '60604', coordinates: { lat: 41.8786, lng: -87.6317 } },
        { zipCode: '60605', coordinates: { lat: 41.8676, lng: -87.6150 } },
        { zipCode: '60606', coordinates: { lat: 41.8831, lng: -87.6314 } },
        { zipCode: '60607', coordinates: { lat: 41.8782, lng: -87.6512 } },
        { zipCode: '60608', coordinates: { lat: 41.8459, lng: -87.6659 } },
        { zipCode: '60609', coordinates: { lat: 41.8120, lng: -87.6565 } },
        { zipCode: '60610', coordinates: { lat: 41.9066, lng: -87.6313 } },
        { zipCode: '60611', coordinates: { lat: 41.8947, lng: -87.6170 } },
        { zipCode: '60612', coordinates: { lat: 41.8806, lng: -87.6876 } },
        { zipCode: '60613', coordinates: { lat: 41.9537, lng: -87.6561 } },
        { zipCode: '60614', coordinates: { lat: 41.9221, lng: -87.6496 } },
        { zipCode: '60615', coordinates: { lat: 41.8017, lng: -87.5963 } },
      ];

      setStores(chicagoZipCodes);
    } catch (error) {
      console.error('Error fetching nearby stores:', error.message);
    }
  };

  useEffect(() => {
    initMap();
  }, [stores]);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.8781, lng: -87.6298 }, // Chicago's coordinates
      zoom: 11,
    });

    stores.forEach((store) => {
      const marker = new window.google.maps.Marker({
        position: store.coordinates,
        map: map,
        title: `Store in ZIP ${store.zipCode}`,
      });
    });
  };

  return (
    <div style={{ paddingTop: '150px' }} className="store-map-container">
    <h2 className="store-map-title">Store Locator</h2>
    <div className="store-map-search">
      <button className="store-map-button" onClick={handleSearch}>
        Search
      </button>
    </div>
    <div id="map" className="store-map" />
  </div>
  );
};

export default StoreMap;
