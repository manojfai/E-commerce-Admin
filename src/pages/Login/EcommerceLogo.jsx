import React from 'react';
import ecommerce from './Asset/Image/bg_img.png';
import TnEcommerceLogoImg from './Asset/Image/brand_card.png';

const EcommerceLogo = () => {
  return (
    <div>
      {/* Background image */}
      <div style={{ flex: '1', height: '100vh', position: 'relative' }}>
        <img src={ecommerce} alt="wave" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        {/* Overlay image */}
        <img
          src={TnEcommerceLogoImg}
          alt="logo"
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '50%'
            // maxWidth: '70%', // Adjust the size as needed
            // maxHeight: '50%' // Adjust the size as needed
          }}
        />
      </div>
    </div>
  );
};

export default EcommerceLogo;
