import React from 'react';
import Lottie from 'react-lottie';
import animationData6 from '../../static/curiosidad.json';


function Logo6() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData6, 
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

export default Logo6