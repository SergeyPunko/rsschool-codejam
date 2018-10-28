function sumOfOther(arr){
  return arr.map((item,i)=>arr.reduce((sum,current,j)=>i==j?sum:sum+current,0));
}