import {FunctionComponent} from "react";
import {Header} from "./Header.tsx";

interface ExerciseOne{
    numbertable:number
}

const translate: Record<number, string> = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
}

export const ExerciseOne: FunctionComponent<ExerciseOne> = (props) =>{

    const {numbertable} = props


    return (
        <><Header numberString={translate[numbertable]}/></>
    );
}