 const addTheWordCool = function(array){
      array.push ("cool");

      return array;
  } 

  const arrayexample = ["nice", "awesome", "tof"];
  console.log("Add cool:", addTheWordCool(arrayexample));
 // resultaat: ["nice", "awesome", "tof", "cool"]

const amountOfElementsInArray = function(array){
      return array.length;
}
 console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

  // 3
const selectBelgiumFromBenelux = function(array){
      return array[0];
}
  console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
  // resultaat: "Belgie" 


const lastElementInArray = function(array){
      return array[3];
}
  console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"



  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
  return array.slice(1)
  }
  const impeachTrumpSplice = function(array) {
   return array.splice(1)     
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


const stringsTogether = function(array) {
  return array.join(' ')
}

  console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"



const combineArrays = function(array , array2) {
      return array.concat(array2)
}

  console.log(combineArrays([1,2,3], [4,5,6])) 
  // resultaat: [1,2,3,4,5,6]