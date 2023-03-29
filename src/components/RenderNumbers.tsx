import React from 'react'
import findCurrentRow from '../utility/getCurrentRow'
import getCurrentRow from '../utility/SelectedRow'
import { Button } from '@mantine/core';

type PropTypes = {
  rows: Array<number[]>,
  row: number,
  stateFuncs: Array<React.Dispatch<React.SetStateAction<number[]>>>
}


const RenderNumbers = ({ rows, row, stateFuncs }: PropTypes) => {

  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


  const handleNumberSelection = (number: number) => {
    const data = { rows, row, number, stateFuncs }
    findCurrentRow(data)
  }

  return (
    <div>
      <div>
        {
          numbers && numbers.map((number: number, index) =>
            <Button
              variant='default'
              mx={3}
              key={index}
              onClick={() => handleNumberSelection(number)}
              className={`number-button ${getCurrentRow({ rows, number, row })}`}
            >
              {number}
            </Button>
          )
        }
      </div>
    </div>
  )
}

export default RenderNumbers