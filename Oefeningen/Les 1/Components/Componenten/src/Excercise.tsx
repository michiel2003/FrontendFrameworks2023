import {CSSProperties, FunctionComponent} from 'react';
import styled from "styled-components";


interface Excercise{
    title: string
    background?: string
}


const Title = styled.div`
  font-family: "Lucida Sans", Monaco, monospace;
  font-size: 3rem;
  letter-spacing: 3px;
  color: #3A5D9B;
  font-weight: 300;
  font-style: oblique;
  line-height: 1.2;

`


export const Excercise: FunctionComponent<Excercise> = (props) => {

    const {title, background} = props

    const styling: CSSProperties = {
        boxShadow: '7px 2px 8px 1px rgba(18,89,46,0.67)',
        background:   background ?? '#EEEEEE',
        minHeight: '7em',
        padding: '.5em',
        margin: '1.5em .5em',
    }

    return (
        <>
            <div style={styling}>
                <Title>{title}</Title>
            </div>
        </>
    )
}
