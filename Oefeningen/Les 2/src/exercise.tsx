import styled from 'styled-components'
import {CSSProperties, FunctionComponent, ReactNode} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

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
    isExpanded?: boolean
}

const openBtn = <FontAwesomeIcon icon={faChevronUp}/>
const closedBtn = <FontAwesomeIcon icon={faChevronDown}/>

const Exercise: FunctionComponent<ExerciseProps> = ({background, title, children, isExpanded}) => {
    const style: CSSProperties = {
        boxShadow: '7px 2px 8px 1px rgba(18,89,46,0.67)',
        background: background ?? '#EEEEEE',
        minHeight: '7em',
        padding: '.5em',
        margin: '1.5em .5em',
    }

    return (
        <>
            {isExpanded ?
                <div style={style}>
                    {openBtn}
                    <ExerciseTitle title={title}/>
                    {children}
                </div>
                :
                <div style={style}>
                    {closedBtn}
                    <ExerciseTitle title={title}/>
                </div>
            }
        </>
    )
}

export default Exercise
