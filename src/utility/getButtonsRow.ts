type PropTypes = {
    row: number,
    returnedValue: number[] | never[],
    stateFuncs: Array<React.Dispatch<React.SetStateAction<number[]>>>
}

// const getButtonsRow = (data: PropTypes) => {
//     const { returnedValue, row, stateFuncs} = data
//     const [setRow1, setRow2, setRow3, setRow4, setRow5] = stateFuncs

//     return row  === 1 ? setRow1(returnedValue)
//     :row === 2 ? setRow2(returnedValue)
//     :row === 3 ? setRow3(returnedValue)
//     :row === 4 ? setRow4(returnedValue)
//     :row === 5 ? setRow5(returnedValue)
//     : null
    
// }
// const getButtonsRow = (data: PropTypes) => {
//     const { returnedValue, row, stateFuncs } = data;
//     const index = row - 1;
//     if (index < 0 || index >= stateFuncs.length) {
//       return null;
//     }
//     const setRow = stateFuncs[index]
//     setRow(returnedValue);
// }

const getButtonsRow = ({ returnedValue, row, stateFuncs }: PropTypes) => {
    const setRow = stateFuncs[row - 1];
    return setRow ? setRow(returnedValue) : null;
};
  

export default getButtonsRow