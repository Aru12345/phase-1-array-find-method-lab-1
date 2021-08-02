
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 
  
  //Copy the above and paste into browser console, then execute by typing in findFive(array) to see 5 is returned
  


  const superbowlWin = record =>{
      const result = record.find(record =>record.result ==="W" )
      return result ? result.year :undefined;
  }

  
