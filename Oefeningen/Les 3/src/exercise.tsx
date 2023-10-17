import styled from 'styled-components'
import {CSSProperties, FunctionComponent, ReactNode} from 'react'

const TitleDiv = styled.div`
  font-family: "Lucida Sans", Monaco, monospace;
  font-size: 3rem;
  letter-spacing: 3px;
  color: #3A5D9B;
  font-weight: 300;
  font-style: oblique;
  line-height: 1.2;
`

interface ExerciseTitleProps {
    title: string
}

const ExerciseTitle: FunctionComponent<ExerciseTitleProps> = ({title}) => {
    return (
        <TitleDiv>
            {title}
        </TitleDiv>
    )
}

interface ExerciseProps {
    background?: string
    title: string
    children: ReactNode
}

const Exercise: FunctionComponent<ExerciseProps> = ({background, title, children}) => {
    const style: CSSProperties = {
        boxShadow: '7px 2px 8px 1px rgba(18,89,46,0.67)',
        background: background ?? '#EEEEEE',
        minHeight: '7em',
        padding: '.5em',
        margin: '1.5em .5em',
    }

    return (
        <div style={style}>
            <ExerciseTitle title={title}/>
            {children}
        </div>
    )
}

export default Exercise
