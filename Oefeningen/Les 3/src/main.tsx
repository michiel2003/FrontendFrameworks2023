import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import Exercise from './exercise.tsx'
import ExerciseOne from './exerciseOne/exerciseOne.tsx'
import ExerciseTwo from './exerciseTwo/exerciseTwo.tsx'
import ExerciseThree from './exerciseThree/exerciseThree.tsx'
import ExerciseFour from './exerciseFour/exerciseFour.tsx'
import ExerciseFive from './exerciseFive/exerciseFive.tsx'

import './assets/main.css'
import ExerciseSix from "./exerciseSix/exerciseSix.tsx";
import ExerciseSeven from "./exerciseSeven/exerciseSeven.tsx";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <Exercise title={'Exercise 1: Multiplication Table'}>
            <ExerciseOne/>
        </Exercise>
        <Exercise title={'Exercise 2: Rater'} background={'#77EEEE'}>
            <ExerciseTwo/>
        </Exercise>
        <Exercise title={'Exercise 3: Progressbar'}>
            <ExerciseThree/>
        </Exercise>
        <Exercise title={'Exercise 4: Number grid'} background={'#99EEEE'}>
            <ExerciseFour/>
        </Exercise>
        <Exercise title={'Exercise 5: Comment card'}>
            <ExerciseFive/>
        </Exercise>
        <Exercise title={'Exercise 6: Calculator'}>
            <ExerciseSix/>
        </Exercise>
        <Exercise title={'BMI Calculator'}>
            <ExerciseSeven/>
        </Exercise>
    </StrictMode>,
)
