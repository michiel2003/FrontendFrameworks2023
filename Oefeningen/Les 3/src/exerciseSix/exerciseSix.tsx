import styled from 'styled-components'
import {ChangeEventHandler, FunctionComponent, MouseEventHandler, useState} from 'react'

const Calculator = styled.div`
  padding: 1.5em 2em;
  background-color: #00ace6;
  max-width: 21em;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

const CalculatorButton = styled.button`
  font-family: Verdana, serif;
  font-size: 2rem;
  margin: .25em;
  font-weight: bold;
  background-color: #CCCCCC;
  color: white;
  border-radius: 5px;
  width: 3em;
  height: 2em;
  display: inline-block;
  text-align: center;
  line-height: 2em;
`

const CalculatorScreen = styled.div`
  font-family: Verdana, serif;
  color: white;
  font-size : 2em;
  min-height: 2em;
`

const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'C', '0', 'Del']

const ExerciseSix: FunctionComponent = () => {
    const calculatorbuttons = []
    const [text, setText] = useState<string>("")

    const changeHandler: MouseEventHandler<HTMLButtonElement> = (evt) =>{
        const val = evt.currentTarget.value
        if(val != "C" && val != "Del") setText(text + val)
        if(val == "C") setText("")
        if(val == "Del") setText(text.substring(0, text.length -1))
    }

    for (let i = 0; i < buttons.length; i++) {
        const value = buttons[i]
        calculatorbuttons.push(<CalculatorButton onClick={changeHandler} key={value} value={value}>{value}</CalculatorButton>)
    }

    return (
        <>
            <Calculator>
                <CalculatorScreen>{text}</CalculatorScreen>
                {calculatorbuttons}
            </Calculator>
        </>
    )
}

export default ExerciseSix
