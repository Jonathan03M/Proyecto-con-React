import React from 'react';
import Lottie from 'react-lottie';
import animationData2 from '../static/pera.json';


function Logo2() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData2, 
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

export default Logo2