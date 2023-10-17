import styled from 'styled-components'

interface TabButtonProps {
    $isActive: boolean
}

const TabButton = styled.button<TabButtonProps>`
  display: inline-block;
  min-width: 6em;
  text-align: center;
  border: unset;
  font-size: 1.4em;
  background: unset;
  border-radius: 8px 8px 0 0;
  border: ${props => props.$isActive ? '1px solid rgba(58, 93, 155, 60%)' : 'none'};

  &:hover {
    border: 1px solid rgba(58, 93, 155, 60%);
  }
`

export default TabButton
