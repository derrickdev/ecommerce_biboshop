function PairsToFind(arr, target) {
    let pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let s = i + 1; s < arr.length; s++) {
        if (arr[i] + arr[s] === target) {
          pairs.push([arr[i], arr[s]]);
        }
      }
    }
  
    return pairs;
  }
  const pairs1 = [1,4,6,8,10,12];
//   const secondNumber = document.querySelectorAll(pairs1)[1];
  const targetnumber = 12;
   const result =  PairsToFind (pairs1, targetnumber);
   console.log(result);
  
 

  
  