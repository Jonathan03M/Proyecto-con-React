import React from 'react';
import Lottie from 'react-lottie';
import animationData4 from '../../static/tarea.json';


function Logo4() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData4, 
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

export default Logo4