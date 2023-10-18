import {FunctionComponent} from 'react'

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

const numberToWord = (number: number) => {
    return translate[number]
}

interface HeaderProps {
    table: number
}

const Header: FunctionComponent<HeaderProps> = ({table}) => {
    return (
        <div className={'header'}>
            {numberToWord(table)}
        </div>
    )
}

interface RowProps {
    factor1: number
    factor2: number
}

const Row: FunctionComponent<RowProps> = ({factor1, factor2}) => {
    return (
        <div className={'row'}>
            {factor1} x {factor2} = {factor1 * factor2}
        </div>
    )
}

interface MultiplicationTableProps {
    table: number
}

const MultiplicationTable: FunctionComponent<MultiplicationTableProps> = ({table}) => {
    const rows = []

    for (let i = 1; i < 11; i++) {
        rows.push(<Row key={i*table} factor1={i} factor2={table}/>)
    }

    return (
        <div className={'table'}>
            <Header table={table}/>
            {rows}
        </div>
    )
}

export default MultiplicationTable
