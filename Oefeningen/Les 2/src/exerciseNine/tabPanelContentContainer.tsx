import styled from 'styled-components'

interface TabPanelContainerProps {
    $isActive: boolean
    id: number
}

const TabPanelContentContainer = styled.div<TabPanelContainerProps>`
  margin: 0 1.5em 1.5em 1.5em;
  display: ${props => props.$isActive ? 'flex' : 'none'};
  justify-self: stretch;
`

export default TabPanelContentContainer
