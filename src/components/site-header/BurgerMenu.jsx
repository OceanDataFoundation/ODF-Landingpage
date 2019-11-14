import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Token
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'

const Wrapper = styled.div`
  position: relative;
  padding-top: ${space[3]};
  cursor: pointer;
  display: block;

  & span {
    background: ${colorNeutral.NEUTRAL_TINT_100};
    display: block;
    position: relative;
    width: 2rem;
    height: ${space[1]};
    margin-bottom: ${space[3]};
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <Wrapper onClick={() => setOpen(!open)}>
      <div className={open ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  )
}

export default BurgerMenu

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
