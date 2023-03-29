const numbers: number[] = [0,1,2,3,4,5,6,7,8,9,]
// 0552685139


// returns an array of 0 - 9 numbers
const allButtonClicked = () => {
    let generatedNumers = []
    for (const number of numbers) {
        generatedNumers.push(number)
    }
    return generatedNumers.sort()
}


// returns an array of even numbers
const evenButtonClicked = () => {
    let generatedNumers = []
    for (const number of numbers) {
        number % 2 === 0 && generatedNumers.push(number)
    }
    return generatedNumers.sort()
}


// returns an array of odd numbers
const oddButtonClicked = () => {
    let generatedNumers = []
    for (const number of numbers) {
        number % 2 === 1 && generatedNumers.push(number)
    }
    return generatedNumers.sort()
}


// returns an array of 0 - 4 numbers
const smallButtonClicked = () => {
   return numbers.filter((num) => num < 5).sort()
}


// returns an array of 5 - 9 numbers
const bigButtonClicked = () => {
    return numbers.filter((num) => num > 4).sort()
}



export {
    allButtonClicked,
    evenButtonClicked,
    oddButtonClicked,
    smallButtonClicked,
    bigButtonClicked,
}
