import React from 'react';
import Lottie from 'react-lottie';
import animationData7 from '../../static/viaje.json';


function Logo7() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData7, 
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    return (
    <div>
        <Lottie 
        options={defaultOptions}
        height={200}
        width={200}
        />
      </div>
    );
  }

export default Logo7