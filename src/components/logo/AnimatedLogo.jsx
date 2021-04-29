import React from 'react'
import Lottie from 'react-lottie';
import styled from 'styled-components'

import animationData from './animation.json';

const AnimatedLogo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
      <Lottie options={defaultOptions}
      />
  )
}

const AnimationWrapper = styled.div`
`;

export default AnimatedLogo
