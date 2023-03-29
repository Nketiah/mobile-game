import React from 'react'
import getButtonsRow from '../utility/getButtonsRow'
import {
  allButtonClicked,
  evenButtonClicked,
  oddButtonClicked,
  smallButtonClicked,
  bigButtonClicked
} from "../utility/utilityFunctions"


type PropTypes = {
  row: number,
  stateFuncs: Array<React.Dispatch<React.SetStateAction<number[]>>>
}

const RenderButtons = ({ row, stateFuncs }: PropTypes) => {


  const buttonList = [
    { name: "All", onClickHandler: allButtonClicked },
    { name: "Even", onClickHandler: evenButtonClicked },
    { name: "Odd", onClickHandler: oddButtonClicked },
    { name: "Small", onClickHandler: smallButtonClicked },
    { name: "Big", onClickHandler: bigButtonClicked },
    { name: "Clear", onClickHandler: () => { return [] } },
  ]

  const handleStateUpdate = (passedFunction: () => number[] | never[]) => {
    const returnedValue = passedFunction()
    getButtonsRow({ returnedValue, row, stateFuncs })
  }

  return (
    <div>
      {
        buttonList && buttonList.map(({ name, onClickHandler }, index) =>
          <button key={index}
            style={{ width: "100px", margin: "20px" }}
            onClick={() => handleStateUpdate(onClickHandler)}
          >
            {name}
          </button>
        )
      }
    </div>
  )
}

export default RenderButtons