import {FunctionComponent} from "react";
import {Header} from "./Header.tsx";
import {Row} from "./Row.tsx";

interface MultiplicationTable{
    table:number
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




export const MultiplicationTable:FunctionComponent<MultiplicationTable> = (props) => {

    const {table} = props

    const solves = []

    for (let i = 1; i<= 10;i++){
        solves.push(<Row factor1={i} factor2={table}/>)
    }

    return (
        <div className={"table"}>
            <Header numberString={translate[table]}></Header>
            {solves}
        </div>
    );
};