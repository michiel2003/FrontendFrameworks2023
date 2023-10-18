import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar as starFull} from '@fortawesome/free-solid-svg-icons'
import {faStar as starOutline} from '@fortawesome/free-regular-svg-icons'
import {FunctionComponent} from 'react'

interface LabelProps {
    score: number
}

const Label: FunctionComponent<LabelProps> = ({score}) => {
    let label = 'Excellent'
    if (score < 0.1) label = 'Disaster'
    else if (score <= 0.3) label = 'Insufficient'
    else if (score <= 0.5) label = 'Sufficient'
    else if (score <= 0.6) label = 'Average'
    else if (score <= 0.8) label = 'Good'
    else if (score <= 0.9) label = 'Very good'

    return (
        <div>
            {label}
        </div>
    )
}

interface StarProps {
    full: boolean
}

const Star: FunctionComponent<StarProps> = ({full}) => {
    return <FontAwesomeIcon icon={full ? starFull : starOutline}/>
}

interface RaterProps {
    rating: number
    max: number
}

const Rater: FunctionComponent<RaterProps> = ({rating, max}) => {
    const stars = []
    for (let i = 1; i <= max; i++) {
        stars.push(<Star key={i} full={i <= rating}/>)
    }

    return (
        <div className={'rater'}>
            <Label score={rating / max}/>
            {stars}
        </div>
    )
}

export default Rater
