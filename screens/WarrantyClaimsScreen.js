import React, { useState } from 'react'; 
 
const WarrantyClaimScreen = () => { 
  const [searchTerm, setSearchTerm] = useState(''); 
 
  const items = [ 
    { 
      name: 'Yarsa Tech Pro Router', 
      code: 'YT-R450', 
      warrantyStatus: 'Active', 
      price: '$299.99', 
      expiryDate: '2024-01-15', 
      duration: '2 years', 
    }, 
    { 
      name: 'Standard WiFi Module', 
      code: 'YT-W200', 
      warrantyStatus: 'Active', 
      price: '$149.99', 
      expiryDate: '2024-02-20', 
      duration: '1 year', 
    }, 
  ]; 
 
  return ( 
    <div className="warranty-claim-container"> 
      {/* Embedded CSS Styles */} 
      <style>{` 
        .warranty-claim-container { 
          padding: 20px; 
          max-width: 400px; 
          margin: auto; 
          border-radius: 10px; 
          background-color: #f8f8f8; 
          box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        } 
        h1 { 
          color: #a60000; 
        } 
        h2 { 
          margin-top: 20px; 
        } 
        .search-input { 
          width: 100%; 
          padding: 10px; 
          margin: 10px 0; 
          border: 1px solid #ccc; 
          border-radius: 5px; 
        } 
        .status-container { 
          display: flex; 
          justify-content: space-between; 
        } 
        .status-box { 
          padding: 10px; 
          border-radius: 5px; 
          text-align: center; 
        } 
        .status-box.active { 
          background-color: #e0f7e9; 
          color: #2c6e3f; 
        } 
        .status-box.expired { 
          background-color: #ffdddd; 
          color: #b30000; 
        } 
        .status-box.total { 
          background-color: #d6efff; 
          color: #0056b3; 
        } 
        .item-card { 
          background-color: white; 
          padding: 15px; 
          margin: 10px 0; 
          border-radius: 5px; 
          box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
        } 
        .status { 
          display: inline-block; 
          padding: 5px; 
          border-radius: 5px; 
        } 
        .status.active { 
          background-color: #e0f7e9; 
          color: #2c6e3f; 
        } 
        .status.expired { 
          background-color: #ffdddd; 
          color: #b30000; 
        } 
        .claim-button { 
          margin-top: 10px; 
          padding: 10px; 
          color: white; 
          background-color: #a60000; 
          border: none; 
          border-radius: 5px; 
          cursor: pointer; 
          transition: background 0.3s; 
        } 
        .claim-button:hover { 
          background-color: #850000; 
        } 
      `}</style> 
 
      <h1>Warranty Claims</h1> 
      <p>Manage Product Warranties</p> 
      <input 
        type="text" 
        placeholder="Search by item code or product name" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-input" 
      /> 
      <div className="status-container"> 
        <div className="status-box active"> 
          <span>ACTIVE</span> <span>3</span> 
        </div> 
        <div className="status-box expired"> 
          <span>EXPIRED</span> <span>1</span> 
        </div> 
        <div className="status-box total"> 
          <span>TOTAL</span> <span>4</span> 
        </div> 
      </div> 
      <h2>Ready to Ship Items</h2> 
      {items.map((item, index) => ( 
        <div className="item-card" key={index}> 
          <h3>{item.name}</h3> 
          <p>{item.code}</p> 
          <p>{item.price}</p> 
          <p> 
            {item.expiryDate} - {item.duration} 
          </p> 
          <span className={`status 
${item.warrantyStatus.toLowerCase()}`}> 
            {item.warrantyStatus} 
          </span> 
          <button className="claim-button">File Warranty Claim</button> 
        </div> 
      ))} 
    </div> 
  ); 
}; 
 
export default WarrantyClaimScreen; 