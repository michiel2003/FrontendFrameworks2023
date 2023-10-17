import styled from 'styled-components'
import ProgressBar from './progressBar.tsx'
import {FunctionComponent} from 'react'

const ExerciseThreeDiv = styled.div`
  flex-direction: column;
`

const ExerciseThree: FunctionComponent = () => {
    return (
        <ExerciseThreeDiv className={'exercise'}>
            <ProgressBar color={'#ce4b99'} percentage={75}/>
            <ProgressBar color={'#ce1b29'} percentage={15}/>
            <ProgressBar color={'#125b69'} percentage={65}/>
        </ExerciseThreeDiv>
    )
}

export default ExerciseThree
