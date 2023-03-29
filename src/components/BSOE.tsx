import { Box, Button, SimpleGrid } from '@mantine/core/'
import React, { useEffect, useState } from 'react'

const BSOE = () => {

    const [row1, setRow1] = useState<string[]>([])
    const [row2, setRow2] = useState<string[]>([])
    const [row3, setRow3] = useState<string[]>([])
    const row1buttons = ["Big", "Small", "Odd", "Even"]
    const row2buttons = ["Big", "Small", "Odd", "Even"]
    const row3buttons = ["Big", "Small", "Odd", "Even"]
    const row4buttons = ["Big", "Small", "Odd", "Even", "Big", "Small", "Odd", "Even", "Big", "Small", "Odd", "Even"]
    const [allSelect, setAllSelect] = useState<string[][]>([])
    const [allWords, setAllWords] = useState<string[]>([]);


    const handleButtonClick = (word: string, row: number) => {
        if (row === 1) {
            const newRow = row1.includes(word) ? row1.filter(w => w !== word) : [...row1, word];
            setRow1(newRow);
        } else if (row === 2) {
            const newRow = row2.includes(word) ? row2.filter(w => w !== word) : [...row2, word];
            setRow2(newRow);
        }
        else if (row === 3) {
            const newRow = row3.includes(word) ? row3.filter(w => w !== word) : [...row3, word];
            setRow3(newRow);
        }
    };


    useEffect(() => {

        // const combinations = getCombinationsfor1(row1);
        // setAllSelect(combinations);
        // setAllWords([...row1])

        const combinations = getCombinations2(row1, row2);
        setAllSelect(combinations);
        setAllWords([...row1, ...row2])

        // const combinations = getCombinationsfor3(row1, row2, row3);
        // setAllSelect(combinations);
        // setAllWords([...row1, ...row2, ...row3]);

        console.log("All combinations", combinations)

    }, [row1, row2, row3]);



    // for One row
    const getCombinationsfor1 = (arr1: any) => {
        const combinations = []

        for (let i = 0; i < arr1.length; i++) {
            combinations.push([arr1[i]])
        }

        return combinations
    }


    // for two rows
    const getCombinations2 = (arr1: any, arr2: any) => {
        const combinations = []

        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                combinations.push([arr1[i], arr2[j]])
            }
        }
        return combinations
    }

    // for three rows
    const getCombinationsfor3 = (arr1: any, arr2: any, arr3: any) => {
        const combinations = [];

        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                for (let k = 0; k < arr3.length; k++) {
                    combinations.push([arr1[i], arr2[j], arr3[k]]);
                }
            }
        }

        return combinations;
    };



    return (
        <Box ml={50} mt={50}>
            {/* <div>
                <>
                    <SimpleGrid cols={4} w={400}>
                        {
                            row4buttons.map((button, index) =>
                                <Button
                                    onClick={() => handleButtonClick(button + index, 1)}
                                    key={index}
                                    mx={4}
                                    variant={`${allWords.includes(button + index) ? 'light' : 'default'}`}
                                >
                                    {button}
                                </Button>
                            )
                        }
                    </SimpleGrid>
                </>
            </div>
            <br /> */}
            <div>
                {
                    row1buttons.map((button, index) =>
                        <Button
                            onClick={() => handleButtonClick(button + 1, 1)}
                            key={index}
                            mx={4}
                            variant={`${allWords.includes(button + 1) ? 'light' : 'default'}`}
                        >
                            {button}
                        </Button>
                    )
                }
            </div>
            <br />
            <div>
                {
                    row2buttons.map((button, index) =>
                        <Button
                            onClick={() => handleButtonClick(button + 2, 2)}
                            key={index}
                            mx={4}
                            variant={`${allWords.includes(button + 2) ? 'light' : 'default'}`}
                        >
                            {button}
                        </Button>
                    )
                }
            </div>
            {/* <br />
            <div>
                {
                    row3buttons.map((button, index) =>
                        <Button
                            onClick={() => handleButtonClick(button + 3, 3)}
                            key={index}
                            mx={4}
                            variant={`${allWords.includes(button + 3) ? 'light' : 'default'}`}
                        >
                            {button}
                        </Button>
                    )
                }
            </div> */}
            <div>{allSelect.length === 1 ? allSelect.length + " bet" : allSelect.length + " bets"} </div>

        </Box>
    )
}

export default BSOE