import React from 'react'
import styled from 'styled-components'
import { StyledIndicatorType } from '../../global/types'

const StyledIndicator = styled.div<StyledIndicatorType>`
  width: 5px;
  height: 8px;
  border-radius: 2px;
  border: 1px solid #ffffff;
  background-color: ${(props) => (props.active ? 'white' : 'none')};
`

export const Indicator: React.FC = () => {
  return <StyledIndicator active={false} />
}
