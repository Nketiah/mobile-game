type ParamTypes = {
    rows: Array<number[]>,
    row?: number,
    column?: boolean,
    number: number,
    stateFuncs: Array<React.Dispatch<React.SetStateAction<number[]>>>
}
   

const getCurrentRow = ({ rows, row, column, number, stateFuncs }: ParamTypes) => {
  if (column) {
    stateFuncs.forEach(setStateFunc => setStateFunc(prev => prev.includes(number) ? prev : [...prev, number].sort()));
  } else {
    const currentRow = rows[row! - 1];
    const newData = currentRow.includes(number) 
      ? currentRow.filter(n => n !== number) 
      : [...currentRow, number];
    stateFuncs[row! - 1](newData.sort());
  }
}



export default getCurrentRow