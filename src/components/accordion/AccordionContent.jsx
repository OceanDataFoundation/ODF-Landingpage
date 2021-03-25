import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";

const AccordionContent = ({ animate, children }) => {
   return (
     <S_AccordionContent
       key="content"
       initial="collapsed"
       animate={animate}
       exit="collapsed"
       transition={{ ease: "easeInOut", duration: 0.5 }}>
       {children}
     </S_AccordionContent>
   );
 };

const variants = {
  open: { height: "auto" },
  collapsed: { height: 0 },
};

const S_AccordionContent = styled(motion.div).attrs(() => ({
  initial: "collapsed",
  variants,
}))`
overflow: hidden;
`;

export default AccordionContent