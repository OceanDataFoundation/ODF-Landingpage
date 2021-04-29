import React from 'react'
import styled from 'styled-components'

const WaveAnimationContainer = ({ children }) => {

  return (
    <AnimationWrapper>
      <Children>{children}</Children>
      <svg style={{width: '0', height: '0'}}>
        <filter id="filter1" >
          <feTurbulence baseFrequency="1" numOctaves="1">
            <animate attributeName="baseFrequency" dur="10s" repeatCount="indefinite" values="0.00.1;0"/>
          </feTurbulence>
          <feDisplacementMap scale="10" in="SourceGraphic"/>
        </filter>
      </svg>
    </AnimationWrapper>
  )
}

const Children = styled.div``;

const AnimationWrapper = styled.div`
	opacity: 0;
	animation: 1s svg_anim;
	animation-fill-mode: forwards;
	position: relative;

  ${Children} {
    height: 100%;
    max-width: 100%;
    filter: url(#filter1);
}

  @keyframes svg_anim{
    0%{ opacity: 0; }
    100%{ opacity: 1; top:0;  }
  }

`;

export default WaveAnimationContainer