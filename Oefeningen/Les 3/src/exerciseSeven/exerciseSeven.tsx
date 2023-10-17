import styled from 'styled-components'
import {ChangeEvent, ChangeEventHandler, FunctionComponent, useState} from 'react'
import './range.css'

const BmiLabel = styled.div`
  font-family: Verdana, serif;
  font-size: 20px;
`

const calculateBMI = (hoogteInCm: number, massa: number): number => {
    const hoogteInM = hoogteInCm / 100
    return Math.round(massa / (hoogteInM * hoogteInM))
}

const BMIContainer = styled.div`
  padding: 20px 40px;
  border: #333 2px dotted;
  width: 450px;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

interface SliderData{
    value:number
    min:number,
    max:number,
    changeHandler:ChangeEventHandler<HTMLInputElement>
}

const Slider:FunctionComponent<SliderData> = ({value, min, max, changeHandler}) => {
    return(
        <input type={'range'} max={max} min={min} value={value} onChange={changeHandler} />
    )
}

const ExerciseSeven: FunctionComponent = () => {
    const [height, setHeight] = useState(160)
    const [mass, setMass] = useState(60)

    return (
        <>
            <BMIContainer>
                <BmiLabel>Mass: {mass} KG</BmiLabel>
                <Slider value={mass} min={35} max={200} changeHandler={ (evt:ChangeEvent<HTMLInputElement>) =>{
                    setMass(parseInt(evt.target.value))
                }}/>
                <BmiLabel>Height: {height} CM</BmiLabel>
                <Slider value={height} min={40} max={220} changeHandler={ (evt:ChangeEvent<HTMLInputElement>) =>{
                    setHeight(parseInt(evt.target.value))
                }}/>
                <BmiLabel>Bmi: {calculateBMI(height, mass)}</BmiLabel>
            </BMIContainer>
        </>
    )
}

export default ExerciseSeven
