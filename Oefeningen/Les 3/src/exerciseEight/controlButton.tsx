import styled from 'styled-components'

interface ControlButtonProps {
    $prev: boolean
}

const ControlButton = styled.button<ControlButtonProps>`
  position: absolute;
  display: block;
  top: 50%;
  left: ${props => props.$prev ? '4%': '96%'};
  transform: translate(-50%, -50%);
  background-color: rgba(40, 44, 52, 50%);
  border-radius: 50%;
  color: white;
  font-size: 2em;
  border: unset;
  cursor: pointer;
  z-index: 5;
  line-height: 2em;
  width: 2em;
  height: 2em;
`
export default ControlButton
