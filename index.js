// Code your solution in this file

function findMatching(array, string){
  let result = array.filter(array => array.toLowerCase() === string.toLowerCase());
  return result;
}


function fuzzyMatch(array, string){
  let result = array.filter(array => array.slice(0, 2) === string.slice(0, 2));
  return result;
}

function matchName(array, string){
  let result = array.filter(array => array.name === string);
  return result;
}
