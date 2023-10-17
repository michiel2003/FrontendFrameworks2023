import styled, {keyframes} from 'styled-components'

const slideOutLeft = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -60vw;
  }
`

const slideOutRight = keyframes`
  0% {
    left: -60vw;
  }
  100% {
    left: 0;
  }
`

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 60vw;
  margin: 0 auto;
  position: relative;

  img {
    position: relative;
    left: 0;
    width: 60vw;
    height: auto;
  }
  
  &.slideOutLeft img {
    animation-name: ${slideOutLeft};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }

  &.slideOutRight img {
    animation-name: ${slideOutRight};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
`

export default CarouselContainer
