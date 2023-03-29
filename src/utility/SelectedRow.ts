type PropTypes = {
    rows: Array<number[]>,
    number: number,
    row: number
}

const SelectedRow = ({rows, number, row}: PropTypes) => {
    const currentRow = rows[row - 1];
    return currentRow.includes(number) ? 'selected' : null
}

 
export default SelectedRow