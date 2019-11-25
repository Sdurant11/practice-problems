
function sumArray(arr){
  var total = 0;
	for (var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

function fitWithinVal(arr, val){
  //declare a number variable to add values to in order to check
  //instantiate an array to push the nums that fit into
  //loop through the array and check if each number can be added to the total without going over val amt
    //if it can be added, add it to the total and push that value into numsThatFitArr
    //if not, move on until loop is finished
    //return numsThatFitArr

  var numsThatFitArr = [];
  var total = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] + total <= val){
      total += arr[i];
      numsThatFitArr.push(arr[i]);
    }
  }
  return numsThatFitArr;

}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
