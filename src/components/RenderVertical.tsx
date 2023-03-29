import { Button } from '@mantine/core/'
import React from 'react'
import getCurrentRow from '../utility/getCurrentRow'


type PropTypes = {
    rows: Array<number[]>,
    column?: boolean,
    stateFuncs: Array<React.Dispatch<React.SetStateAction<number[]>>>
}

const RenderVertical = ({ rows, column, stateFuncs }: PropTypes) => {



    
    const buttonList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleAllButtonClicked = (number: number) => {
        getCurrentRow({ rows, column, number, stateFuncs })
    }

    const handleClearButtonClicked = (number: number) => {
        stateFuncs.forEach(setStateFunc => {
            setStateFunc(prev => prev.filter(n => n !== number));
        })

    }


    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                {buttonList.map((number) =>
                    <div key={Math.random()}>
                        <Button
                            onClick={() => handleAllButtonClicked(number)}
                            variant='default' size='xs' mx={3.6}>
                            All
                        </Button>
                        <br />
                        <Button
                            onClick={() => handleClearButtonClicked(number)}
                            px={6}
                            mx={5}
                            mt={10}
                            variant='default' size='xs'>
                            Clear
                        </Button>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default RenderVertical