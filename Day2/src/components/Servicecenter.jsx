import React from 'react';

const ServiceCenterList = () => {
  const serviceCenters = [
    { id: 1, name: 'Service Center ', location: 'Chennai' },
    { id: 2, name: 'Service Center ', location: 'Coimbatore' },
    { id: 3, name: 'Service Center ', location: 'Tiruppur'},
    // Add more service centers as needed
  ];

  const handleLocationClick = (location) => {
    // You can implement logic here to open the location on a map
    // For simplicity, let's just log the location to the console
    console.log(`Opening map for location: ${location}`);
  };

  return (
    <div>
      <h2>Service Centers</h2>
      {serviceCenters.map(center => (
        <div key={center.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px', borderRadius: '5px' }}>
          <img src={center.imageUrl} alt={`Service Center ${center.id}`} style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', borderRadius: '5px' }} />
          <div>
            <h3>{center.name}</h3>
            <p>Location: {center.location}</p>
            <button onClick={() => handleLocationClick(center.location)}>Open in Map</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCenterList;
