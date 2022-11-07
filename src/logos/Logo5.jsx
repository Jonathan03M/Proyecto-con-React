import React from 'react';
import Lottie from 'react-lottie';
import animationData5 from '../../static/correo.json';


function Logo5() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData5, 
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

export default Logo5