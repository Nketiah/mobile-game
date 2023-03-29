import { Box, Button } from '@mantine/core/'
import React, { useEffect, useState } from 'react'

const Pick2GroupJoint = () => {

    const [userSelections, setUserSelections] = useState<number[]>([]);
    const [totalBet, setTotalBet] = useState(0);
    const numsList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


    const handleNumberSelection = (num: number) => {

        const newItem = userSelections.includes(num) ? userSelections.filter(w => w !== num) : [...userSelections, num]
        setUserSelections(newItem)

    }

    useEffect(() => {

        console.log("user selection ", userSelections);
        const combinations = getCombinations(userSelections.length, 2)
        setTotalBet(combinations)
        console.log("All combinations", combinations)

    }, [userSelections])


    function getCombinations(n: any, r: any) {
       
        // Check for invalid input
        if (n < 1 || r < 0 || r > n) {
            return 0;
        }

        // Special cases for r = 0 and r = n
        if (r === 0 || r === n) {
            return 1;
        }

        // Special case for r = 2 and n = 2
        if (r === 2 && n === 2) {
            return 1;
        }

        // Calculate the number of combinations using the formula nCr = n! / (r! * (n-r)!)
        let numerator = 1;
        let denominator = 1;
        for (let i = 1; i <= r; i++) {
            numerator *= (n + 1 - i);
            denominator *= i;
        }
        return numerator / denominator;
    }


    return (
        <div>
            <Box mt={20} ml={50}>
                {
                    numsList && numsList.map((number, index) =>
                        <Button
                            key={index}
                            onClick={() => handleNumberSelection(number + index)}
                            mx={3}
                            variant={`${userSelections.includes(number + index) ? 'light' : 'default'}`}
                        >
                            {number}
                        </Button>
                    )
                }
                <Box ml={20} mt={20}>{totalBet + "bets"}</Box>
            </Box>
        </div>
    )
}

export default Pick2GroupJoint