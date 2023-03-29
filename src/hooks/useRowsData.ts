import { useState, useEffect } from "react";

const useRowsData = (num?: number) => {
  const [row1, setRow1] = useState<number[]>([]);
  const [row2, setRow2] = useState<number[]>([]);
  const [row3, setRow3] = useState<number[]>([]);
  const [row4, setRow4] = useState<number[]>([]);
  const [row5, setRow5] = useState<number[]>([]);
  
  const rows = [row1, row2, row3, row4, row5];
  const stateFuncs = [setRow1, setRow2, setRow3, setRow4, setRow5];
  const nums = Array.from({ length: num! }, (_, i) => i + 1);
  

 useEffect(()=> {
    console.log("row1 " ,row1)
    console.log("row2 " ,row2)
    console.log("row3 " ,row3)
    console.log("row4 " ,row4)
    console.log("row5 " ,row5)
 }, [row1, row2, row3, row4, row5])
  
  return { rows, stateFuncs, nums };
};

export default useRowsData;

/**
 * 
 * data =  [
 *    [1],
 *    [1,5],
 *    [1,9,8,7],
 *    [1],
 *    [1],
 * ]
 */