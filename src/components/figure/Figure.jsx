import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

export const Figure = styled.figure`
  margin: ${space[0]};
  position: relative;
  margin-bottom: ${props => (props.coverImage ? space[10] : space[0])};
`
