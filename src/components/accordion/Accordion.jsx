import { AnimatePresence, useCycle } from "framer-motion";
import * as React from "react";
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { colorBrandPurple, colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { fontSize } from '../../utils/tokens/tokenFontSize'
import AccordionContent from "./AccordionContent";

const Accordion = props => {
  const { children, title } = props;
  const [isOpen, toggleOpen] = useCycle(false, true);

   return (
     <S_Accordion>
       <S_AccordionTitle
         className={isOpen && "odp-active-tab"}
         onClick={() => toggleOpen()}>
         <AccordionText>
           {title}
         </AccordionText>
         <S_AccordionIcon>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
         </S_AccordionIcon>
       </S_AccordionTitle>
       <AnimatePresence initial={false}>
         <AccordionContent animate={isOpen ? "open" : "collapsed"}>
           {children}
         </AccordionContent>
       </AnimatePresence>
     </S_Accordion>
   )
 }


const S_Accordion = styled.div`
  margin: 0;
`;

const AccordionText = styled.div`
  margin-right: ${space[4]};
`;


const S_AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: ${colorNeutral.NEUTRAL_TINT_100};
  transition: all ease-in-out 0.5s;

  & span {
    background: ${colorBrandPurple.PURPLE_TINT_50};
    display: block;
    position: relative;
    width: 1rem;
    height: 3px;
    transition: all ease-in-out 0.2s;
  }

  span:nth-child(1) {
    transform: translateX(7px) rotate(-90deg);
  }
  span:nth-child(2) {
    transform: translateX(-7px)
  }

  ${mediaQuery.BREAKPOINT_3`
    height: 56px;
    width: 56px;

    & span {
      width: 2rem;
      height: 5px;
    }

    span:nth-child(1) {
      transform: translateX(14px) rotate(-90deg);
    }

    span:nth-child(2) {
      transform: translateX(-14px)
    }
  `};
`;

const S_AccordionTitle = styled.button`
  width: 100%;
  text-align: left;
  letter-spacing: 0.03em;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  border-radius: 0;
  background-color: ${colorBrandPurple.PURPLE_TINT_50};
  color: ${colorNeutral.NEUTRAL_TINT_100};
  line-height: 5rem;
  margin-bottom: ${space[4]};
  font-size: ${fontSize.FONT_SIZE_4};
  border-bottom: 2px solid ${colorNeutral.NEUTRAL_TINT_100};


  ${mediaQuery.BREAKPOINT_3`
    border-bottom: 4px solid ${colorNeutral.NEUTRAL_TINT_100};
    font-size: ${fontSize.FONT_SIZE_6};
  `};

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &.odp-active-tab {

    ${S_AccordionIcon} {
      transform: rotate(180deg);

      span:nth-child(1) {
        opacity: 0;
      }

      span:nth-child(2) {
        width: .5rem;
        transform: translateX(-8px)
      }

      ${mediaQuery.BREAKPOINT_3`
        span:nth-child(2) {
          width: 1rem;
          transform: translateX(-16px)
        }
    `};
    }
  }
`;

export default Accordion