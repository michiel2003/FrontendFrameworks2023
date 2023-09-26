import {FunctionComponent} from "react";
import {MultiplicationTable} from "./MultiplicationTable.tsx";

interface ExerciseOne{

}


export const ExerciseOne: FunctionComponent<ExerciseOne> = () =>{


    return (
        <div className={'exercise'}>
            <div><MultiplicationTable table={3}/></div>
            <div><MultiplicationTable table={4}/></div>
            <div><MultiplicationTable table={9}/></div>
            <div><MultiplicationTable table={6}/></div>
        </div>
    );
}