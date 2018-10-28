module.exports = function sumOfOther(arr){
  return arr.map((item, i) => arr.reduce((sum,current, j) =>{
    return i==j?sum:sum+current
  },0))
}