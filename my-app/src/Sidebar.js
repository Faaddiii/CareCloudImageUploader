// Sidebar.js
import React from 'react';

function Sidebar({ onSelectComponent, selectedComponent }) {
  const components = [
    'Preview',
    'Resize',
    'Smart resize',
    'Crop',
    'Crop by ratio',
    'Crop by object',
    'Scale crop',
    'Smart crop',
    'Border radius and circle crop',
    'Set fill color when cropping and stretching',
    'Zoom objects',
    'Automatic rotation',
    'Manual rotation',
    'Flip',
    'Mirror',
  ];
  const sidebarStyle = {
    background: 'linear-gradient(to right, #3498db, #6a89cc)',  // Gradient background
    color: '#fff',         // White text color
    padding: '10px',
    borderRadius: '5px',
    height: '100%',        // Set height to 100%
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  

  const listItemStyle = {
    cursor: 'pointer',
    marginBottom: '7px',
    padding: '7px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="sidebar" style={sidebarStyle}>
      <div>
        <h1 style={{ color: '#fff' }}>CareCloud Image Transformer</h1>
        <hr></hr> 
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {components.map((component, index) => (
            <li
              key={index}
              onClick={() => onSelectComponent(index)}
              style={{
                ...listItemStyle,
                backgroundColor: index === selectedComponent ? '#2980b9' : 'transparent',
              }}
            >
              {component}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
