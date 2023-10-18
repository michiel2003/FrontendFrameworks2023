import {FunctionComponent} from 'react'

interface ProgressbarProps {
    percentage: number
    color: string
}

const Label: FunctionComponent<ProgressbarProps> = ({percentage, color}) => {
    return (
        <text x="180" y="25" fill={color} className={'label'}>
            {percentage} %
        </text>
    )
}


const Bar: FunctionComponent<ProgressbarProps> = ({percentage, color}) => {
    const d = `M20 55 l ${(percentage / 100) * 360} 0`
    return (
        <g fill="none" stroke={color} strokeWidth="25">
            <path strokeLinecap="round" d={d}/>
        </g>
    )
}

const ProgressBar: FunctionComponent<ProgressbarProps> = ({percentage, color}) => {
    return (
        <svg height="80" width="400">
            <Bar color="lightgrey" percentage={100}/>
            <Bar color={color} percentage={percentage}/>
            <Label color={color} percentage={percentage}/>
        </svg>
    )
}

export default ProgressBar

