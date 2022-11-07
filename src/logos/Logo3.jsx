import React from 'react';
import Lottie from 'react-lottie';
import animationData3 from '../../static/meditacion.json';


function Logo3() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData3, 
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    return (
    <div>
        <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
        />
      </div>
    );
  }

export default Logo3