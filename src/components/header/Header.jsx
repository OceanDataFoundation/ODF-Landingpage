import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

export const Header = styled.header`
  max-width: ${props => (props.fullWidth ? 'inherit' : '70ch')};
  margin: ${space[0]};
`
