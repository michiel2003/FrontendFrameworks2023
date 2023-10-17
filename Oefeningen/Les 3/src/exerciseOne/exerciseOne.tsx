import {FunctionComponent} from 'react'
import MultiplicationTable from './multiplicationTable.tsx'

const ExerciseOne: FunctionComponent = () => {
    return (
        <div className={'exercise'}>
            <MultiplicationTable table={9}/>
            <MultiplicationTable table={3}/>
        </div>
    )
}

export default ExerciseOne
