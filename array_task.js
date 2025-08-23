let arrValues=[23,45,65,78,93,90]
let arrValue=[23,45,56,87,76,90]
function interSect(values1,values2){
for (i=0;i<=arrValues.length-1;i++){
    //console.log(arrValues)
   for (j=0;j<=arrValue.length-1;j++){
      if(arrValues[i]===arrValue[j])
      console.log("Matching Array Index - " +arrValue[i])
    }
}
}
interSect(arrValues, arrValue)
