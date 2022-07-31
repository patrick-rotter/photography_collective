import React from 'react'
import styled from 'styled-components'
import { Indicator } from './Indicator'
import { useStore } from '../../store'
import { photos } from '../../fixtures/photos'

// TODO: Check font in design.. looks different although css is the same
const StyledIndicatorBar = styled.div`
  display: inline-block;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica';
  font-weight: 400;
  font-style: normal;
  font-size: 10px;
  letter-spacing: 0.08em;
`

const Container = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`

export const IndicatorBar: React.FC = () => {
  const index = useStore((state) => state.offset)

  return (
    <StyledIndicatorBar>
      <div>
        {photos[index].id} OF {photos.length}
      </div>
      <Container>
        {Array(photos.length)
          .fill(0)
          .map((_, i) =>
            i === photos[index].id - 1 ? (
              <Indicator filled={true} key={i} />
            ) : (
              <Indicator filled={false} key={i} />
            )
          )}
      </Container>
    </StyledIndicatorBar>
  )
}
