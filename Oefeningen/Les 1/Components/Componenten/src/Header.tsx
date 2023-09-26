import {FunctionComponent} from "react";

interface  Header{
    numberString: string
}

export const Header: FunctionComponent<Header> = (props : Header) => {

    const {numberString} = props

    return(
        <>
            <div className={"header"}>{numberString}</div>
        </>
    )

}