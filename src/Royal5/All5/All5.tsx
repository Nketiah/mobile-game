import { Box, Button, Tabs } from '@mantine/core/'
import React, {useEffect, useState} from 'react'
import GameSelectors from '../../components/GameSelectors'
import useRowsData from '../../hooks/useRowsData'

const All5 = () => {

const units = [2, 1, 0.2, 0.1, 0.02, 0.01, 0.002, 0.001]
const multipliers = ["x1","x5","x10", "x20", "x30", "x40", "x50", "x100"]
const { rows } = useRowsData()
const[counter, setCounter] = useState(false)


const handleUnitClick = (unit: number) => {
  alert(typeof  unit)
}

const handleMultiplierClick = (multiplier: string) => {
  let mult = multiplier.replace(/x/g, "")
  alert(Number(mult))
}

useEffect(()=> {
  ///const checkLenght = () => {
    // [...rows].forEach((row) => 
    //     console.log(row.length  !== 0 )
    // )
    console.log([...rows].every((row) => row.length === 0))
    // setTimeout(()=> {
    //   setCounter(true)
    // }, 2000)
    
 //}
},[rows])

  return (
    <Tabs defaultValue="gallery">
    <Tabs.List>
      <Tabs.Tab value="all5straightjoint">All 5 straight(joint)</Tabs.Tab>
      <Tabs.Tab value="all5group120">All 5 Group 120</Tabs.Tab>
      <Tabs.Tab value="all5group10">All 5 Group 10</Tabs.Tab>
      <Tabs.Tab value="straightmanual">All 5 straight(manual)</Tabs.Tab>
      <Tabs.Tab value="group60">All 5 Group 60</Tabs.Tab>
      <Tabs.Tab value="group5">All 5 Group 5</Tabs.Tab>
      <Tabs.Tab value="straightcombo">All 5 straight(combo)</Tabs.Tab>
      <Tabs.Tab value="group30">All 5 Group 30</Tabs.Tab>
      <Tabs.Tab value="group20">All 5 Group 20</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="all5straightjoint" pt="xs">
        <GameSelectors totalRows={5} />
       
         <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20px"}}>
            <div>
              <Box>
                units {units.map(unit =><Button variant='default' onClick={()=> handleUnitClick(Number(unit))}>{unit}</Button>)}<br/><br/> 
              </Box>
               <Box>
               Multiplier {multipliers.map(multiply => <Button  variant='default'  onClick={()=> handleMultiplierClick(multiply)}>{multiply}</Button> )}
               </Box>
            </div>
            <Box px={15}>
              <Button disabled={[...rows].every((row) => row.length === 0)} >Bet now</Button>
            </Box>
         </div>
    </Tabs.Panel>

    <Tabs.Panel value="all5group120" pt="xs">
        <GameSelectors totalRows={1}/>
    </Tabs.Panel>

    <Tabs.Panel value="all5group10" pt="xs">
       <GameSelectors totalRows={2}/>
    </Tabs.Panel>
    <Tabs.Panel value="straightmanual" pt="xs">
        {/* <GameSelectors totalRows={5}/> */}
    </Tabs.Panel>
    <Tabs.Panel value="group60" pt="xs">
       <GameSelectors totalRows={2}/>
    </Tabs.Panel>
    <Tabs.Panel value="group5" pt="xs">
       <GameSelectors totalRows={2}/>
    </Tabs.Panel>
    <Tabs.Panel value="straightcombo" pt="xs">
        <GameSelectors totalRows={2}/>
    </Tabs.Panel>
    <Tabs.Panel value="group30" pt="xs">
       <GameSelectors totalRows={2}/>
    </Tabs.Panel>
    <Tabs.Panel value="group20" pt="xs">
       <GameSelectors totalRows={2}/>
    </Tabs.Panel>
  </Tabs>
  )
}

export default All5
