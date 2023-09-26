import {FunctionComponent} from "react";

interface Row{
    factor1:number
    factor2:number

}

export const Row: FunctionComponent<Row> = (props) => {

    const {factor1, factor2} = props

    return (
        <div>
            {factor1} x {factor2} = {factor1*factor2}
        </div>
    );
};