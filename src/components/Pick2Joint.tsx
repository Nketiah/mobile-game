import { Box, Button } from '@mantine/core/'
import React, { useState, useEffect } from 'react'

const Pick2Joint = () => {

    const [row1, setRow1] = useState<string[]>([])
    const [row2, setRow2] = useState<string[]>([])
    const [row3, setRow3] = useState<string[]>([])
    const [row4, setRow4] = useState<string[]>([])
    const [row5, setRow5] = useState<string[]>([])

    const [allSelect, setAllSelect] = useState<string[][]>([])
    const [userSelections, setUserSelections] = useState<string[]>([])
    const [totalBet, setTotalBet] = useState(0)
    const numsList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleNumberSelection = (num: string, row: number) => {

        if (row === 1) {
            const newRow = row1.includes(num) ? row1.filter(w => w !== num) : [...row1, num];
            setRow1(newRow);
        } else if (row === 2) {
            const newRow = row2.includes(num) ? row2.filter(w => w !== num) : [...row2, num];
            setRow2(newRow);
        }
        else if (row === 3) {
            const newRow = row3.includes(num) ? row3.filter(w => w !== num) : [...row3, num];
            setRow3(newRow);
        }

        else if (row === 4) {
            const newRow = row4.includes(num) ? row4.filter(w => w !== num) : [...row4, num];
            setRow4(newRow);
        }
        else if (row === 5) {
            const newRow = row5.includes(num) ? row5.filter(w => w !== num) : [...row5, num];
            setRow5(newRow);
        }
    }



    useEffect(() => {

        const combinations =  getCombinationfor5(row1, row2, row3, row4, row5)
        setAllSelect(combinations);
        setUserSelections([...row1, ...row2, ...row3, ...row4, ...row5])

        console.log("All combinations  ", combinations)
        console.log("user selection  ", userSelections)

    }, [row1, row2, row3, row4, row5]);



     // for five rows
      const getCombinationfor5 = (row1: any[], row2: any[], row3: any[], row4: any[], row5: any[]) => {
        const combinations = [];
        const rows = [row1, row2, row3, row4, row5];
      
        for (let i = 0; i < 5; i++) {
          for (let j = i + 1; j < 5; j++) {
            for (let k = 0; k < rows[i].length; k++) {
              for (let l = 0; l < rows[j].length; l++) {
                combinations.push([rows[i][k], rows[j][l]]);
              }
            }
          }
        }
      
        return combinations;
      };


    return (
        <div>
            <Box mt={20} ml={50}>
                {
                    numsList && numsList.map((number, index) =>
                        <Button
                            key={index}
                            onClick={() => handleNumberSelection(number + '_1' + index, 1)}
                            mx={3}
                        variant={`${userSelections.includes(number + '_1' + index) ? 'light' : 'default'}`}
                        >
                            {number}
                        </Button>
                    )
                }
            </Box>
            <br />
            <Box mt={20} ml={50}>
                {
                    numsList && numsList.map((number, index) =>
                        <Button
                            key={index}
                            onClick={() => handleNumberSelection(number + "_2" + index, 2)}
                            mx={3}
                            variant={`${userSelections.includes(number + '_2' + index) ? 'light' : 'default'}`}
                        >
                            {number}
                        </Button>
                    )
                }
            </Box>
            <br />
            <Box mt={20} ml={50}>
                {
                    numsList && numsList.map((number, index) =>
                        <Button
                            key={index}
                            onClick={() => handleNumberSelection(number + "_3" +index, 3)}
                            mx={3}
                            variant={`${userSelections.includes(number + '_3' + index) ? 'light' : 'default'}`}
                        >
                            {number}
                        </Button>
                    )
                }
            </Box>
            <br />
            <Box mt={20} ml={50}>
                {
                    numsList && numsList.map((number, index) =>
                        <Button
                            key={index}
                            onClick={() => handleNumberSelection(number + "_4" + index, 4)}
                            mx={3}
                            variant={`${userSelections.includes(number + '_4' + index) ? 'light' : 'default'}`}
                        >
                            {number}
                        </Button>
                    )
                }
            </Box>
            <br />
            <Box mt={20} ml={50}>
                {
                    numsList && numsList.map((number, index) =>
                        <Button
                            key={index}
                            onClick={() => handleNumberSelection(number + "_5" + index, 5)}
                            mx={3}
                            variant={`${userSelections.includes(number + '_5' + index) ? 'light' : 'default'}`}
                        >
                            {number}
                        </Button>
                    )
                }

                <div>{allSelect.length === 1 ? allSelect.length + " bet" : allSelect.length + " bets"} </div>
            </Box>

        </div>
    )
}

export default Pick2Joint